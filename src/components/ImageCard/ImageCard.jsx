import { FaRegUser } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import css from "./ImageCard.module.css"

export default function ImageCard({ item: { urls: { small, regular}, alt_description, likes, user: {name} }, openModal }) {

    return (
        <div className={css.container} >
            <img onClick={() => openModal(alt_description, regular)} className={css.image} src={small} alt={alt_description} />
            <ul className={css.list}>
                <li className={css.item}><FaRegUser />{name}</li>
                <li className={css.item}><FcLike />{likes}</li>
            </ul>
        </div>
    )
}