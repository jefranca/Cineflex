import MovieMain from "./MovieMain";
import MovieFooter from "./MovieFooter";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../services/api.services";
export default function Movie() {
  let [sessions, setSessions] = useState(undefined);
  const { idMovie } = useParams();

  useEffect(() => {
    getMovie(idMovie).then((response) => {
      setSessions(response.data);
    });
  }, [idMovie]);

  return (
    <>
      {sessions ? (
        <div>
          <MovieMain days={sessions.days} idMovie={idMovie} />
          <MovieFooter title={sessions.title} posterURL={sessions.posterURL} />
        </div>
      ) : (
        <div>
          <h1> Carregando</h1>
        </div>
      )}
    </>
  );
}
