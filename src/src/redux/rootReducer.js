import authSlice from "./slices/authSlice";
import usersSlice from "./slices/usersSlice";
import statsSlice from "./slices/statsSlice";

const rootReducer = {
    [authSlice.name]: authSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [statsSlice.name]: statsSlice.reducer,
};

export default rootReducer;