import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import DashboardService from "../services/dash.service";

const user = JSON.parse(localStorage.getItem("user"));
export const getCountGraph = createAsyncThunk(
    "dashboard/getCountGraph",
    async ({ from_date,to_date },thunkAPI) => {
        try {
            const response = await DashboardService.countGraph(from_date,to_date);

            return { getCountGraph: response.data };
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);
export const getValueGraph = createAsyncThunk(
    "dashboard/getValueGraph",
    async ({from_date,to_date},thunkAPI) => {
        try {
            const data = await DashboardService.valueGraph(from_date,to_date);
            return { valueGraph: data.data };
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);
export const getListTopExecutives = createAsyncThunk("dashboard/getListTopExecutives", async ({from_date,to_date},thunkAPI) => {
    try {
        const data = await DashboardService.listTopExecutives(from_date,to_date);
        return { listTopExecutives: data };
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

        return thunkAPI.rejectWithValue();
    }
});

export const getRecentQuoteList = createAsyncThunk("dashboard/getRecentQuoteList", async (thunkAPI) => {
    try {
        const data = await DashboardService.recentQuoteList();
        return  data ;
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

        return thunkAPI.rejectWithValue();
    }
});
const initialState = {
    CountGraph: "",
    valueGraph: "",
    listTopExecutives: "",
    recentQuoteList:"",
    message: ""
};
const dshboardSlice = createSlice({
    name: "dashboard",
    initialState,
    extraReducers: {
        [getCountGraph.fulfilled]: (state, action) => {
            state.CountGraph = action.payload.getCountGraph;
        },
        [getCountGraph.rejected]: (state, action) => {
            state.message = "not working";
        },
        [getValueGraph.fulfilled]: (state, action) => {
            state.valueGraph = action.payload.valueGraph;
        },
        [getValueGraph.rejected]: (state, action) => {

            state.message = "not working";
        },
        [getListTopExecutives.fulfilled]: (state, action) => {

            state.listTopExecutives = action.payload.listTopExecutives;
        },
        [getListTopExecutives.rejected]: (state, action) => {


        },
        [getRecentQuoteList.fulfilled]: (state, action) => {

            state.recentQuoteList = action.payload.data;
        },[getRecentQuoteList.rejected]: (state, action) => {


        }
    },
});
const { reducer } = dshboardSlice;
export default reducer;