import React from "react";
import { useState } from "react";
import FinalSidebar from "./components/sidebar";
import ErrorBoundary from "./components/ErrorBoundary";
import MainPage from "./components/ui/split-hero-page";
import FollowMeButtons from "./components/ui/FollowMe";

//const someFxn = Example;

function App() {
  return (
    <div>
      <FinalSidebar />
      <MainPage>
        <FollowMeButtons />
      </MainPage>
    </div>
  );
}
export default App;
