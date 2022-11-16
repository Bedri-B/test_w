import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import './App.css';
import { RootState } from "./store/app.store";
import Content from "./component/Content";
function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                    <Content />
            ),
        },
    ]);

  const themeClass = useSelector(
      (state: RootState) => state.themeReducer.class
  );

  return (
      <div className={themeClass + " font-mono " + (themeClass === "light" ? " bg-pcr_3_300" : " bg-pcr_1_200")} style={{height: 85 + 'vh'}}>
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
