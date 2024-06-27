import styled from 'styled-components'; // Importa a biblioteca styled-components para estilização

// Estiliza o contêiner principal do Dashboard
export const DashboardWrapper = styled.div`
  display: flex;
  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 18px 25px;
  @media (max-width: 991px) {
    flex-direction: column;
    padding-right: 20px;
  }
`;

// Estiliza a barra lateral (sidebar)
export const Sidebar = styled.aside`
  width: 16%;
  border-radius: 40px;
  background-color: #5867dd;
  color: #fff;
  padding: 22px 0 45px;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

// Estiliza o cabeçalho da sidebar
export const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 11px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
  padding: 0 21px;

  img {
    width: 33px;
  }

  h1 {
    font-family: Montserrat, sans-serif;
  }
`;

// Estiliza o botão de monitoramento na sidebar
export const MonitoringButton = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  border: none;
  border-radius: 15px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  background-color: #374bae;
  color: #fff;
  font-size: 18px;
  padding: 15px 21px;
  margin-bottom: 29px;
  cursor: pointer;

  img {
    width: 20px;
  }

  span {
    font-family: Nunito, sans-serif;
  }

  @media (max-width: 991px) {
    padding: 15px 20px;
  }
`;

// Estiliza o título das seções na sidebar
export const SectionTitle = styled.h2`
  text-transform: uppercase;
  font: 700 16px Nunito, sans-serif;
  margin: 0 0 25px 24px;

  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

// Estiliza os itens do menu na sidebar
export const MenuItem = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 18px;
  padding: 10px 24px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 991px) {
    padding-left: 10px;
  }
`;

// Estiliza o ícone dos itens do menu
export const MenuIcon = styled.img`
  width: 40px;
  height: 40px;
  background-color: #374bae;
  border-radius: 50%;
`;

// Estiliza o conteúdo principal do Dashboard
export const MainContent = styled.main`
  width: 84%;
  padding-left: 20px;
  display: flex;
  @media (max-width: 991px) {
    width: 100%;
    padding-left: 0;
    margin-top: 40px;
  }
`;

// Estiliza o conteúdo dentro do MainContent
export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  width: 82%;
  padding: 30px 50px;
`;

// Estiliza o cabeçalho do conteúdo principal
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 49px;

  h2 {
    font: 700 24px Nunito, sans-serif;
  }

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

// Estiliza as informações do usuário no cabeçalho
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;

  p {
    font-family: Nunito, sans-serif;
  }

  img {
    width: 36px;
    height: 36px;
  }
`;

// Estiliza o grid de estatísticas
export const StatsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

// Estiliza os cartões de estatísticas individuais
export const StatCard = styled.article`
  display: flex;
  justify-content: space-between;
  border-radius: 40px;
  box-shadow: 0 20px 150px rgba(0, 0, 0, 0.08);
  border: 1px solid #eee;
  background-color: #fff;
  padding: 29px 30px;
  width: 19vw;

  @media (max-width: 991px) {
    margin-top: 30px;
    padding-left: 20px;
  }
`;

// Estiliza a informação dentro dos cartões de estatísticas
export const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

// Estiliza a contagem das estatísticas
export const StatCount = styled.span`
  color: #5867dd;
  font: 50px/80% Nunito, sans-serif;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

// Estiliza o rótulo das estatísticas
export const StatLabel = styled.h3`
  margin-top: 12px;
  font: 30px/113% Nunito, sans-serif;
`;

// Estiliza a descrição das estatísticas
export const StatDescription = styled.p`
  margin-top: 12px;
  font: 400 20px Nunito, sans-serif;
`;

// Estiliza o ícone das estatísticas
export const StatIcon = styled.img`
  width: 192px;
  position: relative;
  right: 40%;
  max-width: 100%;
`;

// Estiliza o grid das estatísticas de tarefas
export const TaskStatsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

// Reutiliza o estilo dos cartões de estatísticas para os cartões de tarefas
export const TaskStatCard = styled(StatCard)``;

// Reutiliza o estilo da informação das estatísticas para as informações das tarefas
export const TaskStatInfo = styled(StatInfo)``;

// Reutiliza o estilo da contagem das estatísticas para a contagem das tarefas
export const TaskStatCount = styled(StatCount)``;

// Reutiliza o estilo do rótulo das estatísticas para o rótulo das tarefas
export const TaskStatLabel = styled(StatLabel)``;

// Reutiliza o estilo da descrição das estatísticas para a descrição das tarefas
export const TaskStatDescription = styled(StatDescription)``;

// Reutiliza o estilo do ícone das estatísticas para o ícone das tarefas
export const TaskStatIcon = styled(StatIcon)``;

// Estiliza o rodapé do Dashboard
export const Footer = styled.footer`
  color: #999;
  text-align: right;
  font: 700 13px Nunito, sans-serif;
  margin-top: 531px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;
