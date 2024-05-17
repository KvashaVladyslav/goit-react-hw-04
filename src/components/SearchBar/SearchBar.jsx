import { Formik, Form, Field } from "formik"
import toast, { Toaster } from "react-hot-toast"
import { ImWondering } from "react-icons/im";

export default function SearchBar({ onSubmit }) {

    const notify = () => toast("Search some object first", {icon: <ImWondering />})
    
    
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
            <header>
              <Form>
                <Field
                    type="text"
                    name="query"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                    <button type="submit">Search</button>
                    <Toaster toastOptions={{style: {background: "", color: ""}}}/>
              </Form>
            </header>
        </Formik>
    )
}