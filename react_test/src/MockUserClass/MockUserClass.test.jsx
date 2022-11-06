import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MockUserClass } from "./MockUserClass";
import { User } from "./User";

describe("App", () => {
  it("test", () => {
    const tessst = jest
      .spyOn(User, "getPermissions")
      .mockImplementation(() => ({
        readPage: true,
        updatePage: true,
        createPage: true,
      }));
    render(<MockUserClass />);
    const getElem = screen.getByText("test");
    const canReadElem = screen.getByText("can read page");
    expect(getElem).toBeInTheDocument();
    expect(canReadElem).toBeInTheDocument();
    // render(<App />);
    //
    // const selectElement = screen.getBy;
    // const inputElement = screen.getByPlaceholderText(/Input component/i);
    // const buttonElement = screen.getByText(/Save/i);
    //
    // expect(selectElement).toBeInTheDocument();
    // expect(inputElement).toBeInTheDocument();
    // expect(buttonElement).toBeInTheDocument();
  });
});
