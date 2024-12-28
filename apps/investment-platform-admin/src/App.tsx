import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PerformanceMetricList } from "./performanceMetric/PerformanceMetricList";
import { PerformanceMetricCreate } from "./performanceMetric/PerformanceMetricCreate";
import { PerformanceMetricEdit } from "./performanceMetric/PerformanceMetricEdit";
import { PerformanceMetricShow } from "./performanceMetric/PerformanceMetricShow";
import { InvestorList } from "./investor/InvestorList";
import { InvestorCreate } from "./investor/InvestorCreate";
import { InvestorEdit } from "./investor/InvestorEdit";
import { InvestorShow } from "./investor/InvestorShow";
import { MarketAnalysisList } from "./marketAnalysis/MarketAnalysisList";
import { MarketAnalysisCreate } from "./marketAnalysis/MarketAnalysisCreate";
import { MarketAnalysisEdit } from "./marketAnalysis/MarketAnalysisEdit";
import { MarketAnalysisShow } from "./marketAnalysis/MarketAnalysisShow";
import { FundList } from "./fund/FundList";
import { FundCreate } from "./fund/FundCreate";
import { FundEdit } from "./fund/FundEdit";
import { FundShow } from "./fund/FundShow";
import { InvestmentFirmList } from "./investmentFirm/InvestmentFirmList";
import { InvestmentFirmCreate } from "./investmentFirm/InvestmentFirmCreate";
import { InvestmentFirmEdit } from "./investmentFirm/InvestmentFirmEdit";
import { InvestmentFirmShow } from "./investmentFirm/InvestmentFirmShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"InvestmentPlatform"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PerformanceMetric"
          list={PerformanceMetricList}
          edit={PerformanceMetricEdit}
          create={PerformanceMetricCreate}
          show={PerformanceMetricShow}
        />
        <Resource
          name="Investor"
          list={InvestorList}
          edit={InvestorEdit}
          create={InvestorCreate}
          show={InvestorShow}
        />
        <Resource
          name="MarketAnalysis"
          list={MarketAnalysisList}
          edit={MarketAnalysisEdit}
          create={MarketAnalysisCreate}
          show={MarketAnalysisShow}
        />
        <Resource
          name="Fund"
          list={FundList}
          edit={FundEdit}
          create={FundCreate}
          show={FundShow}
        />
        <Resource
          name="InvestmentFirm"
          list={InvestmentFirmList}
          edit={InvestmentFirmEdit}
          create={InvestmentFirmCreate}
          show={InvestmentFirmShow}
        />
      </Admin>
    </div>
  );
};

export default App;
