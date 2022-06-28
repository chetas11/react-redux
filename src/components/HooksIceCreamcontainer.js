import React from "react";
import { useSelector, useDispatch } from "react-redux";
import buyIceCream from "../redux/icecream/iceCreamAction";

function HooksIceCreamContainer() {
  const noOfIceCream = useSelector((state) => state.iceCream.noOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>No of Ice Cream - {noOfIceCream}</h1>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
}

export default HooksIceCreamContainer;
