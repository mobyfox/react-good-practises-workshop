import { render, screen } from "@testing-library/react";
import Marketplace from "./marketplace";

describe("<Marketplace />", () => {
  it("renders: happy case (admin)", () => {
    //given
    const admin = true;
    //When
    render(<Marketplace admin />);
    //then
    const got = screen.getByRole("main");
    expect(got).toBeDefined();
  });
  it("renders: happy case (no admin)", () => {
    //given
    const admin = true;
    //When
    render(<Marketplace admin={false} />);
    //then
  });
});
