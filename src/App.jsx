import Routes from "./routes";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";

function App() {
  // const authAxios = axios.create({
  //   baseURL: api,
  //   headers: {
  //     Authorization: `Bearer ${acessToken}`,
  //   },
  // });

  // const fetchData = useCallback(async () => {
  //   try {
  //     const result = await authAxios.get("users/");
  //     setUsers(result.data);
  //   } catch (err) {
  //     setRequestError(err.message);
  //   }
  // }, []);
  // // fetchData();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
