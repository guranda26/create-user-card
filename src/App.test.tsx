import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

test("renders header links correctly", () => {
  render(
    <ThemeProvider>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </ThemeProvider>
  );

  const formLink = screen.getByText(/Fill out the Form/i);
  expect(formLink).toBeInTheDocument();
});
