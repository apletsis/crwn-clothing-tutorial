import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = WrappedComponent => ({ isloading, ...otherProps }) => {
  return isloading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
      <WrappedComponent {...otherProps} />
  );
};

// similar to
/*
const WithSpinner = WrappedComponent => {
  const Spinner = ({ isloading, ...otherProps }) => {
    return isloading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};
*/

export default WithSpinner;
