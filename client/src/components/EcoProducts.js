import EcoList from './EcoList';
import EcoSearch from './EcoSearch';
import EcoInfo from './EcoInfo';
const EcoProducts = () => {
	return (
		<div>
			<EcoInfo />
			<EcoSearch />
			<EcoList />
			<h1>
				Page will allow users to search products and will webscrape to find
				online eco-friendly vendors with those products.
			</h1>
			<h1>Components: Searchbar, product list, product card.</h1>
		</div>
	);
};

export default EcoProducts;
