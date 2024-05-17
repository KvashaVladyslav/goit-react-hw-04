
import { useEffect, useState } from "react";
import { getArticles } from "../../api-data";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMore from "../LoadMore/LoadMore";


export default function App() {

    const [articles, setArticles] = useState([]);
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const [page, setPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState("")

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


    return (
        <div>
            <SearchBar onSubmit={handleSearch} />
            {loader && <Loader />}
            {error && <ErrorMessage />}
            {articles.length > 0 && <ImageGallery items={articles} />}
            {articles.length > 0 && !loader && <LoadMore loadMore={handleLoadMore} />}
        </div>
    )
}