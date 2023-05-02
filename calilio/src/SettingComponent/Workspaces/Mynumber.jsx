import number from "../../Images/mynumber.svg";
import EmptyComponent from "../../helpers/emptyState";

function Mynumber() {
  return (
    <>
      <EmptyComponent
        headTitle="My number"
        headImageUrl={number}
        mainImageUrl={number}
        mainTitle="No numbers in contact"
        message="You don’t have any number in contacts. Any contacts numbers"
        subMessage=" that you add will appear here."
      />
    </>
  );
}

export default Mynumber;
