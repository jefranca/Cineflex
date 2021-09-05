export default function MovieFooter({title, posterURL}){
    return(
        <footer>
            <div>
            <img src={posterURL} alt={title} />
            <h3>{title}</h3>
            </div>
        </footer>
    )
}