import { marquees } from "@/data/data";

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

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-5 text-sm">
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
