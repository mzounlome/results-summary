"use client";
import { FC } from "react";
import Image from "next/image";
import memory from "../images/icon-memory.svg";
import reaction from "../images/icon-reaction.svg";
import verbal from "../images/icon-verbal.svg";
import visual from "../images/icon-visual.svg";
interface SummaryProps {}

const Summary: FC<SummaryProps> = ({}) => {
  const tabs = [
    {
      id: 1,
      logo: reaction,
      text: "Reaction",
      score: 80,
      color: "red-700",
    },
    {
      id: 1,
      logo: memory,
      text: "Memory",
      score: 92,
      color: "yellow-500",
    },
    {
      id: 1,
      logo: verbal,
      text: "Verbal",
      score: 61,
      color: "green-600",
    },
    {
      id: 1,
      logo: visual,
      text: "Visual",
      score: 72,
      color: "indigo-800",
    },
  ];

  return (
    <div
      className=" w-full  h-1/2 p-8 flex flex-col items-center justify-evenly bg-green-600 desktop:w-3/12 
     desktop:rounded-r-lg "
    >
      <h1 className="text-gray-700 text-xl  ml-10 mb-8 font-bold flex self-start">
        Summary
      </h1>
      {tabs.map((tab) => {
        return (
          <div className="bg-purple-100 w-10/12 h-16 flex justify-between px-7 mb-4 rounded">
            <div className="flex items-center ">
              <Image src={tab.logo} alt="logo" height={25} width={25} />

              <h1 className="ml-3 text-gray-700">{tab.text}</h1>
            </div>
            <div className="flex items-center">
              <h1 className="text-gray-700">{tab.score} / 100</h1>
            </div>
          </div>
        );
      })}

      <button className="bg-gray-700 rounded-full w-10/12 h-16">
        Continue
      </button>
    </div>
  );
};

export default Summary;
