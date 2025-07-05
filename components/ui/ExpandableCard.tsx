import React, { useRef, useState } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function
) => {
  React.useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

// Add this component:
const ExpandableCard = ({ title, institution, year, details }: { title: string; institution: string; year: string; details: string }) => {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useOutsideClick(cardRef, () => setExpanded(false));

  return (
    <div
      ref={cardRef}
      className="bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer transition-all"
      onClick={() => setExpanded((prev) => !prev)}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-1">{institution} &middot; {year}</p>
      {expanded && <p className="text-gray-200 mt-2">{details}</p>}
      <div className="text-xs text-right text-gray-500 mt-2">{expanded ? "Click to collapse" : "Click to expand"}</div>
    </div>
  );
};

export default ExpandableCard;