import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { ArrowLeftIcon, ArrowRightIcon } from "../components/Icons";
import Loader from "../components/Loader";
import { PHOTOS_API } from "../config";

// How many photos to show at first, and per "Show more" click.
const PAGE_SIZE = 24;

const altFor = (i) => `Photo ${i + 1} of Mrs. Sunmola Christiana Titilayo`;

function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const closeRef = useRef();
  const photo = photos[index];
  const many = photos.length > 1;

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && many) onPrev();
      if (e.key === "ArrowRight" && many) onNext();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onPrev, onNext, many]);

  // Preload neighbours so stepping through feels instant
  useEffect(() => {
    if (!many) return;
    [index - 1, index + 1].forEach((i) => {
      const p = photos[(i + photos.length) % photos.length];
      if (p) new Image().src = p.src;
    });
  }, [index, photos, many]);

  const navBtn =
    "absolute top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1c1916]/95 p-4 sm:p-10"
      onClick={onClose}
    >
      <img
        key={photo.src}
        src={photo.src}
        alt={altFor(index)}
        className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      >
        Close
      </button>

      {many && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous photo"
            className={`${navBtn} left-3 sm:left-6`}
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next photo"
            className={`${navBtn} right-3 sm:right-6`}
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs tracking-widest text-white/70">
            {index + 1} / {photos.length}
          </p>
        </>
      )}
    </div>
  );
}

Lightbox.propTypes = {
  photos: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

function Photos() {
  const [photos, setPhotos] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [open, setOpen] = useState(null);
  const sectionRef = useRef();

  useEffect(() => {
    document.title = "Mrs. Sunmola | Photos";
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const res = await fetch(PHOTOS_API, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const { data } = await res.json();
        // Backend field is spelled "imageURl"
        const list = (data || [])
          .map((p) => ({ id: p._id, src: p.imageURl || p.imageUrl }))
          .filter((p) => p.src);
        setPhotos(list);
        setStatus("ready");
      } catch (err) {
        if (err.name !== "AbortError") setStatus("error");
      }
    })();

    return () => controller.abort();
  }, []);

  const count = photos.length;
  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(
    () => setOpen((i) => (i - 1 + count) % count),
    [count]
  );
  const next = useCallback(() => setOpen((i) => (i + 1) % count), [count]);

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16"
    >
      <div className="text-center">
        <h2 className="font-serif text-3xl font-medium text-ink">Photos</h2>
        <div className="ornament mt-4">
          <span className="h-1 w-1 rounded-full bg-current" />
        </div>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          Cherished moments from a life well lived.
        </p>
        {status === "ready" && count > 0 && (
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink-muted">
            {count} photos
          </p>
        )}
      </div>

      {status === "loading" && <Loader />}

      {status === "error" && (
        <p className="mt-10 text-center text-ink-muted">
          We couldn&apos;t load the photos right now. Please try again later.
        </p>
      )}

      {status === "ready" && count === 0 && (
        <p className="mt-10 text-center font-serif text-lg italic text-ink-muted">
          Photos will be shared here soon.
        </p>
      )}

      {status === "ready" && count > 0 && (
        <>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {photos.slice(0, visible).map((photo, i) => (
              <li key={photo.id}>
                <button
                  onClick={() => setOpen(i)}
                  aria-label={`Open ${altFor(i)}`}
                  className="group block w-full overflow-hidden rounded-xl bg-white p-1 shadow-soft ring-1 ring-line transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft sm:p-1.5"
                >
                  <div className="aspect-square overflow-hidden rounded-lg bg-parchment">
                    <img
                      src={photo.src}
                      alt={altFor(i)}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </button>
              </li>
            ))}
          </ul>

          {visible < count && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="btn-ghost"
              >
                Show more
              </button>
              <p className="mt-3 text-xs text-ink-muted">
                Showing {visible} of {count}
              </p>
            </div>
          )}
        </>
      )}

      {open !== null && (
        <Lightbox
          photos={photos}
          index={open}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}

export default Photos;
