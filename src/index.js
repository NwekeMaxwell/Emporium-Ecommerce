import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
// import {
//   BrowserRouter
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import ErrorPage from "./Pages/ErrorPage/ErrorPage";
// import ShopPage from "./Pages/ShopPage/ShopPage";
// import SignInOrUp from "./Pages/SignInOrUpPage/SignInOrUp";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />} errorElement={<ErrorPage />}>
//       <Route path="/shop" element={<ShopPage />} />
//       <Route path="/signin" element={<SignInOrUp />} />
//     </Route>
//   )
// );
// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "shop",
//     element: <ShopPage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "signin",
//     element: <SignInOrUp />,
//     errorElement: <ErrorPage />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

//<RouterProvider router={router} />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
