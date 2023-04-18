import { createBrowserRouter, Outlet, useOutlet } from "react-router-dom";
import { LoginPage } from "./features/login";
import SignUp from "./features/SignUp";
import Shop from "./components/Shop";
import { NavigationBar } from "./NavBar";

function RootLayout(){
    const outletElement = useOutlet();

    return(
        <>
            <NavigationBar/>
            {outletElement ? <Outlet/>:<Shop/>}
        </>
    )
}

const router = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>,
        children: [
            {
              path: "sign-up",
              element: <SignUp />,
            },
            {
              path: "shop",
              element: <Shop />,
            },
            {
              path: "login",
              element: <LoginPage />,
            }
        ]
      
    }
])

export default router