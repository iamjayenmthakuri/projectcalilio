import notification from "../../Images/notification.svg";
import EmptyComponent from "../../helpers/emptyState";

function Notification() {
  return (
    <>
      <EmptyComponent
        headTitle="Notification"
        headImageUrl={notification}
        mainImageUrl={notification}
        mainTitle="There is not any Notification added"
        message="There isn't any notification for you. Any kind of "
        subMessage="notification will appear here."
      />
    </>
  );
}

export default Notification;
