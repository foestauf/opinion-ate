import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadRestaurants } from '../store/restaurants/actions';
import { CircularProgress, List, ListItem } from '@material-ui/core';

export const RestaurantList = ({ loadRestaurants, restaurants, loading }) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);
  return (
    <>
      {loading && <CircularProgress data-testid="loading-indicator" />}
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
