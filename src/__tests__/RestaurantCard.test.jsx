import { render, screen } from "@testing-library/react"
import RestaurantCard from "../components/RestaurantCard"
import MOCK_DATA from "./mocks/resCardMock.json"
import "@testing-library/jest-dom"
import { withPromotedLabel } from "../components/RestaurantCard"

it("Should render RestaurantCard component with props data", () => {

    render(<RestaurantCard restaurantDetails={MOCK_DATA}></RestaurantCard>)

    const resName = screen.getByText("Pizza Hut");
    expect(resName).toBeInTheDocument();

})

it("Should render RestaurantCard component with Promoted label", () => {

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    render(<RestaurantCardPromoted restaurantDetails={MOCK_DATA}></RestaurantCardPromoted>)

    const resName = screen.getByText("Promoted");
    expect(resName).toBeInTheDocument();

})