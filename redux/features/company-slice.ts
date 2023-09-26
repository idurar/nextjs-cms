import { Company } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {} as Company;

export const currentCompany = createSlice({
  name: 'currentCompany',
  initialState,
  reducers: {
    //set current company
    setCurrentCompany: (state, action: PayloadAction<Company>) => {
      console.log('🚀 ~ file: company-slice.ts:12 ~ action:', action);
      return action.payload;
    },
  },
});

export const { setCurrentCompany } = currentCompany.actions;
export default currentCompany.reducer;
