import { Provider } from "react-redux";
import { store } from "features";
import { Layout } from "components";
import type { AppProps } from "next/app";
import "@fontsource/space-mono";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
