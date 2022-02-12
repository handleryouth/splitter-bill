import { ReactNode } from "react";

interface InputProps {
  label?: string;
  icon?: ReactNode;
  placeholder: string;
  className?: string;
  toggleFunction: (value: string) => void;
}

const Input = ({
  label,
  icon,
  placeholder,
  className,
  toggleFunction,
}: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <div className="flex items-center border-2 border-slate-400 rounded overflow-hidden focus-within:border-sky-600">
        <div className="ml-2">{icon}</div>
        <input
          className={`ml-3 p-2 w-full focus:ring-0 focus:outline-none text-right ${className}`}
          type="text"
          onChange={(e) => toggleFunction(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
