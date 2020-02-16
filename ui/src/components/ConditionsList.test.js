import React from "react";
import { render } from "@testing-library/react";
import ConditionsList from "./ConditionsList";

const conditions = [
  {
    snippet:
      "Alzheimer's disease is the most common cause of dementia. Dementia is a group of symptoms associated with a decline in the way your brain functions, affecting your memory and the way you behave.",
    label: "Alzheimer's disease",
    image:
      "http://assets.your.md/conditions/alzheimers-disease/card/alzheimers-disease-male-card.jpg"
  },
  {
    snippet:
      "Anorexia nervosa is an eating disorder and mental health condition that can be life-threatening.",
    label: "Anorexia nervosa",
    image:
      "https://s3-us-west-2.amazonaws.com/staging.gutenberg-output/article_images/anorexia-nervosa-female.jpg"
  }
];

const setup = conditions => {
  const utils = render(<ConditionsList conditions={conditions} />);
  return {
    ...utils
  };
};

describe("ConditionsList", () => {
  it("Should display a list of conditions", async () => {
    const { container } = setup(conditions);
    expect(container.querySelectorAll("h2").length).toEqual(2);
  });

  it("Should display no conditons if none supplied", async () => {
    const { container } = setup([]);
    expect(container.querySelectorAll("h2").length).toEqual(0);
  });
});
