import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadRestaurants } from '../store/restaurants/actions';
import { CircularProgress, List, ListItem } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

export const RestaurantList = ({
  loadRestaurants,
  restaurants,
  loading,
  loadError,
}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);
  return (
    <>
      {loading && <CircularProgress data-testid="loading-indicator" />}
      {loadError && (
        <Alert severity="error">Restaurants could not be loaded.</Alert>
      )}
      <List>
        {restaurants.map(restaurant => (
          <ListItem key={restaurant.id}>{restaurant.name}</ListItem>
        ))}
      </List>
    </>
  );
};

const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
  loading: state.restaurants.loading,
});

const mapDispatchToProps = { loadRestaurants };

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
