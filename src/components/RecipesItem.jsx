import PropTypes from 'prop-types';
import { useRecipes } from '../zustand/store';
import RecipeCard from './RecipeCard';

const RecipesItem = ({ item, isShow }) => {
  const { id, selected } = item;
  const toggleSelected = useRecipes(state => state.toggleSelected);

  const handleRightClick = e => {
    e.preventDefault();
    toggleSelected(id);
  };

  return (
    <li
      style={{
        display: isShow ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        color: selected ? 'red' : 'black',
        cursor: 'pointer',
        width: 450,
        height: 150,
      }}
      onContextMenu={handleRightClick}
    >
      <RecipeCard item={item} isSelected={selected} />
    </li>
  );
};

RecipesItem.propTypes = {
  isShow: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RecipesItem;
