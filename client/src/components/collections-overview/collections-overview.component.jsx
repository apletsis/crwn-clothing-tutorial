import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectColectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { CollectionsOverviewContainer } from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectColectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
