import RecycleSearch from './RecycleSearch';
import RecycleInfo from './RecycleInfo';
import RecycleList from './RecycleList';
const RecyclingCenters = ({ states }) => {
	return (
		<div>
			<RecycleInfo />
			<RecycleSearch states={states} />
			<RecycleList />
			<h1>
				Page will first request the users location before webscraping to find
				the closest recycling centers and then display the 5-10 closest as a
				list.
			</h1>
			<h1> Will also include a search to search for other locations.</h1>
			<h1>
				STRETCH GOAL: include a filter/searchbar to search for specific
				materials to recycle.
			</h1>
			<h1>
				Components required: Searchbar, filter, recyclingList, recycling cards,
				maybe alert.
			</h1>
		</div>
	);
};

export default RecyclingCenters;
