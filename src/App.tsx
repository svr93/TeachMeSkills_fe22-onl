import "./App.css";
import { ContentMainPage } from "./pages/content-main-page/Content-main-page";
import { ContentMyPosts } from "./pages/contentMyPosts/ContentMyPosts";
import { LoginPage } from "./pages/loginPage/LoginPage";
import { RegistrationConfirm } from "./pages/registrationPage/registrationResult/RegistrationConfirm";
import { RegistrationPage } from "./pages/registrationPage/RegistrationPage";
import { RegistrationSuccess } from "./pages/registrationPage/registrationResult/RegistrationSuccess";
import React from "react";
import { AppContext } from "./AppContext";
import { Route, Routes } from "react-router-dom";
import { AppPages } from "./types";

function App() {
  const appRef = React.createRef<HTMLDivElement>();
  return (
    <>
      <div className="App" ref={appRef}>
        <AppContext.Provider value={appRef}>
          <Routes>
            <Route
              path={AppPages.EMAIL_CONFIRMATION}
              element={<RegistrationConfirm></RegistrationConfirm>}
            ></Route>
            <Route
              path={AppPages.LOGIN}
              element={<LoginPage></LoginPage>}
            ></Route>
            <Route
              path={AppPages.POSTS}
              element={<ContentMyPosts></ContentMyPosts>}
            ></Route>
            <Route
              path={`${AppPages.POSTS}/id`}
              element={<ContentMainPage></ContentMainPage>}
            ></Route>
            <Route
              path={AppPages.REGISTRATION}
              element={<RegistrationPage></RegistrationPage>}
            ></Route>
            <Route
              path={AppPages.SUCCESS_PAGE}
              element={<RegistrationSuccess></RegistrationSuccess>}
            ></Route>
          </Routes>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
