import React from "react";

import { useState, useEffect } from "react";
import Father from "./Father";
const GrandFather = ({ Assets }) => {
  const [grandFatherAmount, setGrandFatherAmount] = useState(0);
  

  useEffect(() => {
    setGrandFatherAmount(Assets);
  }, [Assets]);

  return (
    <>
      <div className=" bg-red-500 p-8 ">
        <h1 className="">GrandFather</h1>
        <h1> CurrentAssets {grandFatherAmount}</h1>
        <Father Box={grandFatherAmount} />
      </div>
    </>
  );
};

export default GrandFather;
