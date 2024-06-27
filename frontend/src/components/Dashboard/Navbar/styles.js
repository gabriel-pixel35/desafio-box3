import { Link } from "react-router-dom"; // Importa o componente Link do react-router-dom
import styled from "styled-components"; // Importa a biblioteca styled-components

// Estiliza o componente aside para representar a barra lateral
export const Sidebar = styled.aside`
  width: 16%; // Define a largura da barra lateral
  @media (max-width: 991px) {
    width: 100%; // Ajusta a largura para 100% em telas menores que 991px
  }
`;

// Estiliza o conteúdo da barra lateral
export const SidebarContent = styled.nav`
  border-radius: 40px;
  background-color: #5867dd; // Define a cor de fundo
  display: flex;
  flex-direction: column;
  width: 230px; // Define a largura do conteúdo da barra lateral
  color: #fff; // Define a cor do texto
  margin: 5px auto 0; // Define as margens
  padding: 22px 0 45px; // Define o preenchimento
  padding-bottom: 0px; // Sobrescreve o preenchimento inferior

  @media (max-width: 991px) {
    margin-top: 40px; // Ajusta a margem superior em telas menores que 991px
  }
`;

// Estiliza o cabeçalho da barra lateral
export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 11px; // Define o espaçamento entre os itens
  padding: 0 27px;
  margin-bottom: 30px;

  img {
    width: 33px; // Define a largura da imagem
  }

  h1 {
    font-family: Montserrat, sans-serif; // Define a fonte
    font-size: 16px; // Define o tamanho da fonte
    font-weight: 700; // Define o peso da fonte
  }
`;

// Estiliza as seções da barra lateral
export const SidebarSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 27px;

  img {
    width: 20px; // Define a largura da imagem
  }

  span {
    font-family: Nunito, sans-serif; // Define a fonte
    font-size: 18px; // Define o tamanho da fonte
  }
`;

// Estiliza os títulos das seções da barra lateral
export const SidebarSectionTitle = styled.h2`
  font-family: Nunito, sans-serif; // Define a fonte
  font-size: 16px; // Define o tamanho da fonte
  font-weight: 700; // Define o peso da fonte
  text-transform: uppercase; // Transforma o texto em maiúsculas
  padding: 0 27px;
`;

// Estiliza os itens da barra lateral
export const SidebarItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 5px 27px;
  margin-bottom: 10px;
  text-decoration: none; // Remove a decoração do texto
  color: #ffffff; // Define a cor do texto
  cursor: pointer; // Define o cursor como pointer

  img {
    width: 40px; // Define a largura da imagem
    height: 40px; // Define a altura da imagem
    border-radius: 50%; // Define a borda da imagem como redonda
    background-color: #374bae; // Define a cor de fundo da imagem
  }

  span {
    font-family: Nunito, sans-serif; // Define a fonte
    font-size: 18px; // Define o tamanho da fonte
    transition: font-size 0.3s ease; // Define a transição para o tamanho da fonte
  }

  &:hover,
  &:focus {
    border-radius: 15px; // Define a borda arredondada
    box-shadow: 0 20px 50px 20 rgba(0, 0, 0, 0.2); // Define a sombra da caixa
    background-color: #374bae; // Define a cor de fundo ao passar o mouse

    span {
      font-size: 16px; // Define o tamanho da fonte ao passar o mouse
      border-radius: 15px; // Define a borda arredondada
      box-shadow: 0 20px 50px 20 rgba(0, 0, 0, 0.2); // Define a sombra da caixa
      background-color: #374bae; // Define a cor de fundo
    }
  }

  ${(props) =>
    props.active &&
    `
    border-radius: 15px;
    box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.2);
    background-color: #374bae;
  `}
`;

// Estiliza o item de logout da barra lateral
export const SidebarLogout = styled(SidebarItem)`
  margin-top: 200px;
  width: 220px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-left: 5px;

  span {
    font-weight: 700; // Define o peso da fonte
    text-transform: uppercase; // Transforma o texto em maiúsculas
  }
`;
