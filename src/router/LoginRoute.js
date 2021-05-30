/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect, useContext, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Auth } from 'aws-amplify';

import AuthContext from '../contexts/auth/AuthContext';
import { ADMIN_USER_ROLES } from '../constants';

const LoginRoute = ({ component: Component, ...rest }) => {
	const [mounted, setMounted] = useState(false);
	const [authenticated, setAuthenticated] = useState(false);

	const authContext = useContext(AuthContext);
	const { userRole, validateCurrentSession } = authContext;

	useEffect(() => {
		const loadData = async () => {
			try {
				const loggedIn = await Auth.currentAuthenticatedUser({
					bypassCache: false,
				});
				if (loggedIn) {
					validateCurrentSession();
					setAuthenticated(true);
				}
			} catch (err) {
				setAuthenticated(false);
			}
			setMounted(true);
		};
		loadData();
	}, []);

	const loadComponent = (props) => {
		return authenticated && userRole.length ? (
			<Redirect
				to={
					ADMIN_USER_ROLES.indexOf(userRole) !== -1
						? '/admin/dashboard'
						: '/dashboard'
				}
			/>
		) : (
			<Component {...props} />
		);
	};

	return (
		<Route
			{...rest}
			render={(props) => (mounted ? loadComponent(props) : <></>)}
		/>
	);
};

export default LoginRoute;
