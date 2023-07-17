const RecipeCard = ({ item }) => {
  const { id, name } = item;
  return (
    <p
      style={{
        textAlign: 'center',
      }}
    >
      {id}-{name}
    </p>
  );
};

// RecipeItem.propTypes = {
// };

export default RecipeCard;
