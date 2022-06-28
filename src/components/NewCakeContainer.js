import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cakes/cakeAction";

function NewCakeContainer(props) {
  const [num, setNum] = useState(1);
  return (
    <div>
      <h1>Number of Cakes - {props.noOfCakes} </h1>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => props.buyCake(num)}>Buy {num} Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: num => dispatch(buyCake(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
