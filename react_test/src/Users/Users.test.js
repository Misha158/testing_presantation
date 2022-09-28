import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import { Users } from "./Users";

const response = {
  data: [
    {
      id: 1,
      name: "Leanne Graham",
    },
    {
      id: 2,
      name: "Ervin Howell",
    },
    {
      id: 3,
      name: "Clementine Bauch",
    },
  ],
};

jest.mock("axios");

describe("Request on server", () => {
  it("make request to server", async () => {
    axios.get.mockReturnValue(response);

    render(<Users />);

    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
    // screen.debug();
  });
});
