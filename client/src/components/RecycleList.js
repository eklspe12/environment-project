import RecycleCard from './RecycleCard';

const RecycleList = () => {
	const fakeCenters = [
		{ name: 'Address 1', description: 'Maybe description if there is one.' },
		{ name: 'Address 2', description: 'Maybe description if there is one.' },
		{ name: 'Address 3', description: 'Maybe description if there is one.' },
		{ name: 'Address 4', description: 'Maybe description if there is one.' },
		{ name: 'Address 5', description: 'Maybe description if there is one.' },
	];
	return (
		<div>
			{fakeCenters.map((fakeCenter) => (
				<RecycleCard key={fakeCenter.name} fakeCenter={fakeCenter} />
			))}
		</div>
	);
};

export default RecycleList;
