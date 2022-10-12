export const submitForm = (data) => async (dispatch) => {
  dispatch({ type: 'SUBMIT_FORM', payload: data })
}
