import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalLayout } from "../layouts/global/global.layout";

function Polyflix({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}

export default Polyflix;
