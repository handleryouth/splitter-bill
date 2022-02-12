import { useDispatch, useSelector } from "react-redux";
import { RootState } from "features";
import { TipOptions } from "types";
import { addTip } from "features/transaction";
import TipBadge from "./TipBadge";
import Input from "../Input/Input";

const TipContainer = () => {
  const dispatch = useDispatch();
  const { transaction } = useSelector((state: RootState) => state);
  const tipSelection: TipOptions[] = [
    { label: "5%", value: "5" },
    { label: "10%", value: "10" },
    { label: "15%", value: "15" },
    { label: "20%", value: "20" },
    { label: "25%", value: "25" },
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
          value={transaction.tip}
          className="!text-center"
          toggleFunction={(value) => dispatch(addTip(value))}
        />
      </div>
    </div>
  );
};

export default TipContainer;
