import headphone from "../../Images/headphone.svg";
import EmptyComponent from "../../helpers/emptyState";

function Audio() {
  return (
    <>
      <EmptyComponent
        headTitle="Audio"
        headImageUrl={headphone}
        mainImageUrl={headphone}
        mainTitle="There is no Audio added yet "
        message="There isn't any audio added yet. Any audio you've "
        subMessage=" added will appear here."
      />
    </>
  );
}

export default Audio;
