import { createSlice } from '@reduxjs/toolkit';
import { IActionChangeDate, IActionChangeTask } from '../../Interfaces/TableTask';
import { IElement, initialState } from './state';

export const tableReducer = createSlice({
  name: 'Table',
  initialState,
  reducers: {
    changeEdit: (state: IElement[], action) => {
      return state.map((row) => (row.id === action.payload ? { ...row, edit: !row.edit } : row));
    },

    changeStatusRow: (state: IElement[], action) => {
      return state.map((row) =>
        row.id === action.payload ? { ...row, status: !row.status } : row,
      );
    },

    removeTask: (state: IElement[], action) => {
      return state.filter((row) => row.id !== action.payload);
    },

    addTask: (state: IElement[], action) => {
      const newID = state[state.length - 1].id + 1;
      const newTask: IElement = { id: newID, ...action.payload };
      return [...state, newTask];
    },

    changeTitleTask: (state: IElement[], action: IActionChangeTask) => {
      return state.map((element) =>
        element.id === action.payload.id ? { ...element, task: action.payload.task } : element,
      );
    },

    changeCompletionDate: (state: IElement[], action: IActionChangeDate) => {
      return state.map((element) =>
        element.id === action.payload.id
          ? { ...element, completionDate: action.payload.date }
          : element,
      );
    },
    changeCurrentRow: (state: IElement[], action) => {
      return state.map((element) =>
        element.id === action.payload.id ? { ...element, ...action.payload.newInfo } : element,
      );
    },
  },
});

export const {
  changeTitleTask,
  changeCompletionDate,
  changeEdit,
  removeTask,
  changeStatusRow,
  addTask,
  changeCurrentRow,
} = tableReducer.actions;

export default tableReducer.reducer;
