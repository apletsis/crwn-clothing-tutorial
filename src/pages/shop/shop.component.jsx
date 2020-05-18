import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends Component {
  // if we don't pass props as a parameter to the constructor and to the super,
  // than we can use short syntax for setting state and constructor with super
  // will be added automatically.
  // state = {
  //   loading: true,
  // };

  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    //#region Ways of fetching data before redux thunk
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");

    // FETCH WAY(deeply nested object)
    // fetch(
    //   'https://firestore.googleapis.com/v1/projects/crwn-clothing-db-de071/databases/(default)/documents/collections'
    // )
    //   .then(response => response.json())
    //   .then(collections => console.log(collections));

    // PROMISE WAY
    // collectionRef.get().then(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });

    // FIREBASE WAY(Observer pattern)
    // collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    //#endregion
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <React.Fragment>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
