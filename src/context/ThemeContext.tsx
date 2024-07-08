import React, { createContext, useState, ReactNode, useContext } from "react";

interface ThemeContextType {
  iconColor: string;
  buttonColor: string;
  backgroundColor: string;
  backgroundImage: string;
  setIconColor: (color: string) => void;
  setButtonColor: (color: string) => void;
  setBackgroundColor: (color: string) => void;
  setBackgroundImage: (image: string | null) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [iconColor, setIconColor] = useState("#ffffff");
  const [buttonColor, setButtonColor] = useState("#007bff");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  return (
    <ThemeContext.Provider
      value={{
        iconColor,
        buttonColor,
        backgroundColor,
        backgroundImage: backgroundImage ?? "",
        setIconColor,
        setButtonColor,
        setBackgroundColor,
        setBackgroundImage,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
