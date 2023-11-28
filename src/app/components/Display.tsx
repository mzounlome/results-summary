"use client";
import { FC } from "react";
import Summary from "./Summary";
import Result from "./Result";

interface DisplayProps {}

const Display: FC<DisplayProps> = ({}) => {
  return (
    <div className="h-full w-full  flex flex-col bg-blue-700 items-center desktop:flex-row desktop:justify-center">
      <Result />
      <Summary />
    </div>
  );
};

export default Display;
