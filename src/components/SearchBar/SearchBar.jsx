import { Formik, Form, Field } from "formik"
import toast, { Toaster } from "react-hot-toast"
import { ImWondering } from "react-icons/im";
import css from "./SearchBar.module.css"
import { FcSearch } from "react-icons/fc";

export default function SearchBar({ onSubmit }) {

    const notify = () => toast("Please, enter something on the field", {icon: <ImWondering />})
    
    
    const initialValues = {query: ""}

    return (
        <Formik initialValues={initialValues} onSubmit={(values, actions) => {
            if (values.query.trim() === "") {
                notify()
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
                    <button className={css.button} type="submit"><FcSearch />Search</button>
                    <Toaster toastOptions={{style: {background: "", color: ""}}}/>
              </Form>
            </header>
        </Formik>
    )
}