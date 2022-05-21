import React from "react";
import { useState, useEffect } from "react";
import Son from "./Son";
const Father = ({ Box }) => {
  const [fatherAmount, setFatherAmount] = useState(0);

  useEffect(() => {
    setFatherAmount(Box);
  }, [Box]);

  return (
    <>
      <div className=" bg-green-500 p-8 ">
        <h1 className="">Father</h1>
        <h1> CurrentAssets {fatherAmount}</h1>
        <Son Son={fatherAmount} />
      </div>
    </>
  );
};

export default Father;
