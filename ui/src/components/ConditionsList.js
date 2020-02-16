import React from "react";
import styled from "styled-components";

import ConditionItem from "./ConditionItem";

const ConditionsListWrapper = styled.div`
  max-width: 1335px;
  margin: 0 auto;
`;

const ConditionsListRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const ConditionsList = ({ conditions }) => (
  <ConditionsListWrapper>
    <ConditionsListRow>
      {conditions.map((condition, index) => (
        <ConditionItem condition={condition} key={index} />
      ))}
    </ConditionsListRow>
  </ConditionsListWrapper>
);

export default ConditionsList;
