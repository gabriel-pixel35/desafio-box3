import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarSection,
  SidebarSectionTitle,
  SidebarItem,
  SidebarLogout,
} from "./styles"; // Importando componentes de estilo personalizados
import { useParams } from "react-router-dom"; // Importação do useParams

// Importando imagens
import imgMonitoramento from "../../../assets/monitoramento.png";
import imgUsuarios from "../../../assets/usuarios.png";
import imgClientes from "../../../assets/clientes.png";
import imgFuncionario from "../../../assets/funcionario.png";
import imgTarefas from "../../../assets/todastarefas.png";
import imgLogout from "../../../assets/logout.png";
import LogoWhite from "/src/assets/logowhite.png"; // Importando logo

export function Navbar() {
  const { id } = useParams(); // Obtendo o parâmetro da rota

  return (
    <Sidebar>
      <SidebarContent>
        {/* Cabeçalho do Sidebar com logo e título */}
        <SidebarHeader>
          <img
            src={LogoWhite}
            alt="Admin Panel Icon"
          />
          <h1>Painel Administrativo</h1>
        </SidebarHeader>

        {/* Seção de monitoramento */}
        <SidebarSection>
          <SidebarItem to={`/dashboard/${id}`}>
            <img src={imgMonitoramento} alt="Monitoring Icon" />
            <span>Monitoramentos</span>
          </SidebarItem>
        </SidebarSection>

        {/* Título da seção de pessoas */}
        <SidebarSectionTitle>Pessoas</SidebarSectionTitle>

        {/* Itens do Sidebar relacionados a pessoas */}
        <SidebarItem to={`/usuarios/${id}`}>
          <img src={imgUsuarios} alt="Users Icon" />
          <span>Usuários</span>
        </SidebarItem>
        <SidebarItem to={`/clientes/${id}`}>
          <img src={imgClientes} alt="Clients Icon" />
          <span>Clientes</span>
        </SidebarItem>
        <SidebarItem to={`/funcionarios/${id}`}>
          <img src={imgFuncionario} alt="Employees Icon" />
          <span>Funcionários</span>
        </SidebarItem>

        {/* Título da seção de tarefas */}
        <SidebarSectionTitle>Tarefas</SidebarSectionTitle>

        {/* Itens do Sidebar relacionados a tarefas */}
        <SidebarItem to={`/tarefas/${id}`}>
          <img src={imgTarefas} alt="All Tasks Icon" />
          <span>Todas</span>
        </SidebarItem>

        {/* Opção de logout */}
        <SidebarLogout to={'/'}>
          <img src={imgLogout} alt="Logout Icon" />
          <span>Sair</span>
        </SidebarLogout>
      </SidebarContent>
    </Sidebar>
  );
}
