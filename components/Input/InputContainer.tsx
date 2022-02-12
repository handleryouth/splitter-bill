import { useDispatch, useSelector } from "react-redux";
import { BsCurrencyDollar, BsFillPeopleFill } from "react-icons/bs";
import { RootState } from "features";
import { addPeople, addTransaction } from "features/transaction";
import Input from "./Input";
import TipContainer from "../Tip/TipContainer";

const InputContainer = () => {
  const dispatch = useDispatch();
  const { transaction } = useSelector((state: RootState) => state);
  return (
    <div className="basis-1/2">
      <Input
        label="Bill"
        placeholder="Bill"
        value={transaction.transaction_number}
        icon={<BsCurrencyDollar />}
        toggleFunction={(value) => dispatch(addTransaction(value))}
      />
      <TipContainer />
      <Input
        toggleFunction={(value) => dispatch(addPeople(value))}
        label="Number of people"
        value={transaction.people_total}
        placeholder="People"
        icon={<BsFillPeopleFill />}
      />
    </div>
  );
};

export default InputContainer;
