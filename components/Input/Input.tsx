import { InputProps } from "types";

const Input = ({
  label,
  icon,
  placeholder,
  className,
  toggleFunction,
  value,
}: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <div className="flex items-center border-2 border-slate-400 rounded overflow-hidden focus-within:border-sky-600">
        <div className="ml-2">{icon}</div>
        <input
          className={`ml-3 p-2 w-full focus:ring-0 focus:outline-none text-right ${className}`}
          type="text"
          value={value}
          onChange={(e) => toggleFunction(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
