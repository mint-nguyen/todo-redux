import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<AnimateSharedLayout>
				<Component {...pageProps} />
			</AnimateSharedLayout>
		</Provider>
	);
}

export default MyApp;
