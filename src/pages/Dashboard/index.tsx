/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useUserStore } from "../../hooks";
import {
  MoviesServices,
  useService,
} from "../../services";
import * as S from "./styles";

export function Dashboard() {
  const user = useUserStore(
    (state) => state.user
  );
  const { callRequest, data, loading } =
    useService(MoviesServices.getPopularMovies());

  if (loading) {
    <div>Carregando...</div>;
  }

  useEffect(() => {
    callRequest();
  }, []);

  const handleDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  return (
    <S.Dashboard>
      <S.Header>Bem-vindo(a) {user.name}</S.Header>
      <S.Title>Filmes populares</S.Title>
      <S.MovieList>
        {data &&
          data.results.map((movie, id) => (
            <S.MovieContainer key={id}>
              <div>
                <h3>{movie.title}</h3>
                <p>{movie.original_title}</p>
                <p>{handleDate(movie.release_date)}</p>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
            </S.MovieContainer>
          ))}
      </S.MovieList>
    </S.Dashboard>
  );
}
