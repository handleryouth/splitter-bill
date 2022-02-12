import { useDispatch } from "react-redux";
import { BsCurrencyDollar, BsFillPeopleFill } from "react-icons/bs";
import { addPeople, addTransaction } from "features/transaction";
import Input from "./Input";
import TipContainer from "../Tip/TipContainer";

const InputContainer = () => {
  const dispatch = useDispatch();
  return (
    <div className="basis-1/2">
      <Input
        label="Bill"
        placeholder="Bill"
        icon={<BsCurrencyDollar />}
        toggleFunction={(value) => dispatch(addTransaction(Number(value)))}
      />
      <TipContainer />
      <Input
        toggleFunction={(value) => dispatch(addPeople(Number(value)))}
        label="Number of people"
        placeholder="People"
        icon={<BsFillPeopleFill />}
      />
    </div>
  );
};

export default InputContainer;
