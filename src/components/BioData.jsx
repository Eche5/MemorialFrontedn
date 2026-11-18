import { NavLink } from "react-router-dom";
import { useTribute } from "../Context/TributeContext";
import { BookIcon, CandleIcon, FeatherIcon, ImageIcon } from "./Icons";

const linkBase =
  "flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full px-2 py-2 text-[13px] font-medium transition-colors duration-200 sm:flex-none sm:px-5 sm:py-2.5 sm:text-sm";

const navClass = ({ isActive }) =>
  `${linkBase} ${
    isActive
      ? "bg-ink text-ivory"
      : "text-ink-soft hover:bg-gold-tint hover:text-ink"
  }`;

function BioData() {
  const { bioRef } = useTribute();

  const scrollToBio = () => {
    if (bioRef.current) {
      bioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="px-4 pt-8 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
          In loving memory of
        </p>
        <h1 className="mx-auto mt-3 max-w-2xl font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
          Mrs. Sunmola Christiana Titilayo
        </h1>
        <p className="mt-4 font-serif text-xl italic text-ink-soft">
          19th February 1980 &ndash; 23rd December 2022
        </p>
        <div className="ornament my-5">
          <span className="h-1.5 w-1.5 rotate-45 bg-current" />
        </div>
        <p className="text-sm text-ink-muted">
          42 years of impact &middot; Kaduna, Nigeria
        </p>
      </section>

      <nav
        aria-label="Memorial sections"
        className="sticky top-0 z-20 mt-10 border-y border-line/70 bg-ivory/85 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-3xl gap-1 px-2 py-2 sm:justify-center sm:px-3">
          <NavLink to="/" end onClick={scrollToBio} className={navClass}>
            <BookIcon className="hidden h-4 w-4 sm:block" />
            Biography
          </NavLink>
          <NavLink to="/services" className={navClass}>
            <CandleIcon className="hidden h-4 w-4 sm:block" />
            Services
          </NavLink>
          <NavLink to="/photos" className={navClass}>
            <ImageIcon className="hidden h-4 w-4 sm:block" />
            Photos
          </NavLink>
          <NavLink to="/tributes" className={navClass}>
            <FeatherIcon className="hidden h-4 w-4 sm:block" />
            Tributes
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default BioData;
