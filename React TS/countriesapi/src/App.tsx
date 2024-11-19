import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FlagDetail from "./components/FlagDetail";
import AppLayout from "./components/AppLayout";
import FlagList from "./components/FlagList";
import { ThemeProvider } from "./providers/ThemeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/",
        element: <FlagList />,
      },
      {
        path: "/:countryId",
        element: <FlagDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
