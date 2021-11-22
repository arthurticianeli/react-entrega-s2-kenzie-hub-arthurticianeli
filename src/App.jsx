import Routes from "./routes";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";

import { useState, useCallback } from "react";
import axios from "axios";

import api from "./services/";

function App() {
  const [users, setUsers] = useState([]);
  const [requestError, setRequestError] = useState();
  const [acessToken, setAcessToken] = useState("");

  const authAxios = axios.create({
    baseURL: api,
    headers: {
      Authorization: `Bearer ${acessToken}`,
    },
  });

  console.log(users);
  console.log(requestError);

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
