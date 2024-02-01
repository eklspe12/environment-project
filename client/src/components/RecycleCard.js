import {
	Card,
	CardHeader,
	CardBody,
	Text,
	Box,
	Heading,
} from '@chakra-ui/react';
const RecycleCard = ({ fakeCenter }) => {
	if (!fakeCenter) {
		return null;
	}
	return (
		<div>
			<Card w="40vw" mx="auto">
				<CardHeader>
					<Heading>{fakeCenter.name}</Heading>
				</CardHeader>
				<CardBody>
					<Box>
						<Text>{fakeCenter.description}</Text>
					</Box>
				</CardBody>
			</Card>
		</div>
	);
};
export default RecycleCard;
