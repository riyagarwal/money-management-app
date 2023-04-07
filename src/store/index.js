import { createStore } from "redux";

export const INITIAL_STORE = [

  // hard-coded data
  {
    id: "ABC123",
    title: "Swiggy order",
    Description: "lunch order",
    status: "EXPENSE",
    amount: 200,
    month: 3,
    date: 2023,
    year: 15,
  },

  {
    id: "ABC124",
    title: "Xomato order",
    Description: "dinner order",
    status: "EXPENSE",
    amount: 200,
    month: 1,
    date: 2023,
    year: 15,
  },

  {
    id: "ABC125",
    title: "instamart order",
    Description: "grocery order",
    status: "EXPENSE",
    amount: 200,
    month: 2,
    date: 2023,
    year: 15,
  },

  {
    id: "ABC126",
    title: "Salary",
    Description: "Part-time job salary",
    status: "INCOME",
    amount: 200000,
    month: 4,
    date: 2023,
    year: 15,
  }
];
