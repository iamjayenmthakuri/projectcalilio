import dashbord from "../../Images/dashbord.svg";
import overview from "../../Images/logomark.svg";

import EmptyComponent from "../../helpers/emptyState";
function Overview() {
  return (
    <>
      <EmptyComponent
        headTitle="Overview"
        headImageUrl={dashbord}
        mainImageUrl={overview}
        mainTitle="This is overview page"
        message="You can take a brief look of your page. The main contacts"
        subMessage=" that you want will appear here."
      />
    </>
  );
}

export default Overview;
