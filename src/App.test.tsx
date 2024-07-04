import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

test("renders header links correctly", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const formLink = screen.getByText(/Fill out the Form/i);
  expect(formLink).toBeInTheDocument();
});
