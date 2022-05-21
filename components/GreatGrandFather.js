import React from "react";
import { useEffect } from "react";
import { useAppContext } from "../Context/AppContext";
import GrandFather from "./GrandFather";

const GreatGrandFather = () => {
  const { greatGrandFatherAmount, setGreatGrandFatherAmount } = useAppContext();

  useEffect(() => {
    setGreatGrandFatherAmount(50);
  }, []);

  return (
    <>
      <div className=" bg-red-100 p-8 ">
        <h1 className="">GreatGrandFather</h1>
        <h1> CurrentAssets {greatGrandFatherAmount}</h1>
        <GrandFather Assets={greatGrandFatherAmount} />
      </div>
    </>
  );
};

export default GreatGrandFather;
