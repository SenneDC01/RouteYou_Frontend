import { render, fireEvent } from "@testing-library/react";
import RegisterPage from "./page";
import * as UserService from "@/services/UserService";
import { act } from "react-test-renderer";

describe("RegisterPage component", () => {
  let mockRegister;

  beforeEach(() => {
    mockRegister = jest.spyOn(UserService, "register");
    mockRegister.mockImplementation(() => Promise.resolve());
  });

  afterEach(() => {
    mockRegister.mockRestore();
  });

  test("Register with valid credentials", async () => {
    const { getByLabelText, getByRole } = render(<RegisterPage />);
    const firstname = "Pieter";
    const lastname = "Post";
    const gender = "MALE";
    const email = "test@example.com";
    const address = "Straat 1";
    const city = "Gent";
    const zipcode = "9300";
    const password = "password123";
    const password_confirmation = "password123";

    await act(async () => {
      fireEvent.change(getByLabelText("Firstname"), {
        target: { value: firstname },
      });
      fireEvent.change(getByLabelText("Lastname"), {
        target: { value: lastname },
      });
      fireEvent.change(getByLabelText("Gender"), {
        target: { value: gender },
      });
      fireEvent.change(getByLabelText("Email"), {
        target: { value: email },
      });
      fireEvent.change(getByLabelText("Address"), {
        target: { value: address },
      });
      fireEvent.change(getByLabelText("City"), {
        target: { value: city },
      });
      fireEvent.change(getByLabelText("Zipcode"), {
        target: { value: zipcode },
      });
      fireEvent.change(getByLabelText("Password"), {
        target: { value: password },
      });
      fireEvent.change(getByLabelText("Confirm Password"), {
        target: { value: password_confirmation },
      });

      fireEvent.click(getByRole("button", { name: "Register" }));
    });

    expect(mockRegister).toHaveBeenCalled();
    expect(mockRegister).toHaveBeenCalledWith({
      firstname: firstname,
      lastname: lastname,
      email: email,
      gender: gender,
      password: password,
      password_confirmation: password_confirmation,
      address: address,
      city: city,
      zipcode: zipcode,
    });
  });

  test("Register without credentials", async () => {
    const { getByLabelText, getByRole } = render(<RegisterPage />);
    const firstname = "";
    const lastname = "";
    const gender = "";
    const email = "";
    const address = "";
    const city = "";
    const zipcode = "";
    const password = "";
    const password_confirmation = "";

    await act(async () => {
      fireEvent.change(getByLabelText("Firstname"), {
        target: { value: firstname },
      });
      fireEvent.change(getByLabelText("Lastname"), {
        target: { value: lastname },
      });
      fireEvent.change(getByLabelText("Gender"), {
        target: { value: gender },
      });
      fireEvent.change(getByLabelText("Email"), {
        target: { value: email },
      });
      fireEvent.change(getByLabelText("Address"), {
        target: { value: address },
      });
      fireEvent.change(getByLabelText("City"), {
        target: { value: city },
      });
      fireEvent.change(getByLabelText("Zipcode"), {
        target: { value: zipcode },
      });
      fireEvent.change(getByLabelText("Password"), {
        target: { value: password },
      });
      fireEvent.change(getByLabelText("Confirm Password"), {
        target: { value: password_confirmation },
      });

      fireEvent.click(getByRole("button", { name: "Register" }));
    });

    expect(mockRegister).not.toHaveBeenCalled();
  });

  test("Register with wrong credentials", async () => {
    const { getByLabelText, getByRole } = render(<RegisterPage />);
    const firstname = "Pieter";
    const lastname = "Post";
    const gender = "no-gender";
    const email = "test@example";
    const address = "Straat 1";
    const city = "Gent";
    const zipcode = "9300";
    const password = "short";
    const password_confirmation = "password123";

    await act(async () => {
      fireEvent.change(getByLabelText("Firstname"), {
        target: { value: firstname },
      });
      fireEvent.change(getByLabelText("Lastname"), {
        target: { value: lastname },
      });
      fireEvent.change(getByLabelText("Gender"), {
        target: { value: gender },
      });
      fireEvent.change(getByLabelText("Email"), {
        target: { value: email },
      });
      fireEvent.change(getByLabelText("Address"), {
        target: { value: address },
      });
      fireEvent.change(getByLabelText("City"), {
        target: { value: city },
      });
      fireEvent.change(getByLabelText("Zipcode"), {
        target: { value: zipcode },
      });
      fireEvent.change(getByLabelText("Password"), {
        target: { value: password },
      });
      fireEvent.change(getByLabelText("Confirm Password"), {
        target: { value: password_confirmation },
      });

      fireEvent.click(getByRole("button", { name: "Register" }));
    });

    expect(mockRegister).not.toHaveBeenCalled();
  });
});
