import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import WorkflowsIndex from './workflows';
import WorkflowsShow from './workflows/show';
import TeamMembersIndex from './team_members';
import TeamMembersNew from './team_members/new';
import TeamMembersShow from './team_members/show';
import TeamMembersEdit from './team_members/edit';
import LeadsIndex from './leads';
import LeadsShow from './leads/show';
import SequencesShow from './sequences/show';
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
        <RouteWithLayout exact path="/workflows/:workflowId/sequences/:sequenceId" component={SequencesShow} layout={DashboardLayout} />
        <RouteWithLayout exact path="/workflows/:id" component={WorkflowsShow} layout={DashboardLayout} />
        <RouteWithLayout exact path="/workflows" component={WorkflowsIndex} layout={DashboardLayout} />
        <RouteWithLayout exact path="/team_members/new" component={TeamMembersNew} layout={DashboardLayout} />
        <RouteWithLayout exact path="/team_members/:id" component={TeamMembersShow} layout={DashboardLayout} />
        <RouteWithLayout exact path="/team_members/:id/edit" component={TeamMembersEdit} layout={DashboardLayout} />
        <RouteWithLayout exact path="/team_members" component={TeamMembersIndex} layout={DashboardLayout} />
        <RouteWithLayout exact path="/leads/:id" component={LeadsShow} layout={DashboardLayout} />
        <RouteWithLayout exact path="/leads" component={LeadsIndex} layout={DashboardLayout} />
      </Switch>
    </Router>
  )
}

export default Dashboard;
