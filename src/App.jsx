import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Send from "./pages/Send";
import Home from "./pages/Home";
import Transfer from "./pages/Transfer";
import { ThemeContext } from "./context/ThemeContext";
import { useState } from "react";

function App() {

  const [theme,setTheme] = useState(false);
  const appRouter = createBrowserRouter([
    {
      path:"/signup",
      element:<Signup />
    },
    {
      path:"/signin",
      element:<Signin />
    },
    {
      path:"/dashboard",
      element:<Dashboard />
    },
    {
      path:"/send/:id",
      element:<Send />
    },
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/transfer",
      element:<Transfer />
    }
  ]);


  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className="flex">
        <RouterProvider router={appRouter} />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
