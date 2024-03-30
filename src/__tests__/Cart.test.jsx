import RestaurantMenu from "../components/RestaurantMenu"
import MOCK_DATA from "./mocks/resMenuMock.json"
import {act} from "react-dom/test-utils"
import { fireEvent, render, screen } from "@testing-library/react"
import appStore from "../utils/appStore"
import { Provider } from "react-redux"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header"
import Cart from "../components/Cart"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})

it("Should load restaurant menu component", async () => {
    await act(async () => render(<BrowserRouter><Provider store={appStore}><Header /><Cart /><RestaurantMenu/></Provider></BrowserRouter>))

    const accordionHeader = screen.getByText("New Thin n Crispy Pizzas (6)")
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(6);

    const cart0Items = screen.getByText("Cart (0 items)")
    expect(cart0Items).toBeInTheDocument()

    const addButton = screen.getAllByRole("button", {name: "Add +"})
    fireEvent.click(addButton[0]);

    const cartItems = screen.getByText("Cart (1 items)")
    expect(cartItems).toBeInTheDocument()

    const cartItemList = screen.getAllByTestId("foodItems")
    // 6 foodItems id from Restaurant menu page and 1 from Cart page
    expect(cartItemList.length).toBe(7);

      const cartListItem = screen.getAllByText("Bold BBQ Veggie Thin n Crispy")
      // 1 foodItems id from Restaurant menu page and 1 from Cart page
    expect(cartListItem.length).toBe(2)

    const clearCart = screen.getByRole("button", {name: "Clear Cart"})
    fireEvent.click(clearCart)

    const cart0ItemsAfterClearCart = screen.getByText("Cart (0 items)")
    expect(cart0ItemsAfterClearCart).toBeInTheDocument()

    const cartItemListAfterClearCart = screen.getAllByTestId("foodItems")
    // 6 foodItems id from Restaurant menu page
    expect(cartItemListAfterClearCart.length).toBe(6);

      const cartListItemAfterClearCart = screen.getAllByText("Bold BBQ Veggie Thin n Crispy")
      // 1 foodItems id from Restaurant menu page
    expect(cartListItemAfterClearCart.length).toBe(1);

    const cartEmptyMessage = screen.getByText("Cart is empty. Please add items.");
    expect(cartEmptyMessage).toBeInTheDocument();

})