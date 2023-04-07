import {
    Card,
    CardBody,
    Input,
    Select,
    Text,
    Flex,
    Spacer,
    Center,
    Button,
  } from "@chakra-ui/react";
import { useState } from "react";

const FilterCard = () => {
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [moneyType, setMoneyType] = useState("");

    const handleChange = (e) => {
      const {name, value} = e.target;
      if(name === 'month') {
        setMonth(value)
      } else if(name === 'year') {
        setYear(value)
      }else {
        setMoneyType(value)
      }
    };
  
    const handleSearch = () => {};
  
    return (
      
        <Card width="80%" pl={20} pr={20} mt={10} mb={10}>
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
                  onChange={handleChange}
                >
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </Select>
              </Flex>
              <Spacer />
              <Flex align={"center"}>
                <Button colorScheme="twitter" w='100%' onClick={handleSearch}>
                  Search
                </Button>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
    );
}

export default FilterCard