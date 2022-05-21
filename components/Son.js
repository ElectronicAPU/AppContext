import React from "react";
import { useState, useEffect } from "react";
import { useAppContext } from "../Context/AppContext";

const Son = () => {
  const [sonAmount, setSonAmount] = useState(0);

  const { greatGrandFatherAmount } = useAppContext();

  useEffect(() => {
    setSonAmount(greatGrandFatherAmount);
  }, [greatGrandFatherAmount]);

  return (
    <>
      <div className=" bg-green-100 p-8 ">
        <h1 className="">Son</h1>
        <h1> CurrentAssets {greatGrandFatherAmount}</h1>
      </div>
    </>
  );
};

export default Son;
