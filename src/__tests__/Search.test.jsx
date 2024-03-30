import Body from "../components/Body"
import { fireEvent, render, screen } from "@testing-library/react"
import MOCK_DATA from "./mocks/resListDataMock.json"
import "@testing-library/jest-dom"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should Search rest list for burger text input", async () => {

    await act(async () => render(<BrowserRouter><Body/></BrowserRouter>))

    const restCardInitialList = screen.getAllByTestId("resCard")
    expect(restCardInitialList.length).toBe(20);

    const searchButon = screen.getByRole("button", {name:"Search"})
    expect(searchButon).toBeInTheDocument()

    const searchInput = screen.getByTestId("searchInput")
    fireEvent.change(searchInput, { target: { value: "Burger"}})
    fireEvent.click(searchButon)
    const restCardList = screen.getAllByTestId("resCard")
    expect(restCardList.length).toBe(2);

})

it("Should filter top rated restaurants on button click", async () => {
    await act(async () => render(<BrowserRouter><Body/></BrowserRouter>))

    const restCardInitialList = screen.getAllByTestId("resCard")
    expect(restCardInitialList.length).toBe(20);

    const topRatedButton = screen.getByRole("button", {name: "Top rated Restaurants"})
    expect(topRatedButton).toBeInTheDocument()

    fireEvent.click(topRatedButton)

    const restCardFilteredList = screen.getAllByTestId("resCard")
    expect(restCardFilteredList.length).toBe(7);

    const allRestButton = screen.getByRole("button", {name: "All Restaurants"})
    expect(allRestButton).toBeInTheDocument()

    fireEvent.click(allRestButton)

    const restCardAllList = screen.getAllByTestId("resCard")
    expect(restCardAllList.length).toBe(20);

})