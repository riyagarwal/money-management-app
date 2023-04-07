import { Outlet, Navigate } from "react-router-dom";
import { PATHS } from "../paths";
function PrivateRoutes() {
  return (
    <>
      {localStorage.getItem("token") ? (
        <Outlet />
      ) : (
        <Navigate to={PATHS.LOGIN} />
      )}
    </>
  );
}

export default PrivateRoutes;

/**
 * If the user is logged in then take them to the addExpense or manageExpense page as requested 
 * else take them to the login page
 */