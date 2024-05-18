import css from "./LoadMoreBtn.module.css"

export default function LoadMore({ loadMore }) {
    return (
        <button className={css.button} onClick={loadMore}>Load more</button>
    )
}