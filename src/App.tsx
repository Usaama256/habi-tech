import { ReactElement } from "react";
import Router from "./routing/Router";
import { Provider } from "react-redux";
import { reduxPersistor, reduxStore } from "./utils/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

const App = (): ReactElement => {
  return (
    <Provider store={reduxStore}>
      <PersistGate persistor={reduxPersistor} loading={null}>
        <BrowserRouter>
          <SnackbarProvider maxSnack={3}>
            <Router />
          </SnackbarProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
