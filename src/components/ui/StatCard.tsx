import { Card, Text } from "@chakra-ui/react";

interface StatCardProps {
	title: string;
	value: string;
}

const StatCard = ({ title, value }: StatCardProps) => (
	<Card.Root bg="gray.200" borderRadius="lg" flex="1">
		<Card.Body p="4">
			<Card.Title textTransform="capitalize" fontWeight="normal" fontSize="md">
				{title}
			</Card.Title>
			<Text fontWeight="bold" fontSize="lg">
				{value}
			</Text>
		</Card.Body>
	</Card.Root>
);

export default StatCard;
