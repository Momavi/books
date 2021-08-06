import { Formik, Form, Field } from 'formik';

import s from './SearchForm.module.scss'

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
      <Form className={s.form}>
        <Field className={s.form__input} name="text" />
        <div className={s.form__wrapper}>
          <div className={s.form__categories}>
            <label className={s.form__categories__text}>Categories</label>
            <Field className={s.form__categories__field} name="caregories" as="select">
              <option value="all">All</option>
              <option value="art">Art</option>
              <option value="biography">Biography</option>
              <option value="computers">Computers</option>
              <option value="history">History</option>
              <option value="medical">Medical</option>
              <option value="poetry">Poetry</option>
            </Field>
          </div>
          <div className={s.form__sorting}>
            <label className={s.form__sorting__text}>Sorting by</label>
            <Field className={s.form__sorting__field} name="sorting" as="select">
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
            </Field>
          </div>
        </div>
        <button className={s.form__button} type="submit">Submit</button>
      </Form>
    </Formik>
  );
}



export default Search;