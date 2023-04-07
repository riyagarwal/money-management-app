import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddExpense from "./components/add-expense/AddExpense";
import Login from "./components/login/Login";
import ManageExpense from "./components/manage-expense/ManageExpense";
import PrivateRoutes from "./routes/PrivateRoutes";
import RestrictedRoutes from "./routes/RestrictedRoutes";
import { PATHS } from "./paths";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />}>
        <Route path={PATHS.ADD_EXPENSE} element={<AddExpense />} />
        <Route path={PATHS.MANAGE_EXPENSE} element={<ManageExpense />} />
      </Route>

      <Route path="/" element={<RestrictedRoutes />}>
        <Route path={PATHS.LOGIN} element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
