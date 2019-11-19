import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collection-overview/collections-overview.component';
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import './shop.styles.scss';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  
  render() {
    const { match, isCollectionsFetching, isCollectionsLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          render={ props => (
            <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />
            )} 
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={ props => (
            <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
            )} 
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectIsCollectionsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
