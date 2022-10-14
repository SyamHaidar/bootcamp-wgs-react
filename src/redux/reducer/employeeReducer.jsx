import { createSlice } from '@reduxjs/toolkit'
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
} from '../actions/employeeAction'

// -------------------------------------------------------------------------

const employeeReducer = createSlice({
  name: 'employee',
  initialState: {
    employee: {},
    employees: [],
  },
  reducers: {},
  extraReducers: {
    // --- get all data ---
    [getEmployees.fulfilled]: (state, { payload }) => {
      state.employees = payload
    },
    // --- get detail data by id ---
    [getEmployee.fulfilled]: (state, { payload }) => {
      state.employee = payload
    },
    // --- create data ---
    [createEmployee.fulfilled]: (state, { payload }) => {
      state.employees = [...state.employees, payload]
    },
    // --- delete data ---
    [deleteEmployee.fulfilled]: (state, { payload: id }) => {
      state.employees = state.employees.filter((item) => item.id !== id)
    },
  },
})

export default employeeReducer.reducer
