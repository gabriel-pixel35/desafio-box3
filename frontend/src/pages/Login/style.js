import styled from "styled-components";

// Estilização do componente PageWrapper
export const PageWrapper = styled.div`
  display: flex;
  height: 100vh; /* Define a altura para ocupar toda a altura da viewport */
  margin: auto; /* Centraliza o conteúdo na tela */
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  background-color: #fff; /* Define a cor de fundo */
  flex-direction: column; /* Organiza os filhos em coluna */
`;

// Estilização do componente ContentContainer
export const ContentContainer = styled.main`
  width: 100%; /* Ocupa toda a largura disponível */
  display: flex; /* Exibe os elementos em linha por padrão */
  @media (max-width: 991px) {
    flex-direction: column; /* Altera para coluna em telas menores */
    align-items: stretch; /* Estica os itens na largura máxima */
    gap: 0; /* Remove o espaço entre os itens */
  }
`;

// Estilização do componente ImageColumn
export const ImageColumn = styled.section`
  display: flex; /* Exibe os filhos em linha por padrão */
  flex-direction: column; /* Organiza os filhos em coluna */
  width: 50vw; /* Largura de 50% da viewport */
  @media (max-width: 991px) {
    width: 100%; /* Ocupa toda a largura em telas menores */
  }
`;

// Estilização do componente ImageWrapper
export const ImageWrapper = styled.div`
  border-radius: 0 500px 500px 0; /* Borda arredondada específica */
  border: 1px solid rgba(88, 103, 221, 1); /* Cor e espessura da borda */
  width: 53vw; /* Largura de 53% da viewport */
  border-left: none; /* Remove a borda à esquerda */
  background-color: #f7f7f7; /* Cor de fundo */
  display: flex; /* Exibe os filhos em linha por padrão */
  align-items: center; /* Alinha os itens verticalmente */
  justify-content: center; /* Alinha os itens horizontalmente */
  padding: 150px 20px; /* Espaçamento interno */
  @media (max-width: 991px) {
    padding: 10px 20px; /* Ajuste de padding em telas menores */
  }
`;

// Estilização da imagem da marca
export const BrandImage = styled.img`
  aspect-ratio: 1; /* Proporção da imagem */
  position: relative; /* Posicionamento relativo */
  left: 50px; /* Deslocamento à esquerda */
  object-fit: contain; /* Ajuste para conteúdo dentro do contêiner */
  width: 50%; /* Largura da imagem */
  max-width: 100%; /* Largura máxima */
  @media (max-width: 991px) {
    margin: 40px 0; /* Margem superior e inferior em telas menores */
  }
`;

// Estilização do componente LoginColumn
export const LoginColumn = styled.section`
  display: flex; /* Exibe os filhos em linha por padrão */
  flex-direction: column; /* Organiza os filhos em coluna */
  width: 50%; /* Largura de 50% da viewport */
  color: #5867dd; /* Cor do texto */
  font-weight: 400; /* Peso da fonte */
  padding: 0px 0 25px; /* Espaçamento interno */
  @media (max-width: 991px) {
    width: 100%; /* Ocupa toda a largura em telas menores */
  }
`;

// Estilização do formulário de login
export const LoginForm = styled.form`
  display: flex; /* Exibe os filhos em linha por padrão */
  position: relative; /* Posicionamento relativo */
  justify-content: center; /* Centraliza horizontalmente */
  text-align: center; /* Alinha o texto ao centro */
  align-items: center; /* Alinha os itens verticalmente */
  top: 20%; /* Posicionamento superior */
  left: 180px; /* Posicionamento à esquerda */
  width: 400px; /* Largura do formulário */
  gap: 10px; /* Espaçamento entre os filhos */
  max-width: 100%; /* Largura máxima */
  flex-direction: column; /* Organiza os filhos em coluna */
  padding: 20px 0; /* Espaçamento interno */
  @media (max-width: 991px) {
    margin-top: 40px; /* Margem superior em telas menores */
    padding: 0 20px; /* Ajuste de padding em telas menores */
  }
`;

