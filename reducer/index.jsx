import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import { combineReducers } from "redux";


// const rootReducer = combineReducers({
//   index: (state = {}, action) => {
//     switch (action.type) {
//       case HYDRATE:
//         console.log("HYDRATE", action);
//         return {
//           ...state,
//           ...action.payload,
//         };
//       default: {
//         return state
//       }
//     }
//   },
//   user,
// });

// (이전상태, 액션) => 다음상태
const rootReducer = (state, action) => {
  console.log("reducer: ", state, action.type)
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user,
        // post,
      });
      return combinedReducer(state, action);
    }
  }
};


export default rootReducer;
