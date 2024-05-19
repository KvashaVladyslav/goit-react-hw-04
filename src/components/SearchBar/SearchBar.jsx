import { Formik, Form, Field } from "formik"
import toast, { Toaster } from "react-hot-toast"
import { ImWondering } from "react-icons/im";
import css from "./SearchBar.module.css"
import { FcSearch } from "react-icons/fc";

export default function SearchBar({ onSubmit }) {

    const notifyEmpty = () => toast("Please, enter something on the searching field", {icon: <ImWondering />})
    
    const initialValues = {query: ""}

    return (
        <Formik initialValues={initialValues} onSubmit={(values, actions) => {
            if (values.query.trim() === "") {
                notifyEmpty()
            } else {
                onSubmit(values.query)
            }
            actions.resetForm()
        }}> 
            <header className={css.container}>
                <Form className={css.form}>
                    <Field
                    className={css.input}
                    type="text"
                    name="query"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                    <button className={css.button} type="submit"><FcSearch /></button>
                    <Toaster toastOptions={{style: {background: "yellow", color: "black"}}}/>
              </Form>
            </header>
        </Formik>
    )
}