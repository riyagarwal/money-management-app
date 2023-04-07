import { Outlet, Navigate } from "react-router-dom";
import { PATHS } from "../paths";
function RestrictedRoutes() {
  return (
    <>
      {localStorage.getItem("token") ? (
        <Navigate to={PATHS.MANAGE_EXPENSE} />
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default RestrictedRoutes;

/**
 * If the user is logged in then navigate them to the ManageExpense page 
 * else take them to the login page(Outlet)
 */
