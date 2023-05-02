import overview from "../../Images/mynumber.svg";

import number from "../../Images/mainblocklist.svg";

import EmptyComponent from "../../helpers/emptyState";
function Blocklist() {
  return (
    <>
      <EmptyComponent
        headTitle="My number"
        headImageUrl={overview}
        mainImageUrl={number}
        mainTitle="No numbers in contact"
        message="You don’t have any number in contacts. Any contacts numbers"
        subMessage=" that you add will appear here."
      />
    </>
  );
}

export default Blocklist;
