import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  const [filmes, setFilmes] = useState([]); //começamos com um array vazio e a hora que fizermos a requisição lá na API, vai jogar dentro do nosso state filmes.

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("r-api/?api=filmes");
      //console.log(response.data);
      setFilmes(response.data);
    }

    loadFilmes();
  }, []);

  return (
    <div className="container">
      <div className="listafilmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt={filme.nome} />
              <Link to="/">Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
