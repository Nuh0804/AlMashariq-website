import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ThemeContext } from "@/hooks/theme-context";

const STORAGE_KEY = "almashariq-theme";

function readTheme() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(readTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
  }, [dark]);

  const value = useMemo(
    () => ({
      dark,
      toggle: () => setDark((current) => !current),
    }),
    [dark],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
