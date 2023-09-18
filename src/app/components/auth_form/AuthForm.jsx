"use client";

import React from "react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useSessionContext } from "@/app/context/SessionProvider";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const { hasSession, setSession } = useSessionContext();
  const [inputValues, setInputValues] = useState({
    emailValue: "",
    passValue: "",
  });

  const hasValidInputs = inputValues.emailValue && inputValues.passValue;

  const handleSession = () => {
    setSession();
  };

  if (hasSession) {
    redirect("/pages/dashboard");
  }

  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <h2>
          STUDIO <br />
          MANAGER
        </h2>
        <form className={classes.form}>
          <div className={classes.inputDiv}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={inputValues.emailValue}
              onChange={(e) =>
                setInputValues({ ...inputValues, emailValue: e.target.value })
              }
            />
          </div>
          <div className={classes.inputDiv}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={inputValues.passValue}
              onChange={(e) =>
                setInputValues({ ...inputValues, passValue: e.target.value })
              }
            />
          </div>
          {hasValidInputs ? (
            <button
              type="submit"
              onClick={() => hasValidInputs && handleSession()}
            >
              Entrar
            </button>
          ) : (
            <button
              type="submit"
              onClick={() => hasValidInputs && handleSession()}
              disabled
            >
              Login
            </button>
          )}
        </form>
      </div>
      <div className={classes.rightSide}></div>
    </div>
  );
};

export default AuthForm;
