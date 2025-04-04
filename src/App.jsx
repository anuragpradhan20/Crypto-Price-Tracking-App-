import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CoinDetails from "./components/CoinDetails";
let App=()=>{
  return(
    <Provider store={appStore}>
    <div className="bg-custom-background-color w-full h-full">
      <Header/>
      <Outlet/>
      <Footer />
    </div>
    </Provider>
  )
}

let appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/coin/:coinId",
        element:<CoinDetails/>
      }
    ]
  }
  

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);