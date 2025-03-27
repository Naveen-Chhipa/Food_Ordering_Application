import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mockData/resListMockData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("should render the body component with search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchbtn = screen.getByPlaceholderText("Search restaurants...");
  const searchInput = screen.getByTestId("searchInput");
  //   expect(searchInput).toBeInTheDocument();

  fireEvent.change(searchInput, { target: { value: "burger" } });

  // await waitFor(() => {
  //   const cards = screen.getAllByTestId("resCard");
  //   expect(cards.length).toBe(3);
  // });
});

it("should show only top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const resBeforeclick = screen.getAllByTestId("resCard");
  expect(resBeforeclick.length).toBe(20);
  const topRatedbtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  expect(topRatedbtn).toBeInTheDocument();
  fireEvent.click(topRatedbtn);
  const resAfterclick = screen.getAllByTestId("resCard");
  expect(resAfterclick.length).toBe(11);
});
