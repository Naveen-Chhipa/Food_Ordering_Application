import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mockData/resMenuListMock.json";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../../utils/redux-store/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
it("should load restaurant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
        <RestaurantMenu />
      </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Steamed & Fried Momo - 6 Pcs (2)");
  fireEvent.click(accordionHeader);

  const menuitems = screen.getAllByTestId("menuList");
  expect(menuitems.length).toBe(2);

  const addBtns=screen.getAllByRole("button",{ name : "ADD"});
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart-(1")).toBeInTheDocument();


});
