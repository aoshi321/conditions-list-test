import React from "react";
import { render } from "@testing-library/react";
import ConditionImage from "./ConditionImage";

const setup = url => {
  const utils = render(<ConditionImage src={url} />);
  return {
    ...utils
  };
};

describe("ConditionItem", () => {
  it("Should display a condition image", async () => {
    const imgUrl =
      "http://assets.your.md/conditions/alzheimers-disease/card/alzheimers-disease-male-card.jpg";
    const { container } = setup(imgUrl);
    expect(container.querySelector(`img[src="${imgUrl}"]`)).toBeInTheDocument();
  });
});
