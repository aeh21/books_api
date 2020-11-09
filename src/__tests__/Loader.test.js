import { render, screen } from "@testing-library/react";
import Loader from "../components/Loader/Loader";

test("renders learn react link", () => {
  render(<Loader />);
  const wrapper = screen.getByTestId(/loader/i);
  const span = screen.getByText("Loading...")
  expect(wrapper).toBeInTheDocument();
  expect(span).toBeInTheDocument();
});
