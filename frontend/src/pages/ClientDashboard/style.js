import styled from "styled-components";

// Conteúdo principal
export const MainContent = styled.div`
  display: flex;
`;

// Conteúdo geral
export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 82%;
  left: 150px;
`;

// Estiliza o contêiner que envolve o conteúdo
export const ContentWrapper = styled.div`
  flex: 1;
  padding: 1rem;
`;

// Rodapé
export const Footer = styled.footer`
  font-family: Nunito, sans-serif;
  font-size: 13px;
  color: #999;
  text-align: right;
  margin-top: 40px;
`;

// Cabeçalho
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 49px;
`;

// Título da página
export const PageTitle = styled.h1`
  font-family: Nunito, sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #000;
`;

// Informações do usuário
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

// Texto de boas-vindas
export const WelcomeText = styled.span`
  font-family: Nunito, sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin-top: -50%;
`;

// Avatar do usuário
export const UserAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

// Ícone de notificação
export const NotificationIcon = styled.img`
  width: 19px;
  height: 11px;
`;

// Barra de ações
export const ActionBar = styled.div`
  display: flex;
  padding: 10px;
`;

// Botão de ação
export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  border-radius: 20px;
  background-color: ${props => props.primary ? "#5867dd" : "#fff"};
  color: ${props => props.primary ? "#fff" : "#000"};
  border: ${props => props.primary ? "none" : "1px solid #5867dd"};
  cursor: pointer;
`;

// Ícone de ação
export const ActionIcon = styled.img`
  width: 19px;
  height: 19px;
`;

// Texto de ação
export const ActionText = styled.span`
  font-family: Inter, sans-serif;
  font-size: 13px;
  font-weight: 500;
`;

// Seção da tabela
export const TableSection = styled.section`
  border-radius: 40px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #eaecf0;
  background-color: #fff;
`;

// Cabeçalho da tabela
export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Células do cabeçalho da tabela
export const TableHeaderCell = styled.h5`
  margin: 0;
`;

// Tabela
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

// Corpo da tabela
export const TableBody = styled.tbody`
  /* Estilo do corpo da tabela */
`;

// Linha da tabela
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9fafb;
  }
`;

// Célula da tabela
export const TableCell = styled.td`
  font-family: Inter, sans-serif;
  font-size: 13px;
  font-weight: ${props => props.bold ? "500" : "400"};
  color: ${props => props.bold ? "#101828" : "#667085"};
  padding: 12px 23px;
  border-bottom: 1px solid #eaecf0;
`;

// Ícone de ordenação
export const SortIcon = styled.img`
  width: 15px;
  height: 16px;
  margin-left: 4px;
`;

// Paginação da tabela
export const TablePagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: #fff;
  border-top: 1px solid #eaecf0;
`;

// Informações de paginação
export const PaginationInfo = styled.span`
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #5867dd;
`;

// Controles de paginação
export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #5867dd;
`;

// Seleção
export const Select = styled.select`
  border-radius: 6px;
  border: 1px solid rgba(70, 79, 96, 0.24);
  background-color: #f7f9fc;
  padding: 2px 4px;
  font-family: Inter, sans-serif;
  font-size: 12px;
  color: #5867dd;
`;

// Distintivo de status
export const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 6px;
  border-radius: 15.386px;
  background-color: ${props => props.status === "Ativo" ? "#ecfdf3" : "#f2f4f7"};
  color: ${props => props.status === "Ativo" ? "#037847" : "#364254"};
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 500;
`;

// Ícone de status
export const StatusIcon = styled.img`
  width: 8px;
  height: 7px;
`;