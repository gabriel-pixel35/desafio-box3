import React from "react"; // Importa o React

import Logowhite from "/src/assets/logowhite.png"; // Importa a imagem Logowhite

// Importa os componentes estilizados do arquivo de estilos
import {
	MainContent,
	Header,
	UserInfo,
	StatsGrid,
	StatCard,
	StatInfo,
	StatCount,
	StatLabel,
	StatDescription,
	StatIcon,
	TaskStatsGrid,
	TaskStatCard,
	TaskStatInfo,
	TaskStatCount,
	TaskStatLabel,
	TaskStatDescription,
	TaskStatIcon,
	Footer,
  Conteudo,
} from "./style";
import { Navbar } from "../../components/Dashboard/Navbar"; // Importa o componente Navbar

import Perfil from "/src/assets/perfil.png"; // Importa a imagem Perfil
import Seta from "/src/assets/seta.png"; // Importa a imagem Seta

import CardTarefas from "/src/assets/cardtarefas.png"; // Importa a imagem CardTarefas
import CardFinalizados from "/src/assets/cardfinalizados.png"; // Importa a imagem CardFinalizados
import CardAndamento from "/src/assets/cardandamento.png"; // Importa a imagem CardAndamento

import CardFuncinarios from "/src/assets/cardfuncionarios.png"; // Importa a imagem CardFuncinarios
import CardCargos from "/src/assets/cardcargos.png"; // Importa a imagem CardCargos
import CardClients from "/src/assets/cardclient.png"; // Importa a imagem CardClients
import CardUsuarios from "/src/assets/cardusuarios.png"; // Importa a imagem CardUsuarios

// Define o componente Dashboard
export const Dashboard = () => {
	// Dados estatísticos
	const statsData = [
		{
			count: 31,
			label: "Usuários",
			description: "Total de usuário cadastrados",
			icon: CardUsuarios,
		},
		{
			count: 22,
			label: "Clientes",
			description: "Total de clientes cadastrados",
			icon: CardClients,
		},
		{
			count: 7,
			label: "Cargos",
			description: "Total de cargos cadastrados",
			icon: CardCargos,
		},
		{
			count: 9,
			label: "Funcionários",
			description: "Total de funcionários cadastrados",
			icon: CardFuncinarios,
		},
	];

	// Dados estatísticos das tarefas
	const taskStats = [
		{
			count: 18,
			label: "Tarefas",
			description: "Lista de tarefas requisitadas",
			icon: CardTarefas,
		},
		{
			count: 11,
			label: "Tarefas finalizadas",
			description: "Lista de tarefas finalizadas",
			icon: CardFinalizados,
		},
		{
			count: 7,
			label: "Tarefas em andamento",
			description: "Lista de tarefas em andamento",
			icon: CardAndamento,
		},
	];

	return (
		<MainContent>
      <Navbar /> {/* Renderiza o componente Navbar */}
			<Conteudo>
				<Header>
					<h2>Monitoramento</h2> {/* Título da seção */}
					<UserInfo>
						<p>
							Bem vindo, <strong>Arthur</strong> {/* Mensagem de boas-vindas */}
						</p>
						<img
							src={ Perfil }
							alt="Notification"
						/>
						<img
							src={ Seta }
							alt="User"
						/>
					</UserInfo>
				</Header>
				<StatsGrid>
					{statsData.map((stat, index) => (
						<StatCard key={index}>
							<StatInfo>
								<StatCount>{stat.count}</StatCount> {/* Exibe a contagem */}
								<StatLabel>{stat.label}</StatLabel> {/* Exibe o rótulo */}
								<StatDescription>{stat.description}</StatDescription> {/* Exibe a descrição */}
							</StatInfo>
							<StatIcon src={stat.icon} alt={stat.label} /> {/* Exibe o ícone */}
						</StatCard>
					))}
				</StatsGrid>
				<TaskStatsGrid>
					{taskStats.map((task, index) => (
						<TaskStatCard key={index}>
							<TaskStatInfo>
								<TaskStatCount>{task.count}</TaskStatCount> {/* Exibe a contagem */}
								<TaskStatLabel>{task.label}</TaskStatLabel> {/* Exibe o rótulo */}
								<TaskStatDescription>{task.description}</TaskStatDescription> {/* Exibe a descrição */}
							</TaskStatInfo>
							<TaskStatIcon src={task.icon} alt={task.label} /> {/* Exibe o ícone */}
						</TaskStatCard>
					))}
				</TaskStatsGrid>
				<Footer>© 2023 TeaQIP • All rights reserved</Footer> {/* Rodapé */}
			</Conteudo>
		</MainContent>
	);
};
