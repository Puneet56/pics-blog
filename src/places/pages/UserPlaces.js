import React from 'react';
import PlaceList from '../components/PlaceList';

import { useParams } from 'react-router';

const DUMMY_PLACES = [
	{
		id: 'p1',
		imageUrl: '/',
		title: 'Building',
		description: 'a building',
		address: 'address is this',
		creator: 'u1',
		coordinates: {
			lat: 43.22,
			lng: -78.5,
		},
	},
	{
		id: 'p2',
		imageUrl: '/',
		title: 'Building',
		description: 'a building',
		address: 'address is this',
		creator: 'u2',
		coordinates: {
			lat: 43.22,
			lng: -78.5,
		},
	},
];

const UserPlaces = () => {
	const userId = useParams().userId;
	const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
	return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
