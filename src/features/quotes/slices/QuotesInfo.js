import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import QuotesInfo from "../services/Quote.service";


export const getTabState = createAsyncThunk(
    "product/getTabState",
    async (state) => {
        try {
            
          
            return { tabState: state };
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return message;
        }
    }
);



export const getProductList = createAsyncThunk(
    "product/getProductList",
    async () => {
        try {
            const response = await QuotesInfo.getproduct();
          
            return { productList: response.data };
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return message;
        }
    }
);



export const getproductDetail = createAsyncThunk(
    "product/getproductDetail",
    async (id) => {
        try {
            const response = await QuotesInfo.getproductDetails(id);
          
            return { productDetail: response.data };
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return message;
        }
    }
);




const initialState = {
   
    productList:"",
    productDetails:"",
    tabState:"",
    message: "",
};
const qouteSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: {
        [getProductList.fulfilled]: (state, action) => {
            state.productList = action.payload.productList;
        },
        [getProductList.rejected]: (state, action) => {
            state.message = action.payload?.message || 'not working';
        },
        [getproductDetail.fulfilled]: (state, action) => {
            state.productDetails = action.payload.productDetail;
        },
        [getproductDetail.rejected]: (state, action) => {
            state.message = action.payload?.message || 'not working';
        },
        [getTabState.fulfilled]: (state, action) => {
            state.tabState = action.payload.tabState;
        },
        [getTabState.rejected]: (state, action) => {
            state.message = action.payload?.message || 'not working';
        },
       
    },
});
const { reducer } = qouteSlice;
export default reducer