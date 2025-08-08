import { useState, useEffect } from "react";

type ThemeMode = "light" | "dark" | "system";

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>(
    () => (localStorage.getItem("theme") as ThemeMode) || "system"
  );

  // Apply theme setiap kali mode berubah
  useEffect(() => {
    applyTheme(mode);
  }, [mode]);

  const applyTheme = (theme: ThemeMode) => {
    const root = document.documentElement;
    const systemPrefDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    root.classList.remove("dark");

    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "system" && systemPrefDark) {
      root.classList.add("dark");
    }

    localStorage.setItem("theme", theme);
  };

  const cycleTheme = () => {
    const order: ThemeMode[] = ["light", "dark", "system"];
    const next = order[(order.indexOf(mode) + 1) % order.length];
    setMode(next);
  };

  return { mode, setMode, cycleTheme };
}
