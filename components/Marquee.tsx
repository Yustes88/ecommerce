import React from "react";

const marquees = [
  "Absolute Inspiration",
  "Sparkle & Shine",
  "Glittering Treasures",
  "Rings",
  "Opulent Ornaments",
  "Braclettes",
  "Shimmering Elegance",
  "Necklaces",
  "Exquisite Adornments",
  "Earrings",
  "Impressive Details",
  "Genuine Impression",
  "Longlasting Effect",
];

export const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden text-sm">
      <div className="animate-marquee whitespace-nowrap py-5">
        {marquees.map((marquee) => {
          return (
            <span key={marquee} className="mx-2">
              {marquee}
            </span>
          );
        })}
      </div>

      <div className="animate-marquee2 absolute top-0 whitespace-nowrap py-5 text-sm">
        {marquees.map((marquee) => {
          return (
            <span key={marquee} className="mx-2">
              {marquee}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Marquee;
