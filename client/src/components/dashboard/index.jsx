import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import TeamMembersIndex from './team_members';
import TeamMembersNew from './team_members/new';
import Home from './home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashboardLayout = (props) => (
  <>
    <ToastContainer />
    {props.children}
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
        <RouteWithLayout exact path="/team_members/new" component={TeamMembersNew} layout={DashboardLayout} />
        <RouteWithLayout exact path="/team_members" component={TeamMembersIndex} layout={DashboardLayout} />
      </Switch>
    </Router>
  )
}

export default Dashboard;
