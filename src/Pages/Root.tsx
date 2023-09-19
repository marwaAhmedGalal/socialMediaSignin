import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { store } from "../Redux/Store/Store";

export default function Root() {
  return (
    <div className="main">
      <Provider store={store}>
        <Outlet />
      </Provider>
    </div>
  );
}
