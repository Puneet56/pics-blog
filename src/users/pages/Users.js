import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
	let USERS = [
		{
			id: 1,
			name: 'FirstUser',
			image: '/',
			places: 5,
		}, 
	];

	return <UsersList items={USERS} />;
};

export default Users;
