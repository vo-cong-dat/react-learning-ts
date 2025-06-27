import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Routers } from "./router/index.tsx";
import "./styles/main.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routers />
  </BrowserRouter>,
);
