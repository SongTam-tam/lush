import React from "react";
import { PayStyle } from "./style";
import PayForm from "../../component/pay/pay-form/PayForm";

const Pay = () => {
  return (
    <PayStyle>
      <PayForm />
      {/* <PayComplete /> */}
    </PayStyle>
  );
};

export default Pay;
