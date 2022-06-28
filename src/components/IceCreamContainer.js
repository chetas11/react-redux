import React from "react";
import buyIceCream from "../redux/icecream/iceCreamAction";
import { connect } from "react-redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h1>Number of IceCreams - {props.noOfIceCream}</h1>
      <button onClick={props.buyIceCream}>Buy iceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfIceCream: state.iceCream.noOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
