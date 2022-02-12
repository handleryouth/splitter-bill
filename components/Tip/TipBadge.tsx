import { TipBadgeProps } from "types";

const TipBadge = ({ label, value, toggleFunction }: TipBadgeProps) => {
  return (
    <input
      type="button"
      value={label}
      onClick={() => toggleFunction(value)}
      className="bg-darkCyan hover:bg-lightGrayishCyan hover:text-black transition-colors text-white p-2"
    />
  );
};

export default TipBadge;
