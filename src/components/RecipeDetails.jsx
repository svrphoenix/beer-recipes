import PropTypes from 'prop-types';

const RecipeDetails = ({ item }) => {
  const { name, description, tagline, image_url, brewers_tips } = item;
  return (
    <div style={{ color: 'black' }}>
      <p>{name}</p>
      <p>{description}</p>
      <p>Brewers tips: {brewers_tips}</p>
      <img src={image_url} alt={tagline} width="100" />
    </div>
  );
};

RecipeDetails.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    brewers_tips: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeDetails;
