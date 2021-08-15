import { useEffect, useState } from "react";
import "./filme-info.css";
import { useParams } from "react-router-dom";
import api from "../../services/api";

export default function Filme() {
  const { id } = useParams();
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get(`r-api/?api=filmes/${id}`);
      //console.log(response.data);
      setFilmes(response.data);
      setLoading(false);
    }

    loadFilmes();
  }, [id]);

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando seu filme...</h1>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>Página Detalhes-{id}</h1>
    </div>
  );
}
