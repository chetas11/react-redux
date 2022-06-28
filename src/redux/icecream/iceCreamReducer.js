import { BUY_ICE_CREAM } from "./iceCreamType";

const InitialState = {
  noOfIceCream: 10,
};

const iceCreamReducer = (state = InitialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
