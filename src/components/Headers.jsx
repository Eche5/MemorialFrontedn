import { NavLink } from "react-router-dom";
import pic from "../assets/WhatsApp Image 2023-08-24 at 12.25.28.jpg";

// Leaves placed along a circle, forming two laurel branches open at the top.
const CX = 150;
const CY = 150;
const R = 138;

function branch(from, to, step) {
  const leaves = [];
  let i = 0;
  for (let deg = from; step > 0 ? deg <= to : deg >= to; deg += step, i++) {
    const t = (deg * Math.PI) / 180;
    const side = i % 2 === 0 ? 1 : -1; // alternate the two sides of the stem
    const x = CX + R * Math.cos(t);
    const y = CY + R * Math.sin(t);
    // direction the branch grows, then tilt each leaf away from the stem
    const tangent = deg + (step > 0 ? 90 : -90);
    const angle = tangent + 38 * side;
    // leaves get smaller toward the branch tip
    const progress = Math.abs(deg - from) / Math.abs(to - from);
    const scale = 1.05 - progress * 0.45;
    leaves.push({ x, y, angle, scale });
  }
  return leaves;
}

const LEFT = branch(102, 248, 8);
const RIGHT = branch(78, -68, -8);

function arcPath(from, to) {
  const p = (d) => [
    CX + R * Math.cos((d * Math.PI) / 180),
    CY + R * Math.sin((d * Math.PI) / 180),
  ];
  const [x1, y1] = p(from);
  const [x2, y2] = p(to);
  const sweep = to > from ? 1 : 0;
  return `M ${x1} ${y1} A ${R} ${R} 0 0 ${sweep} ${x2} ${y2}`;
}

function Wreath() {
  return (
    <svg
      viewBox="0 0 300 300"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full text-gold"
    >
      <g
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="0.8"
      >
        <path d={arcPath(96, 252)} fill="none" />
        <path d={arcPath(84, -72)} fill="none" />
        {[...LEFT, ...RIGHT].map((l, i) => (
          <path
            key={i}
            d="M0 0 Q 7 -4.2 16 0 Q 7 4.2 0 0 Z"
            transform={`translate(${l.x} ${l.y}) rotate(${l.angle}) scale(${l.scale})`}
          />
        ))}
      </g>
    </svg>
  );
}

function Headers() {
  return (
    <header className="flex justify-center pt-6 sm:pt-10">
      <div className="relative h-80 w-80 sm:h-[25rem] sm:w-[25rem] lg:h-[29rem] lg:w-[29rem]">
        <Wreath />
        {/* Portrait doubles as the discreet admin entry point */}
        <NavLink
          to="/login"
          aria-label="Portrait of Mrs. Sunmola"
          className="absolute inset-[11%] rounded-full bg-white p-1.5 shadow-soft ring-1 ring-line"
        >
          <img
            src={pic}
            alt="Mrs. Sunmola Christiana Titilayo"
            className="h-full w-full rounded-full object-cover"
          />
        </NavLink>
      </div>
    </header>
  );
}

export default Headers;
