import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// redux form action
import { createEmployee } from '../../redux/actions/employeeAction'
// style
import Styles from './Styles'

// ---------------------------------------------------------------------

const EmployeeForm = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const onSubmit = async (values) => {
    await sleep(300)
    // on submit send values to form reducer
    dispatch(createEmployee(values))
    // navigate to employee page
    navigate('/employee')
  }

  return (
    <Styles>
      <h1>Employee Form</h1>
      <Form
        onSubmit={onSubmit}
        initialValues={{ employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="id" component="input" value={Date.now()} hidden />
            <div>
              <label>First Name</label>
              <Field name="firstName" component="input" type="text" placeholder="First Name" />
            </div>
            <div>
              <label>Last Name</label>
              <Field name="lastName" component="input" type="text" placeholder="Last Name" />
            </div>
            <div>
              <label>Employed</label>
              <Field name="employed" component="input" type="checkbox" />
            </div>
            <div>
              <label>Education</label>
              <Field name="education" component="select">
                <option />
                <option value="high school">High School</option>
                <option value="bachelor">Bachelor</option>
                <option value="master">Master</option>
              </Field>
            </div>
            <div>
              <label>Expertise</label>
              <div>
                <label>
                  <Field name="expertise" component="input" type="checkbox" value="html" />
                  HTML
                </label>
                <label>
                  <Field name="expertise" component="input" type="checkbox" value="css" />
                  CSS
                </label>
                <label>
                  <Field name="expertise" component="input" type="checkbox" value="javascript" />
                  Javascript
                </label>
                <label>
                  <Field name="expertise" component="input" type="checkbox" value="nodejs" />
                  NodeJS
                </label>
                <label>
                  <Field name="expertise" component="input" type="checkbox" value="reactjs" />
                  ReactJS
                </label>
              </div>
            </div>
            <div>
              <label>Prefered Technology</label>
              <div>
                <label>
                  <Field name="technology" component="input" type="radio" value="front End" />
                  Front End
                </label>
                <label>
                  <Field name="technology" component="input" type="radio" value="Back End" />
                  Back End
                </label>
                <label>
                  <Field name="technology" component="input" type="radio" value="Full Stack" />
                  Full Stack
                </label>
              </div>
            </div>
            <div>
              <label>Notes</label>
              <Field name="notes" component="textarea" placeholder="Notes" />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button type="button" onClick={form.reset} disabled={submitting || pristine}>
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </Styles>
  )
}

export default EmployeeForm
