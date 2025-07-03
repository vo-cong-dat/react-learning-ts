import MainLayout from "@/layout/main-layout";
import { lazy } from "react";
import { Route, Routes } from "react-router";

const HomePage = lazy(() => import("@/pages/home"));

export const Routers = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
