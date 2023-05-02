import member from "../../Images/member.svg";
import EmptyComponent from "../../helpers/emptyState";

function Member() {
  return (
    <>
      <EmptyComponent
        headTitle="Member"
        headImageUrl={member}
        mainImageUrl={member}
        mainTitle="No members in contact"
        message="You don’t have any member in contacts. Any contacts members"
        subMessage=" that you add will appear here."
      />
    </>
  );
}

export default Member;
