
import { useEffect, useState } from "react";
import { getArticles } from "../../api-data";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import css from "./App.module.css"



export default function App() {

    const [articles, setArticles] = useState([]);
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const [page, setPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState("")
    const [modalWindow, setModalWindow] = useState(false)
    const [targetPhoto, setTargetPhoto] = useState({alt: "", url: ""})

    useEffect(() => {
        if (searchQuery.trim() === "") {
            return
        } 

        async function fetchArticles() {
        try {
            setLoader(true)
            setError(false)
            const fetchedArticles = await getArticles(searchQuery, page)
            setArticles((articles) => [...articles, ...fetchedArticles])
        } catch {
                setArticles([])
                setError(true)
        } finally {
                setLoader(false)
        }
            }
        fetchArticles()

    }, [searchQuery, page])

    const handleSearch = async (query) => {
        setSearchQuery(query)
        setPage(1)
        setArticles([])
    }

    const handleLoadMore = async () => {
        setPage(page + 1)
        
    }

    const handleOpenModal = (alt, url) => {
        setTargetPhoto({alt, url})
        setModalWindow(true)
    }

    const handleCloseModal = () => {
        setModalWindow(false)
        setTargetPhoto({alt: "", url: ""})
    }

    return (
        <div className={css.container}>
            <SearchBar onSubmit={handleSearch} />
            {error && <ErrorMessage />}
            {articles.length > 0 && <ImageGallery items={articles} openModal={handleOpenModal} />}
            {loader && <Loader />}
            {articles.length > 0 &&  !loader && <LoadMoreBtn loadMore={handleLoadMore} />}
            <ImageModal isModalOpen={modalWindow} closeModal={handleCloseModal} targetPhoto={targetPhoto} />
        </div>
    )
}