// Estilização do cabeçalho do formulário
export const FormHeader = styled.header`
  text-align: center; /* Alinha o texto ao centro */
`;

// Estilização do contêiner do logo
export const LogoWrapper = styled.div`
  display: flex; /* Exibe os filhos em linha por padrão */
  gap: 16px; /* Espaçamento entre os filhos */
  font-size: 18px; /* Tamanho da fonte */
  color: #000; /* Cor do texto */
  font-weight: 700; /* Peso da fonte */
  align-items: center; /* Alinha os itens verticalmente */
  justify-content: center; /* Centraliza horizontalmente */
`;

// Estilização do logo
export const Logo = styled.img`
  aspect-ratio: 1.1; /* Proporção do logo */
  object-fit: contain; /* Ajuste para conteúdo dentro do contêiner */
  width: 37px; /* Largura do logo */
`;

// Estilização do texto do logo
export const LogoText = styled.h1`
  font-family: Montserrat, sans-serif; /* Família da fonte */
  padding: 20px 0; /* Espaçamento interno */
`;

// Estilização do texto de boas-vindas
export const WelcomeText = styled.h2`
  color: #000; /* Cor do texto */
  font: 700 18px Nunito, sans-serif; /* Estilo da fonte */
  padding: 10px 0; /* Espaçamento interno */
  @media (max-width: 991px) {
    margin-top: 30px; /* Margem superior em telas menores */
  }
`;

// Estilização do texto secundário
export const SubText = styled.p`
  color: #777; /* Cor do texto */
  font: 15px Nunito, sans-serif; /* Estilo da fonte */
  padding: 10px 0; /* Espaçamento interno */
`;

// Estilização do ícone do campo de entrada
export const InputIcon = styled.img`
  width: 18px; /* Largura do ícone */
  position: relative; /* Posicionamento relativo */
  z-index: 300; /* Z-index para sobreposição */
  top: 47px; /* Posicionamento superior */
  object-fit: contain; /* Ajuste para conteúdo dentro do contêiner */
`;

// Estilização do campo de entrada de texto
export const TextInput = styled.input`
  display: flex; /* Exibe os filhos em linha por padrão */
  border-radius: 50px; /* Borda arredondada */
  border: 1px solid rgba(88, 103, 221, 1); /* Cor e espessura da borda */
  background-color: #fff; /* Cor de fundo */
  margin-left: 0px; /* Margem à esquerda */
  width: 20vw; /* Largura relativa */
  gap: 30px; /* Espaçamento entre os filhos */
  padding: 15px 45px 20px 40px; /* Espaçamento interno */
  padding-top: 20px; /* Espaçamento superior */
  font-size: 16px; /* Tamanho da fonte */
  box-shadow: none; /* Sem sombra */
  outline: none; /* Sem contorno ao focar */
  &:focus-within {
    border-color: solid 2px #5867dd; /* Cor da borda ao focar */
    box-shadow: 0 0 10px rgba(71, 86, 195, 0.5); /* Sombra ao focar */
  }
`;

// Estilização do ícone de senha
export const PasswordIcon = styled.i`
  position: absolute; /* Posicionamento absoluto */
  right: 77%; /* Posicionamento à direita */
  top: 59%; /* Posicionamento superior */
  transform: translateY(-50%); /* Translação vertical */
  font-size: 1.3rem; /* Tamanho da fonte */
  color: #5867dd; /* Cor do ícone */
`;

// Estilização do ícone de usuário
export const UserIcon = styled.i`
  position: absolute; /* Posicionamento absoluto */
  left: 18%; /* Posicionamento à esquerda */
  top: 45%; /* Posicionamento superior */
  transform: translateY(-50%); /* Translação vertical */
  font-size: 1.3rem; /* Tamanho da fonte */
  color: #5867dd; /* Cor do ícone */
`;

