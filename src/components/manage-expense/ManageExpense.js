import {
  Card,
  CardBody,
  Input,
  Select,
  Text,
  Flex,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";

function ManageExpense() {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [moneyType, setMoneyType] = useState("");
  const handleChange = (e) => {};

  return (
    <Center>
      <Card background={"dodgerblue"} width='80%' pl={20} pr={20}>
        <CardBody>
          <Flex justify={"center"}>
            <Flex direction="column">
              <Text mb="8px">Month</Text>
              <Input
                value={month}
                onChange={handleChange}
                name="month"
                size="md"
              />
            </Flex>
            <Spacer />
            <Flex direction="column">
              <Text mb="8px">Year</Text>
              <Input
                value={year}
                onChange={handleChange}
                name="year"
                size="md"
              />
            </Flex>
            <Spacer />
            <Flex direction="column">
              <Text mb="8px">Money Type</Text>
              <Select
                name="moneyType"
                placeholder="Select option"
                onChange={handleChange}
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </Select>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Center>
  );
}

export default ManageExpense;
