import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { useTribute } from "../Context/TributeContext";
import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "../components/Icons";

const ADDRESS = "No.56, Aminu Tanko Street, Sabo Kaduna, Nigeria";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

function Detail({ icon: IconComponent, label, children }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gold-tint text-gold">
        <IconComponent className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
          {label}
        </p>
        <div className="mt-1.5 leading-relaxed text-ink">{children}</div>
      </div>
    </div>
  );
}

Detail.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

function Services() {
  const { serviceRef } = useTribute();

  const scrollToService = useCallback(() => {
    if (serviceRef.current) {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [serviceRef]);

  useEffect(() => {
    document.title = "Mrs. Sunmola | Services";
    scrollToService();
  }, [scrollToService]);

  return (
    <section
      ref={serviceRef}
      className="mx-auto max-w-3xl scroll-mt-20 px-5 py-16"
    >
      <div className="text-center">
        <h2 className="font-serif text-3xl font-medium text-ink">Visitation</h2>
        <div className="ornament mt-4">
          <span className="h-1 w-1 rounded-full bg-current" />
        </div>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          Family and friends are warmly invited to join us as we remember and
          celebrate her life.
        </p>
      </div>

      <div className="card mt-10 grid gap-8 p-6 sm:grid-cols-2 sm:p-8">
        <Detail icon={MapPinIcon} label="Location">
          <p>{ADDRESS}</p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-ink"
          >
            Get directions
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </Detail>

        <div className="space-y-6">
          <Detail icon={CalendarIcon} label="Date">
            <p>Monday, November 18, 2023</p>
          </Detail>
          <Detail icon={ClockIcon} label="Time">
            <p>1:00 PM &ndash; 3:45 PM</p>
          </Detail>
        </div>
      </div>
    </section>
  );
}

export default Services;
