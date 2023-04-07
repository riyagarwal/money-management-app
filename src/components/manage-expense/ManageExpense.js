import { Center, Flex } from "@chakra-ui/react";
import ExpenseTable from "./ExpenseTable";
import FilterCard from "./FilterCard";

function ManageExpense() {
  return (
    <div>
      <FilterCard />
      <ExpenseTable />
    </div>
  );
}

export default ManageExpense;
