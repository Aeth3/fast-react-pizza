import { Outlet, useNavigation } from "react-router";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(navigation);
  return (
    <div className="b grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-auto ">
        <main className="mx-auto max-w-3xl overflow-auto ">
          {isLoading ? <Loader /> : <Outlet />}
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
