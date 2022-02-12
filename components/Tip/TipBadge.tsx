interface TipBadgeProps {
  label: string;
  value: number;
  toggleFunction: (value: number) => void;
}

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
