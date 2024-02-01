import { Box, Input, Select, Button } from '@chakra-ui/react';
const RecycleSearch = ({ states }) => {
	return (
		<form>
			<Box mx="auto" w="30vw" display="flex" flexDirection="column">
				<Input placeholder="Enter City/Town" />
				<Select placeholder="Select State">
					{states.map((state) => (
						<option key={state.value} value={state.value}>
							{state.label}
						</option>
					))}
				</Select>
				<Input placeholder="Try searching for a material, like aluminum" />

				<Button mt="4" mx="auto">
					Find Locations
				</Button>
			</Box>
		</form>
	);
};

export default RecycleSearch;
