import { StackDivider } from '@chakra-ui/react';
import {
	Card,
	CardHeader,
	CardBody,
	Stack,
	Heading,
	Text,
	Box,
} from '@chakra-ui/react';
const AQCard = ({ visible, aqi, city, aqNum }) => {
	if (!visible) {
		return null;
	}

	const getAqiInfo = () => {
		if (aqNum < 51) {
			return aqi[0];
		} else if (aqNum >= 51 && aqNum <= 100) {
			return aqi[1];
		} else if (aqNum >= 101 && aqNum <= 150) {
			return aqi[2];
		} else if (aqNum >= 151 && aqNum <= 200) {
			return aqi[3];
		} else if (aqNum >= 201 && aqNum <= 300) {
			return aqi[4];
		} else if (aqNum >= 301) {
			return aqi[5];
		}
	};

	const aqiInfo = getAqiInfo();

	return (
		<div>
			<Card textAlign={'center'} w="40vw" mx="auto">
				<CardHeader>
					<Heading size="xl">{city}</Heading>
				</CardHeader>
				<CardBody>
					<Stack divider={<StackDivider />} spacing="2">
						<Box>
							<Heading size="lg" color={aqiInfo.code}>
								{aqiInfo.value}
							</Heading>
							<Text textTransform={'uppercase'}>{aqNum}</Text>
						</Box>
						<Box>
							<Text>{aqiInfo.description}</Text>
						</Box>
					</Stack>
				</CardBody>
			</Card>
		</div>
	);
};

export default AQCard;
