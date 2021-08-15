import { useEffect, useState } from "react";
import "./filme-info.css";
import { useParams, useHistory } from "react-router-dom";
import api from "../../services/api";

export default function Filme() {
  const { id } = useParams();
  const history = useHistory(); //Para navegação interativa

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get(`r-api/?api=filmes/${id}`);
      //console.log(response.data);

      if (response.data.length === 0) {
        //Tentou acessar com um ID que não existe, navego ele para a home

        history.replace("/");
        return;
      }
      setFilmes(response.data);
      setLoading(false);
    }

    loadFilmes();

    return () => {
      console.log("Componente Desmontado");
    };
  }, [history, id]);

  function salvaFilme() {
    // alert("Teste"); Apenas p/ testar se está onClick

    const minhaLista = localStorage.getItem("filmes");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    //Se tiver algum filme salvo com esse ID precisa ignorar

    //some --> função (método) do  js que vai percorrer todo o array de filmes salvos e vai verificar se existe pelo menos algum com o parâmetro que nós vamos passar. Devolve um boolean.

    const hasfilmes = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filmes.id
    );

    if (hasfilmes) {
      alert("Você já possui esse filme salvo");
      return; // p/ parar a execução do código aqui
    }

    filmesSalvos.push(filmes);
    localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
    alert("Filme salvo com sucesso");
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando seu filme...</h1>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filmes.nome}</h1>
      <img src={filmes.foto} alt={filmes.nome} />

      <h3>Sinopse</h3>
      {filmes.sinopse}

      <div className="botoes">
        <button onClick={salvaFilme}>Salvar</button>
        <button>
          <a
            target="blank"
            href={`https://youtube.com/results?search_query=${filmes.nome} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}
