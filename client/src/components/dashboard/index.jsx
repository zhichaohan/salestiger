import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './home';

const DashboardLayout = (props) => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
)

const RouteWithLayout = ({ component: Component, path, layout: Layout }) => (
  <Route
    path={path}
    render={(props) => (
      <Layout>
        <Component path={path} {...props} />
      </Layout>
    )}
  />
);

function Dashboard() {
  return (
    <Router>
      <Switch>
        <RouteWithLayout exact path="/" component={Home} layout={DashboardLayout} />
      </Switch>
    </Router>
  )
}

export default Dashboard;
