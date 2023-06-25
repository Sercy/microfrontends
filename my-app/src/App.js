import {
  StylesProvider,
  createGenerateClassName,
  CssBaseline,
} from "@material-ui/core";
import { createBrowserHistory } from "history";
import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import { Progress } from "./components/Progress";

/**
 * * performance optimization
 */
const DashboardPageLazy = lazy(() => import("./pages/DashboardPage"));
const LandingPageLazy = lazy(() => import("./pages/LandingPage"));
const PlansPageLazy = lazy(() => import("./pages/PlansPage"));
const SignInPageLazy = lazy(() => import("./pages/SignInPage"));
const SignUpPageLazy = lazy(() => import("./pages/SignUpPage"));

const generateClassName = createGenerateClassName({
  productionPrefix: "HOST_",
});

const history = createBrowserHistory();

export default function App() {
  const [isSignedIn, setIsSignIn] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    if (isSignedIn) {
      history.push("/");
    }
  }, [isSignedIn]);

  const onSignIn = () => {
    setIsSignIn(true);
  };

  const onSignUp = () => {
    setIsSignIn(true);
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setIsSignIn(false);
  };

  return (
    <Router history={history}>
      <CssBaseline />
      <StylesProvider generateClassName={generateClassName}>
        <Header isSignedIn={isSignedIn} onSignOut={handleLogOut} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth/signin">
              <SignInPageLazy onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <SignUpPageLazy onSignUp={onSignUp} />
            </Route>
            <Route path="/auth">
              <SignInPageLazy onSignIn={onSignIn} />
            </Route>
            <Route exact path="/pricing">
              <PlansPageLazy />
            </Route>
            <Route path="/">
              {isSignedIn ? <DashboardPageLazy /> : <LandingPageLazy />}
            </Route>
          </Switch>
        </Suspense>
      </StylesProvider>
    </Router>
  );
}
