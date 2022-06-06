import "../styles/globals.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { store } from "../app/store";

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
