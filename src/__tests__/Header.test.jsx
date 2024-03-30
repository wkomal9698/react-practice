import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Test Cases for Header component", () => {

    it("Should render Header component with a login button", () => {

        render(
          <BrowserRouter>
            <Provider store={appStore}>
              <Header />
            </Provider>
          </BrowserRouter>
        );

        // Better to use getByRole than getByText

        const loginButton = screen.getByRole("button");
        expect(loginButton).toBeInTheDocument();

        const loginButton2 = screen.getByText("Login");
        expect(loginButton2).toBeInTheDocument();

        const loginButton3 = screen.getByRole("button", {name: "Login"});
        expect(loginButton3).toBeInTheDocument();
        
    });

    it("Should render Header component with 0 cart items", () => {

        render(
          <BrowserRouter>
            <Provider store={appStore}>
              <Header />
            </Provider>
          </BrowserRouter>
        );

        // Better to use getByRole than getByText

        const cartItem = screen.getByText("Cart (0 items)");
        expect(cartItem).toBeInTheDocument();

        const cart = screen.getByText(/Cart/);
        expect(cart).toBeInTheDocument();

    });

    it("Should change Login to Logout on click in Header component", () => {

        render(
          <BrowserRouter>
            <Provider store={appStore}>
              <Header />
            </Provider>
          </BrowserRouter>
        );

        const loginButton = screen.getByRole("button", {name: "Login"});
        expect(loginButton).toBeInTheDocument();
        fireEvent.click(loginButton);
        const logoutButton = screen.getByRole("button", {name: "Logout"});
        expect(logoutButton).toBeInTheDocument();


        
    });

});