import React from "react";
import { Route, Routes } from "react-router-dom";

import { InvestPage } from "../../pages/InvestPage";
import { MainPage } from "../../pages/MainPage";
import { PercentagePage } from "../../pages/PercentagePage";
import { Wrapper } from "../../components/common/Wrapper/Wrapper";
import { AppRoutes } from ".";

export const routes = [
  {
    path: AppRoutes.MAIN,
    component: MainPage,
  },
  {
    path: AppRoutes.INVEST,
    component: InvestPage,
  },
  {
    path: AppRoutes.PERCENTAGE,
    component: PercentagePage,
  },
];

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          element={
            <Wrapper>
              <route.component />
            </Wrapper>
          }
          path={route.path}
          key={route.path}
        />
      ))}
    </Routes>
  );
};
