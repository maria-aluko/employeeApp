import { createBrowserRouter } from "react-router-dom";
import List from "../pages/List";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Form from "../pages/Form";

export const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Root />, 
    errorElement: <ErrorPage/>, 
    children: [
      { path: '/', element: <Login /> },
      { path: '/employees', element: <List /> },
      { path: '/new', element: <Form /> },
      { path: '/error', element: <ErrorPage /> },
    ],
  },  
],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);