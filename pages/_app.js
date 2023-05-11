import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import "@/styles/style.scss";
import { AuthContextProvider } from "@/slices/authContext";
import { ChatContextProvider } from "@/slices/chatContext";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={true} persistor={persistor}>
        <AuthContextProvider>
          <ChatContextProvider>
            <Component {...pageProps} />
          </ChatContextProvider>
        </AuthContextProvider>
      </PersistGate>
    </Provider>
  );
}
