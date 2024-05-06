import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu from "./features/menu/menu";

import Order from "./features/order/order";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import { menuLoader } from "./features/menu/menuLoader";
import orderLoader from "./features/order/orderLoader";
import action from "./features/order/action";
import Cart from "./features/cart/cart";
import { updateOrderAction } from "./features/order/updateOrderAction";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
      { path: "/order/new", element: <CreateOrder />, action: action },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
