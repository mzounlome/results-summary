"use client";
import Display from "./components/Display";
import Result from "./components/Result";
import Summary from "./components/Summary";
export default function Home() {
  return (
    <div className="min-h-screen overflow-auto w-full">
      <Display />
    </div>
  );
}
