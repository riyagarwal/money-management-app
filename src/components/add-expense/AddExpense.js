import {
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Card,
  CardBody,
  Input,
  Select,
  InputLeftElement,
  InputGroup,
  Button,
} from "@chakra-ui/react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_EXPENSE } from "../../store/action";

const manageExpenseStyle = {
  width: "100%",
  height: "100vh",
  background: "dodgerblue",
};

function AddExpense() {
  const [formData, setFormData] = useState({
    title: "",
    Description: "",
    status: "",
    amount: 0,
    date: 0,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    dispatch({ type: ADD_EXPENSE, data: formData });
  };

  return (
    <div style={manageExpenseStyle}>
      <Card size="md" mr={60} ml={60} mb={30}>
        <CardBody>
          <Heading>Add Expense</Heading>
          <FormControl mt={4}>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
            />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Status</FormLabel>
            <Select name="moneyType" onChange={handleChange}>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </Select>
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Amount</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="dodgerblue"
                fontSize="1em"
                children="INR"
              />
              <Input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Date</FormLabel>
            <Input
              placeholder="Select Date and Time"
              size="md"
              name="date"
              value={formData.date}
              type="date"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <Button colorScheme="twitter" onClick={handleAdd}>
              Add
            </Button>
          </FormControl>
        </CardBody>
      </Card>
    </div>
  );
}

export default AddExpense;
