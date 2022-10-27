import { GlobalStyle } from "./assets/GlobalStyle";
import Home from "./pages/Home/Home";
import Routes from "./routes/Routes";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
