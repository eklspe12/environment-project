import { Box, Input, Button } from '@chakra-ui/react';
const EcoSearch = () => {
	return (
		<form>
			<Box mx="auto" w="30vw" display="flex" flexDirection="column">
				<Input placeholder="What are you searching for?" />
				<Button mt="4" mx="auto">
					Find Products
				</Button>
			</Box>
		</form>
	);
};

export default EcoSearch;
