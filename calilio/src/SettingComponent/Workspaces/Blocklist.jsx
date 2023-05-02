import blocklist from "../../Images/blocklist.svg";
import mainblocklist from "../../Images/mainblocklist.svg";
import EmptyComponent from "../../helpers/emptyState";
function Blocklist() {
  return (
    <>
      <EmptyComponent
        headTitle="Block List"
        headImageUrl={blocklist}
        mainImageUrl={mainblocklist}
        mainTitle="No Blocked Contacts"
        message="You don’t have any blocked contacts. Any contacts that"
        subMessage=" you block will appear here."
      />
    </>
  );
}

export default Blocklist;
