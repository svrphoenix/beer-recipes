import { shallow } from 'zustand/shallow';

import { useRecipes } from '../zustand/store';

import constants from '../constants/constants';
const { SHOW_COUNT } = constants;

const ButtonDelete = () => {
  const { deleteSelected, setViewCount, viewCount, countRecipes } = useRecipes(
    state => ({
      countRecipes: state.recipes.length,
      deleteSelected: state.deleteSelected,
      viewCount: state.viewCount,
      setViewCount: state.setViewCount,
    }),
    shallow
  );

  const handleDelete = () => {
    deleteSelected();
    if (viewCount - countRecipes >= 0 && viewCount > SHOW_COUNT) setViewCount(-1 * SHOW_COUNT);
  };

  return (
    <button type="button" style={{ display: 'block' }} onClick={handleDelete}>
      delete selected
    </button>
  );
};

export default ButtonDelete;
