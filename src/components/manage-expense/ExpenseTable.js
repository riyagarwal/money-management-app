import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Card,
  CardBody,
  Badge,
} from "@chakra-ui/react";
import uniqid from 'uniqid'

import { INITIAL_STORE } from "../../store";

const ExpenseTable = () => {
  return (
    <Card width="80%" pl={10} pr={10} mt={10} mb={10}>
      <CardBody>
        <TableContainer>
          <Table variant="striped" colorScheme="twitter">
            <Thead>
              <Tr>
                <Th>S. No.</Th>
                <Th>Title</Th>
                <Th>Amount</Th>
                <Th>Expense Type</Th>
                <Th>Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {INITIAL_STORE.map((expenseObj, idx) => {
                return (
                  <Tr key={uniqid()}>
                    <Td>{idx + 1}</Td>
                    <Td>{expenseObj.title}</Td>
                    <Td>INR {expenseObj.amount}</Td>
                    <Td>
                      <Badge
                        colorScheme={
                          expenseObj.status === "EXPENSE" ? "red" : "green"
                        }
                      >
                        {expenseObj.status}
                      </Badge>
                    </Td>
                    <Td>
                      {expenseObj.month}/{expenseObj.year}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default ExpenseTable;
