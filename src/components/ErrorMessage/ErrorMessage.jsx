import { ImWondering } from "react-icons/im";
import css from "./ErrorMessage.module.css"

export default function ErrorMessage() {
    return (
        <div>
            <p className={css.paragraph}><ImWondering />Ooops, something went wrong, please, reload the page</p>
        </div>
    )
}