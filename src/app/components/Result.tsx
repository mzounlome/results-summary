"use client";
import { FC } from "react";

interface ResultProps {}

const Result: FC<ResultProps> = ({}) => {
  return (
    <div className="bg-gradient-to-b from-indigo-700 to via-purple-600 to-blue-600  h-1/2 p-8  rounded-b-xl flex flex-col  items-center justify-evenly desktop:w-3/12 desktop:h-full desktop:rounded-xl">
      <h1 className="">Your Result</h1>
      <div className="bg-gradient-to-b from-indigo-700 to-blue-600 rounded-full h-40 w-40 flex flex-col items-center p-8 ">
        <h1 className="text-6xl font-bold">76</h1>
        <h3 className="text-gray-400">of 100</h3>
      </div>
      <h1 className="text-2xl">Great</h1>
      <p className="text-center px-28 desktop:px-5">
        You scored higher that 65% of the people have taken these tests.
      </p>
    </div>
  );
};

export default Result;
