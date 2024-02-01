import {
	Card,
	CardHeader,
	CardBody,
	Text,
	Box,
	Heading,
} from '@chakra-ui/react';
const EcoCard = ({ fakeProduct }) => {
	if (!fakeProduct) {
		return null;
	}
	return (
		<div>
			<Card w="40vw" mx="auto">
				<CardHeader>
					<Heading>{fakeProduct.name}</Heading>
				</CardHeader>
				<CardBody>
					<Box>
						<Text>{fakeProduct.description}</Text>
						<Text>{fakeProduct.price}</Text>
					</Box>
				</CardBody>
			</Card>
		</div>
	);
};
export default EcoCard;
