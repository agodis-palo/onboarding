import {
  Navigate,
  Outlet,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";
import { DataTable } from "./components/dataTable/DataTable";
import { NavBar } from "./components/navbar/NavBar";

export function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/userTable" /> },
          {
            path: "/userTable",
            children: [
              {
                index: true,
                element: <DataTable />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export type Error = {
  message: string;
  stack: string;
};

function ErrorPage() {
  const error = useRouteError() as Error;

  return (
    <>
      <h1>Error - Something went wrong</h1>
      {import.meta.env.MODE !== "production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  );
}
