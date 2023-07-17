import { useEffect } from 'react';

import { shallow } from 'zustand/shallow';

import { useRecipes } from '../zustand/store';

import ButtonDelete from './ButtonDelete';
import RecipesItem from './RecipesItem';

import constants from '../constants/constants';
const { SHOW_COUNT } = constants;

const RecipesList = () => {
  const { fetchAll, error, isLoading, count, viewCount, setViewCount, getSelectedRecipes } =
    useRecipes(
      state => ({
        isLoading: state.isLoading,
        error: state.error,
        count: state.recipes.length,
        fetchAll: state.fetchAll,
        getSelectedRecipes: state.getSelectedRecipes,
        viewCount: state.viewCount,
        setViewCount: state.setViewCount,
      }),
      shallow
    );
  const recipesToShow = useRecipes(state => state.getRecipesToShow());

  useEffect(() => {
    if (count === 0) {
      fetchAll();
    }
  }, [count, fetchAll]);

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error.message}</div>
  ) : (
    <div>
      {recipesToShow.length > 0 ? (
        <div style={{ display: 'flex', gap: 24 }}>
          <div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {recipesToShow.map((item, index) => (
                <RecipesItem
                  key={item.id}
                  item={item}
                  isShow={index < viewCount && index >= viewCount - SHOW_COUNT}
                />
              ))}
            </ul>
            <button
              type="button"
              disabled={viewCount - SHOW_COUNT === 0}
              onClick={() => setViewCount(-1 * SHOW_COUNT)}
            >
              Up
            </button>
            <button
              type="button"
              disabled={viewCount >= recipesToShow.length}
              onClick={() => setViewCount(SHOW_COUNT)}
            >
              Down
            </button>
          </div>
          <div>{getSelectedRecipes().length > 0 && <ButtonDelete />}</div>
        </div>
      ) : (
        <div>No more recipes...</div>
      )}
    </div>
  );
};

export default RecipesList;
