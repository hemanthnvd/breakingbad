import { useRouter } from "next/router";
import { Provider } from "react-redux";
import AuthContextProvider from "../components/Auth/AuthContext";
import ProtectedRoute from "../components/Auth/ProtectedRoute";
import store from "../store/store";
import "../styles/globals.css";

const authRequired = ["/account"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AuthContextProvider>
      <Provider store={store}>
        {authRequired.includes(router.pathname) ? (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        ) : (
          <Component {...pageProps} />
        )}
      </Provider>
    </AuthContextProvider>
  );
}

export default MyApp;
