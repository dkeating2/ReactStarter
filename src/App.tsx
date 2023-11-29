import { Provider } from "react-redux";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import theme from "./assets/theme";
import { store } from "./store/store";

import "./assets/styles/main.scss";
const queryClient = new QueryClient();

import Router from "./Router";

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
