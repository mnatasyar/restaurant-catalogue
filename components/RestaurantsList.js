import RestaurantItem from "./RestaurantItem";
import PropTypes from "prop-types";
import Grid from "./styled/Grid";

export default function RestaurantsList({ restaurants }) {
  return (
    <Grid>
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} {...restaurant} />
      ))}
    </Grid>
  );
}
RestaurantsList.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      pictureId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
