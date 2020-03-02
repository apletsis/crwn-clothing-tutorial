import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectColectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
  {console.log(collections)}
  {
    collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))
  }</div>
);


const mapStateToProps = createStructuredSelector({
  collections: selectColectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
