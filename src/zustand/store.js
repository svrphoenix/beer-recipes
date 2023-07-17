import { create } from 'zustand';
import { fetchRecipesService } from '../services/punkApiService';
import { devtools } from 'zustand/middleware';
import constants from '../constants/constants';
const { RENDER_COUNT, SHOW_COUNT } = constants;

export const useRecipes = create(
  devtools((set, get) => ({
    recipes: [],
    page: 0,
    viewCount: SHOW_COUNT,
    isLoading: false,
    error: null,

    setViewCount: step => {
      set({ viewCount: get().viewCount + step });
    },

    fetchAll: async () => {
      set({ isLoading: true, page: get().page + 1, viewCount: SHOW_COUNT });
      try {
        const result = await fetchRecipesService(get().page);
        set({
          recipes: [...get().recipes, ...result.map(item => ({ ...item, selected: false }))],
          error: null,
        });
      } catch (error) {
        set({ error });
      } finally {
        set({ isLoading: false });
      }
    },

    getRecipesToShow: () => get().recipes.slice(0, RENDER_COUNT),

    getSelectedRecipes: () => get().recipes.filter(({ selected }) => selected === true),

    toggleSelected: id => {
      set({
        recipes: get().recipes.map(item =>
          id === item.id ? { ...item, selected: !item.selected } : item
        ),
      });
    },

    deleteSelected: () => {
      const selectedRecipes = get().getSelectedRecipes();
      set({ recipes: get().recipes.filter(item => !selectedRecipes.includes(item)) });
    },
  }))
);
