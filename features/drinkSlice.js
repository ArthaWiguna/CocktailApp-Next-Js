import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: 2,
  drinks: [],
  drinksByCategory: [],
  drinksByGlass: [],
  drinksByAlcoholic: [],
  category: [],
  glass: [],
  alcoholic: [],
  status: "idle", // idle | loading | success | rejected
  error: null,
};

export const fetchAsyncDrink = createAsyncThunk(
  "drinks/fetchAsyncDrink",
  async () => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`
      );
      console.log(response, "fetchDrink");
      return response.data.drinks;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchAsyncCategoryDrink = createAsyncThunk(
  "drinks/fetchAsyncCategoryDrink",
  async () => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      console.log(response, "fetchCategory");
      return response.data.drinks;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchAsyncSearchDrink = createAsyncThunk(
  "drinks/fetchAsyncSearchDrink",
  async (keyword) => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`
      );
      console.log(response, "fetchSearch");
      return response.data.drinks;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchAsyncDrinkBycategory = createAsyncThunk(
  "drinks/fetchAsyncDrinkBycategory",
  async (category) => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
      );
      console.log(response, "drinkByCategory");
      return response.data.drinks;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchAsyncGlassDrink = createAsyncThunk(
  "drinks/fetchAsyncGlassDrink",
  async () => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`
      );
      console.log(response, "glassDrink");
      return response.data.drinks;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchAsyncDrinkByGlass = createAsyncThunk(
  "drinks/fetchAsyncDrinkByGlass",
  async (glass) => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass}`
      );
      console.log(response, "drinkByGlass");
      return response.data.drinks;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchAsyncAlcoholicDrink = createAsyncThunk(
  "drinks/fetchAsyncAlcoholicDrink",
  async () => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list`
      );
      console.log(response, "AlcoholicDrink");
      return response.data.drinks;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchAsyncDrinkByAlcoholic = createAsyncThunk(
  "drinks/fetchAsyncDrinkByAlcoholic",
  async (alcoholic) => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcoholic}`
      );
      console.log(response, "drinkByAlcoholic");
      return response.data.drinks;
    } catch (error) {
      console.log(error);
    }
  }
);

export const drinkSlice = createSlice({
  name: "drink",
  initialState,
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
  },
  extraReducers: {
    [fetchAsyncSearchDrink.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAsyncSearchDrink.fulfilled]: (state, action) => {
      state.status = "success";
      state.drinks = action.payload;
    },
    [fetchAsyncSearchDrink.rejected]: (state) => {
      state.status("rejected");
      state.error = "error";
    },
    [fetchAsyncDrink.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAsyncDrink.fulfilled]: (state, action) => {
      state.status = "success";
      state.drinks = action.payload;
    },
    [fetchAsyncDrink.rejected]: (state) => {
      state.status("rejected");
      state.error = "error";
    },
    [fetchAsyncCategoryDrink.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAsyncCategoryDrink.fulfilled]: (state, action) => {
      state.status = "success";
      state.category = action.payload;
    },
    [fetchAsyncCategoryDrink.rejected]: (state) => {
      state.status("rejected");
      state.error = "error";
    },
    [fetchAsyncDrinkBycategory.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAsyncDrinkBycategory.fulfilled]: (state, action) => {
      state.status = "success";
      state.drinks = action.payload;
    },
    [fetchAsyncDrinkBycategory.rejected]: (state) => {
      state.status("rejected");
      state.error = "error";
    },
    [fetchAsyncGlassDrink.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAsyncGlassDrink.fulfilled]: (state, action) => {
      state.status = "success";
      state.glass = action.payload;
    },
    [fetchAsyncGlassDrink.rejected]: (state) => {
      state.status("rejected");
      state.error = "error";
    },
    [fetchAsyncDrinkByGlass.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAsyncDrinkByGlass.fulfilled]: (state, action) => {
      state.status = "success";
      state.drinks = action.payload;
    },
    [fetchAsyncDrinkByGlass.rejected]: (state) => {
      state.status("rejected");
      state.error = "error";
    },
    [fetchAsyncAlcoholicDrink.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAsyncAlcoholicDrink.fulfilled]: (state, action) => {
      state.status = "success";
      state.alcoholic = action.payload;
    },
    [fetchAsyncAlcoholicDrink.rejected]: (state) => {
      state.status("rejected");
      state.error = "error";
    },
    [fetchAsyncDrinkByAlcoholic.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAsyncDrinkByAlcoholic.fulfilled]: (state, action) => {
      state.status = "success";
      state.drinks = action.payload;
    },
    [fetchAsyncDrinkByAlcoholic.rejected]: (state) => {
      state.status("rejected");
      state.error = "error";
    },
  },
});

export const { increament } = drinkSlice.actions;

export default drinkSlice.reducer;
