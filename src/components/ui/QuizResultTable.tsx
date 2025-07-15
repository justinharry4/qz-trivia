import { Table } from "@chakra-ui/react";
import type { Result } from "../../services/result-service";

interface TableCellProps {
	children: React.ReactNode;
	[x: string]: any;
}

interface QuizResultTableProps {
	result: Result;
}

const TableCell = ({ children, ...otherProps }: TableCellProps) => (
	<Table.Cell borderWidth="0" width="50%" {...otherProps}>
		{children}
	</Table.Cell>
);

const QuizResultTable = ({ result }: QuizResultTableProps) => {
	const rowStyles = {
		bg: "transparent",
		borderColor: "gray.400",
		borderBottomWidth: "1px",
	};

	return (
		<Table.Root borderTopWidth="1px" borderColor="gray.400">
			<Table.Body>
				<Table.Row {...rowStyles}>
					<TableCell as="th" scope="row">
						Correctly Answered
					</TableCell>
					<TableCell>{result.total_correct}</TableCell>
				</Table.Row>
				<Table.Row {...rowStyles}>
					<TableCell as="th" scope="row">
						Total Questions
					</TableCell>
					<TableCell>{result.total_answered}</TableCell>
				</Table.Row>
				<Table.Row {...rowStyles}>
					<TableCell as="th" scope="row">
						Percentage Score
					</TableCell>
					<TableCell>{result.percentage_score}%</TableCell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	);
};

export default QuizResultTable;
