import React from "react";
import { useState } from "react";
import { Switch, Route } from "react-router";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import Home from "../pages/Home";
import Main from "../pages/Main";
import Register from "../pages/Register";

import api from "../services";
import axios from "axios";

function Routes() {
  let history = useHistory();

  const [id, setId] = useState("");

  // Login

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    api
      .post("/sessions", {
        email: email,
        password: password,
      })
      .then(
        (response) => {
          console.log(response);
          window.localStorage.setItem("token", response.data.token);
          history.push("/main");
        },
        (error) => {
          console.log(error);
          toast.error("E-mail ou senha incorretos");
        }
      );
  };

  const authAxios = axios.create({
    baseURL: api,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  });

  return (
    <div>
      <Toaster />
      <Switch>
        <Route exact path="/">
          <Home setEmail={setEmail} setPassword={setPassword} login={login} />
        </Route>
        <Route exact path="/register/">
          <Register setId={setId} />
        </Route>
        <Route exact path="/main/">
          <Main authAxios={authAxios} />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
