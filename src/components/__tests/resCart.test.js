import { render ,screen} from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mockData/resDataMock";
import "@testing-library/jest-dom";
it("should load the RestaurantCard componenet",()=>{
    render(
        <RestaurantCard resData={MOCK_DATA}/>
    )
    const name=screen.getByText("McDonald's");
    expect(name).toBeInTheDocument();
})