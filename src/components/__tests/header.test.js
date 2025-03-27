import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/redux-store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const login = screen.getByRole("button", { name: "Login" });

  expect(login).toBeInTheDocument();
});

it("should render header component with a cart - 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cart = screen.getByText("Cart-(0)");
  expect(cart).toBeInTheDocument();
});

it("should render header component with a cart ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cart = screen.getByText(/Cart/);
  expect(cart).toBeInTheDocument();
});

it("should render header component with a login button", () => {
  render(
    <BrowserRouter> 
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const login = screen.getByRole("button", { name: "Login" });
  fireEvent.click(login)
  const logout =screen.getByRole("button", { name: "Logout" });
  expect(logout).toBeInTheDocument();
});
