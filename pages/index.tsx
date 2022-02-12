import type { NextPage } from "next";
import { InputContainer, TotalContainer } from "components";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl mb-16 flex flex-col">
        <span>Spli</span>
        <span>tter</span>
      </h1>

      <div className="flex bg-white p-11 rounded-xl flex-col custom-breakpoint:flex-row">
        <InputContainer />
        <TotalContainer />
      </div>
    </div>
  );
};

export default Home;
