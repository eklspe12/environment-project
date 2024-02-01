import EcoCard from './EcoCard';
const EcoList = () => {
	const fakeProducts = [
		{
			name: 'Product 1',
			description: 'Maybe description if there is one.',
			price: '$100',
		},
		{
			name: 'Product 2',
			description: 'Maybe description if there is one.',
			price: '$100',
		},
		{
			name: 'Product 3',
			description: 'Maybe description if there is one.',
			price: '$100',
		},
		{
			name: 'Product 4',
			description: 'Maybe description if there is one.',
			price: '$100',
		},
		{
			name: 'Product 5',
			description: 'Maybe description if there is one.',
			price: '$100',
		},
	];
	return (
		<div>
			{fakeProducts.map((fakeProduct) => (
				<EcoCard key={fakeProduct.name} fakeProduct={fakeProduct} />
			))}
		</div>
	);
};

export default EcoList;
