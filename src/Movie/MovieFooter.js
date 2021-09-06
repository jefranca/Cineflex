export default function MovieFooter({title, posterURL}){
    return(
        <footer>
            <button><img src={posterURL} alt={title} /></button>
            <h3>{title}</h3>
        </footer>
    )
}