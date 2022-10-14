import { createAsyncThunk } from '@reduxjs/toolkit'
import { employeeAPI as api } from '../../services/employeeAPI'

// ----------------------------------------------------------------------

export const getEmployees = createAsyncThunk(
  'employee/getEmployees',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/employee')
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const getEmployee = createAsyncThunk(
  'employee/getEmployee',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/employee/${id}`)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const createEmployee = createAsyncThunk(
  'employee/createEmployee',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/employee', body)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const deleteEmployee = createAsyncThunk(
  'employee/deleteEmployee',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/employee/${id}`)
      return id
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)
