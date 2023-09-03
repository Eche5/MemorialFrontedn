import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import TributesPage from "./components/Pages/TributesPage";
import Root from "./Root";
import Login from "./components/Pages/Login";
import TributeDetail from "./components/Pages/TributeDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/tributes", element: <TributesPage /> },
        { path: "/tributes/:tributeId", element: <TributeDetail /> },
      ],
    },
    { path: "/Login", element: <Login /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
