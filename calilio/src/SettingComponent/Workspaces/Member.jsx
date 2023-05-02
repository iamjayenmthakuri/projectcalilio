import overview from "../../Images/member.svg";
import member from "../../Images/chat.svg";
import EmptyComponent from "../../helpers/emptyState";
function Blocklist() {
  return (
    <>
      <EmptyComponent
        headTitle="Member"
        headImageUrl={overview}
        mainImageUrl={member}
        mainTitle="No members in contact"
        message="You don’t have any member in contacts. Any contacts members"
        subMessage=" that you add will appear here."
      />
    </>
  );
}

export default Blocklist;
