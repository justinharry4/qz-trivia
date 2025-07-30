import { Table } from "@chakra-ui/react";

interface CellProps {
  children: React.ReactNode;
  [x: string]: any;
}

interface QuizInfoTableProps {
  questionCount: number;
  timeLimitInMinutes?: number;
}

const Cell = ({ children, ...otherProps }: CellProps) => (
  <Table.Cell
    px="0"
    py="3"
    borderBottomWidth="1px"
    borderColor="gray.500"
    {...otherProps}
  >
    {children}
  </Table.Cell>
);

const QuizInfoTable = ({
  questionCount,
  timeLimitInMinutes = 0,
}: QuizInfoTableProps) => (
  <Table.Root my="3">
    <Table.Body>
      <Table.Row bg="transparent" borderTopWidth="1px" borderColor="gray.500">
        <Cell as="th" scope="row" color="gray.500" width="30%">
          Total Questions
        </Cell>
        <Cell>{questionCount}</Cell>
      </Table.Row>
      <Table.Row bg="transparent">
        <Cell as="th" scope="row" color="gray.500" width="30%">
          Time Limit
        </Cell>
        <Cell>
          {timeLimitInMinutes ? timeLimitInMinutes + " Minutes" : "None"}
        </Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
);

export default QuizInfoTable;