// Estilização do contêiner de lembrar-me
export const RememberMe = styled.div`
  display: flex; /* Exibe os filhos em linha por padrão */
  align-items: center; /* Alinha os itens verticalmente */
  padding-right: 200px; /* Espaçamento à direita */
  gap: 8px; /* Espaçamento entre os filhos */
  margin: 5px 0; /* Margem superior e inferior */
`;

// Estilização do checkbox
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 16px; /* Largura */
  height: 16px; /* Altura */
`;

// Estilização do texto de lembrar-me
export const RememberText = styled.label`
  color: #000; /* Cor do texto */
  font: 14px Nunito, sans-serif; /* Estilo da fonte */
`;

// Estilização do botão de login
export const LoginButton = styled.button`
  display: flex; /* Exibe os filhos em linha por padrão */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Alinha os itens verticalmente */
  background-color: #5867dd; /* Cor de fundo do botão */
  color: #fff; /* Cor do texto */
  font-size: 16px; /* Tamanho da fonte */
  font-weight: 700; /* Peso da fonte */
  text-align: center; /* Alinhamento do texto */
  border: none; /* Sem borda */
  border-radius: 50px; /* Borda arredondada */
  padding: 15px 100px; /* Espaçamento interno */
  margin: 10px 0; /* Margem superior e inferior */
  cursor: pointer; /* Cursor do mouse */
  transition: background-color 0.3s; /* Transição suave de cor de fundo */
  &:hover {
    background-color: #4756c3; /* Cor de fundo ao passar o mouse */
  }
`;

// Estilização do link de esqueceu a senha
export const ForgotPassword = styled.a`
  display: flex; /* Exibe os filhos em linha por padrão */
  align-items: center; /* Alinha os itens verticalmente */
  justify-content: center; /* Centraliza horizontalmente */
  gap: 8px; /* Espaçamento entre os filhos */
  text-decoration: none; /* Sem decoração de texto */
  color: #5867dd; /* Cor do texto */
  font: 14px Nunito, sans-serif; /* Estilo da fonte */
`;

// Estilização do ícone de esqueceu a senha
export const ForgotIcon = styled.img`
  width: 14px; /* Largura do ícone */
`;

// Estilização do texto de esqueceu a senha
export const ForgotText = styled.span`
  font: 14px Nunito, sans-serif; /* Estilo da fonte */
`;

// Estilização do rodapé
export const Footer = styled.footer`
  display: flex; /* Exibe os filhos em linha por padrão */
  justify-content: space-between; /* Espaçamento entre os filhos */
  align-items: center; /* Alinha os itens verticalmente */
  padding: 20px 0; /* Espaçamento interno */
  position: relative; /* Posicionamento relativo */
  top: 30%; /* Posicionamento superior */
  @media (max-width: 991px) {
    flex-direction: column; /* Organiza os filhos em coluna em telas menores */
    gap: 10px; /* Espaçamento entre os filhos */
  }
`;

// Estilização do texto de direitos autorais
export const Copyright = styled.span`
  font-size: 16px; /* Tamanho da fonte */
  color: #777; /* Cor do texto */
  .highlight {
    color: #5867dd; /* Cor do texto destacado */
  }
`;

// Estilização dos links do rodapé
export const FooterLinks = styled.div`
  display: flex; /* Exibe os filhos em linha por padrão */
  position: relative; /* Posicionamento relativo */
  right: 20px; /* Posicionamento à direita */
  gap: 20px; /* Espaçamento entre os filhos */
`;

// Estilização do link do rodapé
export const FooterLink = styled.a`
  text-decoration: none; /* Sem decoração de texto */
  color: #5867dd; /* Cor do texto */
  font-size: 16px; /* Tamanho da fonte */
  &:hover {
    text-decoration: underline; /* Sublinhado ao passar o mouse */
  }
`;
