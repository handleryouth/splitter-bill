import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "features";
import { addTotalPerson, resetransaction } from "features/transaction";
import Count from "./Count";

const TotalContainer = () => {
  const { transaction } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const total_person =
      (transaction.transaction_number +
        transaction.tip * transaction.transaction_number) /
      transaction.people_total;

    dispatch(addTotalPerson(total_person || 0));
  }, [
    dispatch,
    transaction.people_total,
    transaction.tip,
    transaction.transaction_number,
  ]);

  return (
    <div className="bg-darkCyan rounded-md p-4 basis-1/2 flex flex-col justify-between mt-4 custom-breakpoint:ml-10 custom-breakpoint:mt-0">
      <div>
        <Count title="Tip Amount" value={Number(transaction.tip.toFixed(3))} />
        <Count
          title="Total Amount"
          value={Number(transaction.total_person.toFixed(3))}
        />
      </div>

      <button
        className="bg-darkGrayishCyan2 hover:bg-lightGrayishCyan transition-colors rounded w-full py-2"
        onClick={() => dispatch(resetransaction())}
      >
        Reset
      </button>
    </div>
  );
};

export default TotalContainer;
