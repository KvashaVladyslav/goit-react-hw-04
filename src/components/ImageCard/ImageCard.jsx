
export default function ImageCard({item: { urls:{small}, slug}}) {
    return (
        <div>
            <img src={small} alt={slug}/>
        </div>
    )
}