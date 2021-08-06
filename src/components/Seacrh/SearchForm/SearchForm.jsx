import { Formik, Form, Field } from 'formik';
import SearchItem from './SearchItem/SearchItem';

import s from './SearchForm.module.scss'

function Search(props) {
  let state = props.searchPage;

  let categoriElements = state.categori.map(d => <SearchItem name={d.name} key={d.id} />);
  let sortElement = state.sort.map(d => <SearchItem name={d.name} key={d.id} />);
  return (
    <Formik
      initialValues={{
        text: '',
        categori: 'all',
        sort: 'relevance',
      }}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
      }}>
      <Form className={s.form}>
        <Field className={s.form__input} name="text" />
        <div className={s.form__wrapper}>
          <div className={s.form__categori}>
            <label className={s.form__categori__text}>Categories</label>
            <Field className={s.form__categori__field} name="categori" as="select">
              {categoriElements}
            </Field>
          </div>
          <div className={s.form__sort}>
            <label className={s.form__sort__text}>Sorting by</label>
            <Field className={s.form__sort__field} name="sort" as="select">
              {sortElement}
            </Field>
          </div>
        </div>
        <button className={s.form__button} type="submit">Submit</button>
      </Form>
    </Formik>
  );
}



export default Search;