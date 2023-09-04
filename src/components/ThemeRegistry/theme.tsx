"use client";
import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { useMemo } from "react";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const useCustomTheme = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return useMemo(() => {
    let selectedTheme: "dark" | "light";
    const savedTheme = localStorage.getItem("theme_mode");

    if (savedTheme !== null) {
      selectedTheme = savedTheme as typeof selectedTheme;
    } else {
      selectedTheme = prefersDarkMode ? "dark" : "light";
      localStorage.setItem("theme_mode", selectedTheme);
    }

    return createTheme({
      palette: {
        mode: selectedTheme,
      },
      typography: {
        fontFamily: roboto.style.fontFamily,
      },
      components: {
        MuiAlert: {
          styleOverrides: {
            root: ({ ownerState }) => ({
              ...(ownerState.severity === "info" && {
                backgroundColor: "#60a5fa",
              }),
            }),
          },
        },
      },
    });
  }, [prefersDarkMode]);
};

export default useCustomTheme;
