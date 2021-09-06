export default function SessionFooter({title, posterURL, weekday, time}){
    return(
        <footer>
            <button><img src={posterURL} alt={title} /></button>
                <div>
                    <h3>{title}</h3>
                    <span>{weekday} {time}</span>
                </div>
        </footer>
    )
}