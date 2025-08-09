import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeSwitcher } from "@/components/UI/ThemeSwitcher.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ThemeSwitcher fixed corner="bottom-right" />
  </StrictMode>
);
