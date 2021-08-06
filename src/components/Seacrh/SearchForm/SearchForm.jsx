import { Formik, Form, Field } from 'formik';

function Search(props) {
  return (
    <Formik
      initialValues={{
        text: '',
        caregories: 'all',
        sorting: 'relevance',
      }}
      onSubmit={values => {
        console.log(values)
      }}>
      <Form className="login-form">
        <Field name="text" />
        <div className="login-form__input-text">
          <div>
            <label>Categories</label>
            <Field name="caregories" as="select">
              <option value="all">All</option>
              <option value="art">Art</option>
              <option value="biography">Biography</option>
              <option value="computers">Computers</option>
              <option value="history">History</option>
              <option value="medical">Medical</option>
              <option value="poetry">Poetry</option>
            </Field>
          </div>
          <label>Sorting by</label>
          <Field name="sorting" as="select">
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </Field>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}



export default Search;