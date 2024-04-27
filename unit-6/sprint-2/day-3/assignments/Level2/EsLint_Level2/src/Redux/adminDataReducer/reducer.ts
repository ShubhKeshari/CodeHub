import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface MenProduct {
  id: number;
  category: string;
  name: string;
  price: number;
  size: string[];
  color: string[];
  imageURL: string;
  description: string;
  stock: number;
  rating: number;
}
interface WomenProduct {
  id: number;
  category: string;
  name: string;
  price: number;
  size: string[];
  color: string[];
  imageURL: string;
  description: string;
  stock: number;
  rating: number;
}
interface KidsProduct {
  id: number;
  category: string;
  name: string;
  price: number;
  size: string[];
  color: string[];
  imageURL: string;
  description: string;
  stock: number;
  rating: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  type: "admin" | "user"; // There are only two types of users
  image: string;
  password: string;
}
interface State {
  isLoading: boolean;
  isError: boolean;
  mensProducts: MenProduct[];
  womenProducts: WomenProduct[];
  kidsProducts: KidsProduct[];
  users: User[];
}

const initialState: State = {
  isLoading: false,
  isError: false,
  mensProducts: [],
  womenProducts: [],
  kidsProducts: [],
  users: [],
  // orders:[]
};


const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMenData.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.mensProducts = action.payload;
      })
      .addCase(getMenData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getMenData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      });
    builder
      .addCase(getWomenData.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.womenProducts = action.payload;
      })
      .addCase(getWomenData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getWomenData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      });

    builder
      .addCase(getKidData.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.kidsProducts = action.payload;
      })
      .addCase(getKidData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getKidData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      });
    builder
      .addCase(getUserData.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.users = action.payload;
      })
      .addCase(getUserData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getUserData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      });
    // builder
    //   .addCase(getOrderData.fulfilled, (state, action: PayloadAction<any>) => {
    //     state.isLoading = false;
    //     state.isError = false;
    //     state.users = action.payload;
    //   })
    //   .addCase(getOrderData.rejected, (state) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //   })
    //   .addCase(getOrderData.pending, (state) => {
    //     state.isLoading = true;
    //     state.isError = false;
    //   });
  },
});



export const getMenData = createAsyncThunk(
  "productReducer/getMenData",
  async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
);
// export const getWomenData = (url: string): ThunkAction<void, any, null, Action<string>> => async (dispatch) => {
//   try {
//     dispatch(getLoading());

//     let res = await fetch(url);
//     let data = await res.json();

//     if (Object.keys(data).length === 0) {
//       dispatch(getError());
//     } else {
//       dispatch(getWomenSuccess(data));
//     }
//   } catch (error) {
//     console.log(error);
//     dispatch(getError());
//   }
// };
export const getWomenData = createAsyncThunk(
  "productReducer/getWomenData",
  async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
);


export const getKidData = createAsyncThunk(
  "productReducer/getKidData",
  async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
);

export const getUserData = createAsyncThunk(
  "productReducer/getUserData",
  async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
);


export default productReducer.reducer;
