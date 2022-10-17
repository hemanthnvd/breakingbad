import { Provider } from "react-redux";
import AuthContextProvider from "../components/ui/Auth/AuthContext";
import store from "../store/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthContextProvider>
  );
}

export default MyApp;
