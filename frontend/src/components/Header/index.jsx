import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cabecalho, UserInfo } from "./style"; // Importe os componentes estilizados necessários
import Perfil from "/src/assets/perfil.png";
import Seta from "/src/assets/seta.png";
import { getUserId } from "../../services/api-users"; // Importe a função para buscar usuário por ID

export const Header = () => {
  const { id } = useParams(); // Obtém o ID da URL
  const [userName, setUserName] = useState(""); // Estado para armazenar o nome do usuário

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await getUserId(id); // Chama a função da API para buscar usuário por ID
        const { nome } = response.data; // Obtém o nome do usuário da resposta da API
        setUserName(nome); // Atualiza o estado com o nome do usuário
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    }

    fetchUser(); // Chama a função para buscar o usuário ao carregar o componente
  }, [id]); // Executa novamente a busca se o ID mudar

  return (
    <Cabecalho>
      <h2>Funcionários</h2>
      <UserInfo>
        <span>
          Bem-vindo, <strong>{userName}</strong>
        </span>
        <img src={Perfil} alt="Avatar do Usuário" />
        <img src={Seta} alt="Ícone de Notificação" />
      </UserInfo>
    </Cabecalho>
  );
};
