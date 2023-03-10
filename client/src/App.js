import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './components/home';
import Terms from './components/terms';
import Header from './components/header';
import Footer from './components/footer';
import Context from "./utils/context";
import Auth from "./utils/auth";
import './App.css'
import styles from './index.module.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = new Auth(gon.current_user || {});

const PublicRoute = ({ component: Component, path, layout: Layout }) => (
  <Route
    path={path}
    render={(props) => (
      <Layout>
        <Component path={path} {...props} />
      </Layout>
    )}
  />
);

const PublicOnlyRoute = ({
  component: Component,
  auth,
  path,
  layout: Layout,
}) => {
  let redirectUrl = "/";

  return (
    <Route
      exact
      path={path}
      render={(props) =>
        auth.isLoggedIn() ? (
          <Redirect to={{ pathname: redirectUrl }} />
        ) : (
          <Layout>
            <Component path={path} {...props} />
          </Layout>
        )
      }
    />
  );
}

const PrivateRoute = ({ component: Component, auth, path, layout: Layout }) => {
  const returnTo = window.location.pathname;
  const pathname = `/member/login?return_to=${encodeURIComponent(returnTo)}`;

  return (
    <Route
      // exact
      path={path}
      render={(props) =>
        auth.isLoggedIn() ? (
          <Layout>
            <Component currentUser={auth.getCurrentUser()} {...props} />
          </Layout>
        ) : (
          <Redirect to={pathname} />
        )
      }
    />
  );
};

const PublicLayout = (props) => (
  <>
    <ToastContainer />
    <Header />
    {props.children}
    <Footer />
  </>
)

function App() {
  return (
    <Context.Provider
      value={{
        auth: auth
      }}
    >
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={Home} layout={PublicLayout} />
          <PublicRoute exact path="/terms" component={Terms} layout={PublicLayout} />
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
