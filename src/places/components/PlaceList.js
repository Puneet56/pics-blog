import React from 'react';

import PlaceItem from './PlaceItem';
import Card from '../../shared/components/UIElements/Card';

import './PlaceList.css';

const PlaceList = (props) => {
	if (props.items.length === 0) {
		return (
			<div className='place-list center'>
				<Card>
					<h2>No places Found. Maybe add one?</h2>
					<button>Share Place</button>
				</Card>
			</div>
		);
	}
	return (
		<ul className='place-list'>
			{props.items.map((places) => (
				<PlaceItem
					key={places.id}
					id={places.id}
					image={places.imageUrl}
					title={places.title}
					description={places.description}
					address={places.address}
					creatorId={places.creator}
					coordinates={places.location}
				/>
			))}
		</ul>
	);
};

export default PlaceList;
