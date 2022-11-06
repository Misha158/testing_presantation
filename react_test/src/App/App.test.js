import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("Render all component correctly", () => {
    render(<App />);

    const selectElement = screen.getBy
    const inputElement = screen.getByPlaceholderText(/Input component/i);
    const buttonElement = screen.getByText(/Save/i);

    expect(selectElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("Check that user event works correctly", () => {
    render(<App />);
    const selectElement = screen.getByText(/Select/i);

    const inputElement = screen.getByPlaceholderText(/Input component/i);
    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeDisabled();

    expect(screen.queryByText("Lucy")).not.toBeInTheDocument();
    userEvent.click(selectElement);
    const lucySelectOption = screen.getByText("Lucy");
    expect(lucySelectOption).toBeInTheDocument();
    userEvent.click(lucySelectOption);
    expect(lucySelectOption).toBeInTheDocument();

    userEvent.type(inputElement, "Hello");
    // fireEvent.change(inputElement, {
    //   target: {
    //     value: "Hello"
    //   }
    // })
    expect(screen.getByDisplayValue("Hello")).toBeInTheDocument();

    expect(buttonElement).not.toBeDisabled();

    fireEvent.click(buttonElement);

    expect(screen.getByText("Hello lucy")).toBeInTheDocument();
  });

  it("Snapshot", () => {
    render(<App />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toMatchInlineSnapshot();
  });
});
