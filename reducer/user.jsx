import cookieParser from "cookie-parser";
import produce from '../util/produce'
export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpdata: {},
  loginData: {},
};

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    console.log(draft)
    switch (action.type) {
      case "LOG_IN":
        draft.isLoggedIn = true;
        draft.me = action.data;
        break;
      case "LOG_OUT":
        // draft.user = user
        draft.isLoggedIn = false;
        draft.me = null;
        break
      default:
        break;
    }
  });

export default reducer;
