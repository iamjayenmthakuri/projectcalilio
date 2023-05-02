import overview from "../../Images/payment.svg";

import number from "../../Images/chat.svg";

import EmptyComponent from "../../helpers/emptyState";
function PaymentMethod() {
  return (
    <>
      <EmptyComponent
        headTitle="Payment Method"
        headImageUrl={overview}
        mainImageUrl={number}
        mainTitle="No numbers is done yet"
        message="You haven't done any payment yet. Any payment you've "
        subMessage=" done will appear here."
      />
    </>
  );
}

export default PaymentMethod;
