import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders meteoapp", () => {
  const { getByText } = render(<App />);
  console.log(getByText);
  const linkElement = getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
