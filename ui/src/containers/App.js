import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { fetchConditions } from "../actions/conditions";
import ConditionsList from "../components/ConditionsList";
import Loader from "../components/Loader";
import GlobalStyle from "../theme/globalStyle";

const App = ({ conditions, isRequesting, fetchConditions, hasError }) => {
  useEffect(() => {
    fetchConditions();
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      {isRequesting ? (
        <Loader />
      ) : !hasError ? (
        <ConditionsList conditions={conditions} />
      ) : (
        <div>Error getting data</div>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ isRequesting, conditions, hasError }) => ({
  isRequesting,
  conditions,
  hasError
});

export default connect(mapStateToProps, { fetchConditions })(App);
