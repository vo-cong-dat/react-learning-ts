import Header from "@/components/header";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
