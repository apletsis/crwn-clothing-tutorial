// Containers don't render anything, they just pass props down to components
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

// same as above
// const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));

export default CollectionOverviewContainer;
