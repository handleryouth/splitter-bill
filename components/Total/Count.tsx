import { useCallback } from "react";
import { CountProps } from "types";

const Count = ({ title, value }: CountProps) => {
  const handleInfinityNumber = useCallback(() => {
    switch (value) {
      case Infinity:
        return 0;
      default:
        return value;
    }
  }, [value]);
  return (
    <div className="flex items-center justify-between text-white mb-4">
      <h3 className=" flex flex-col">
        <span className="text-lg sm:text-xl">{title}</span>{" "}
        <span className="text-gray-500 text-sm sm:text-lg">/ person</span>
      </h3>
      <p className=" text-2xl sm:text-4xl">{handleInfinityNumber()}</p>
    </div>
  );
};

export default Count;
