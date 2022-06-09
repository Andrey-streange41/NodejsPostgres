import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {fetchBrands, fetchDevices, fetchTypes} from '../api/deviceAPI';

 
export const fetchTypesAsyncThunk = createAsyncThunk(
    'device/fetchTypes',
   async function(){
      return await  fetchTypes();
   }
    
)

export const fetchBrandsAsyncThunk = createAsyncThunk(
    'device/fetchBrands',
    async function(){
        return await  fetchBrands();
     }
)

export const fetchDevicesAsyncThunk = createAsyncThunk(
    'device/fetchDevices',
    async function(){
        return await  fetchDevices();
     }
)


const deviceSlice = createSlice({
    name:'device',
    initialState:{
        error:null,
        types:[],
        isLoading:false,
        brands:[],
        devices:[],
        selectedType:{},
        selectedBrand:{}
    },
    reducers:{
        setTypes(state,action){
            state.types = action.payload.types;
        },
        setBrands(state,action){
            state.brands = action.payload.brands;
        },
        setDevices(state,action){
            state.devices = action.payload;
        },
        
        selectType(state,action){
            state.selectedType = action.payload;
        },
        selectBrand(state,action){
            state.selectedBrand = action.payload;
        },
    },
    extraReducers:{
        [fetchTypesAsyncThunk.pending]:(state)=>{
            state.isLoading = true;
            state.error = null;
        },
        [fetchTypesAsyncThunk.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.error = null;
            state.types = action.payload;
        },
        [fetchTypesAsyncThunk.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        
        [fetchBrandsAsyncThunk.pending]:(state)=>{
            state.isLoading = true;
            state.error = null;
        },
        [fetchBrandsAsyncThunk.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.error = null;
            state.brands = action.payload;
        },
        [fetchBrandsAsyncThunk.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },

        [fetchDevicesAsyncThunk.pending]:(state)=>{
            state.isLoading = true;
            state.error = null;
        },
        [fetchDevicesAsyncThunk.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.error = null;
            state.devices = action.payload;
        },
        [fetchDevicesAsyncThunk.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {selectType,selectBrand , setTypes, setBrands,setDevices} = deviceSlice.actions;

export default deviceSlice.reducer;
