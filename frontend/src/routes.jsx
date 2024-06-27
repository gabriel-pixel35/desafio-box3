import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/Login";
import { TableDashboard } from "./pages/ClientDashboard";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},

	{
		path: "/dashboard/:id",
		element: <Dashboard />,
	},

	{
		path: "/usuarios/:id",
		element: <TableDashboard />,
	},

	{
		path: "/funcionarios/:id",
		element: <TableDashboard />,
	},

	{
		path: "/clientes/:id",
		element: <TableDashboard />,
	}
]);
