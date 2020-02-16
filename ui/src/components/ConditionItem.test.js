import React from "react";
import { render } from "@testing-library/react";
import ConditionItem from "./ConditionItem";

const condition = {
  snippet:
    "Alzheimer's disease is the most common cause of dementia. Dementia is a group of symptoms associated with a decline in the way your brain functions, affecting your memory and the way you behave.",
  label: "Alzheimer's disease",
  image:
    "http://assets.your.md/conditions/alzheimers-disease/card/alzheimers-disease-male-card.jpg"
};

const setup = condition => {
  const utils = render(<ConditionItem condition={condition} />);
  return {
    ...utils
  };
};

describe("ConditionItem", () => {
  it("Should display an item wih snippet label and image", async () => {
    const { container, getByText } = setup(condition);
    expect(getByText(condition.label)).toBeInTheDocument();
    expect(getByText(condition.snippet)).toBeInTheDocument();
    expect(
      container.querySelector(`img[src="${condition.image}"]`)
    ).toBeInTheDocument();
  });

  it("Should display an item without a snippet", async () => {
    const { queryByText } = setup({ ...condition, snippet: null });
    expect(queryByText(condition.snippet)).not.toBeInTheDocument();
  });
});
