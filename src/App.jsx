import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import TributesPage from "./Pages/TributesPage";
import Root from "./Root";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/Error";
import ProtectedRoute from "./components/ProtectedRoutes";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import Services from "./Pages/Services";
const TributeDetail = lazy(() => import("./Pages/TributeDetail"));
const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/services", element: <Services /> },
        {
          path: "/tributes",
          element: <TributesPage />,
        },
        {
          path: "/tributes/:tributeId",
          element: (
            <ProtectedRoute>
              <QueryClientProvider client={queryClient}>
                <Suspense fallback={<Loader />}>
                  <TributeDetail />
                </Suspense>
              </QueryClientProvider>
            </ProtectedRoute>
          ),
        },
      ],
    },
    { path: "/Login", element: <Login /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
