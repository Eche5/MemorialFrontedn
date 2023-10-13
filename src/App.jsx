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
        {
          path: "/tributes",
          element: (
            <Suspense fallback={<Loader />}>
              <TributesPage />
            </Suspense>
          ),
        },
        {
          path: "/tributes/:tributeId",
          element: (
            <ProtectedRoute>
              <QueryClientProvider client={queryClient}>
                <TributeDetail />
              </QueryClientProvider>
            </ProtectedRoute>
          ),
        },
      ],
    },
    { path: "/Login", element: <Login /> },
  ]);

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
