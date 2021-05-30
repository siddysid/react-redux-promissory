/* eslint-disable import/no-duplicates */
import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import LoginRoute from './LoginRoute';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import TermsOfService from '../pages/TermsOfService';
import DocumentView from '../pages/DocumentView';
import AdminDashboardComponent from '../pages/AdminDashboard';
import DownloadZip from '../pages/DownloadZip';
import AdminManageTemplate from '../pages/AdminManageTemplate';

const RouterHandle = () => {
	return (
		<>
			<Switch>
				<LoginRoute path='/login' component={Login} />
				<PrivateRoute
					path='/dashboard'
					component={Dashboard}
					allowed={['Customer']}
				/>
				<PrivateRoute
					path='/admin/manage-template'
					component={AdminManageTemplate}
					allowed={['Admin', 'SuperAdmin']}
				/>
				<PrivateRoute
					path='/admin/dashboard/:custId/:docId'
					component={DocumentView}
					allowed={['Admin', 'SuperAdmin']}
				/>
				<PrivateRoute
					path='/admin/dashboard'
					exact
					component={AdminDashboardComponent}
					allowed={['Admin', 'SuperAdmin']}
				/>

				<Route path='/forgot-password' component={ForgotPassword} />
				<Route path='/Content/terms' component={TermsOfService} />
				<Route path='/sf/document/view' component={DocumentView} />
				<Route path='/download/zip' component={DownloadZip} />
				<Redirect from='*' to='/login' />
			</Switch>
		</>
	);
};

export default RouterHandle;
