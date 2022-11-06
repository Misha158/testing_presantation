import { render, screen } from "@testing-library/react";
import { ModalComponent } from "./ModalComponent";
import userEvent from "@testing-library/user-event";

describe("ModalCompoent", () => {
  it("should open modal and close", () => {
    render(<ModalComponent />);

    const buttonForOpenModal = screen.getByText("Open Modal");
    expect(buttonForOpenModal).toBeInTheDocument();

    userEvent.click(buttonForOpenModal);

    const modalContent = screen.getByText("Some contents...");
    expect(modalContent).toBeInTheDocument();

    const buttonCancel = screen.getByText("Cancel");

    userEvent.click(buttonCancel);

    expect(modalContent).not.toBeVisible();
  });
});
