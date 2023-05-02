import subscription from "../../Images/subscription.svg";

import number from "../../Images/contact.svg";

import EmptyComponent from "../../helpers/emptyState";
function Subscription() {
  return (
    <>
      <EmptyComponent
        headTitle="Subscription"
        headImageUrl={subscription}
        mainImageUrl={number}
        mainTitle="There is no Subscription yet "
        message="There isn't any subscription yet. Any subscription you've "
        subMessage=" done  will appear here."
      />
    </>
  );
}

export default Subscription;
