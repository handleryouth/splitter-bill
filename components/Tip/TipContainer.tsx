import { useDispatch } from "react-redux";
import TipBadge from "./TipBadge";
import Input from "../Input/Input";
import { addTip } from "features/transaction";

interface TipOptions {
  label: string;
  value: number;
}

const TipContainer = () => {
  const dispatch = useDispatch();
  const tipSelection: TipOptions[] = [
    { label: "5%", value: 0.05 },
    { label: "10%", value: 0.1 },
    { label: "15%", value: 0.15 },
    { label: "20%", value: 0.2 },
    { label: "25%", value: 0.25 },
  ];

  return (
    <div className="my-8">
      <h3 className="my-2">Select tip %</h3>
      <div className="grid grid-cols-3 grid-rows-2 gap-3">
        {tipSelection.map((tip, index) => (
          <TipBadge
            key={index}
            {...tip}
            toggleFunction={(value) => dispatch(addTip(value))}
          />
        ))}
        <Input
          placeholder="Custom Tip"
          className="!text-center"
          toggleFunction={(value) => dispatch(addTip(Number(value) / 100))}
        />
      </div>
    </div>
  );
};

export default TipContainer;
