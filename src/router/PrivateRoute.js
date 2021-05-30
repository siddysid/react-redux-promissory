/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect, useContext, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../contexts/auth/AuthContext';
import { authentication } from '../api';

const PrivateRoute = ({ allowed, component: Component, ...rest }) => {
	const authContext = useContext(AuthContext);
	const { isLogin, userRole, validateCurrentSession } = authContext;
	const [mounted, setMounted] = useState(false);
	const [authenticated, setAuthenticated] = useState(false);

	const loadData = async () => {
		if (isLogin && localStorage.getItem('access_token')) {
			try {
				authentication();
				validateCurrentSession();
				if (allowed.indexOf(userRole) !== -1) {
					setAuthenticated(true);
				}
			} catch (err) {
				setAuthenticated(false);
			}
		} else {
			setAuthenticated(false);
		}
		setMounted(true);
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<Route
			{...rest}
			render={
				(props) =>
					mounted ? (
						authenticated ? ( // if authenticated load the disired compnonent
							<Component {...props} />
						) : (
							<Redirect to='/login' />
						)
					) : (
						<></>
					)
				// eslint-disable-next-line react/jsx-curly-newline
			}
		/>
	);
};

export default PrivateRoute;
