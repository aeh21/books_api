import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { Input } from "@material-ui/core";

describe("Input", () => {
  it("renders", () => {
    render(<Input data-testid="mockId" />);
    const filterInput = screen.getByTestId(/mockId/i);
    expect(filterInput).toBeInTheDocument();
  });

  it("checks change event", () => {
    render(<Input data-testid="mockId" />);
    const wrapper = screen.getByTestId("mockId");

    const input = wrapper.children[0];

    fireEvent.change(input, { target: { value: "My search filter" } });

    expect(input).toHaveValue("My search filter");
  });
});
