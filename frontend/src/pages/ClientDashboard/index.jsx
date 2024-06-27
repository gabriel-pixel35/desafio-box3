import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "../../components/Dashboard/Navbar";
import { Toolbar } from "primereact/toolbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import styled from "styled-components";
import axios from "axios";

import {
  MainContent,
  Conteudo,
  ActionButton,
  ActionBar,
  TableHeader,
  TableHeaderCell,
  ContentWrapper,
  Footer,
} from "./style";

import Plus from "/src/assets/plus.png";
import Filtro from "/src/assets/filtro.png";

import { getUsers, createUser, updateUser, deleteUser } from "../../services/api-users";
import { Header } from "../../components/Header";

const Table = styled(DataTable)`
  margin-top: 2rem;
  width: 100%;

  .p-dropdown {
    appearance: none;
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 14px;
    background-color: #fff;
  }
`;

const StatusBadge = styled.span`
  background-color: ${(props) => {
    if (props.status === "Ativo") return "#28a745";
    if (props.status === "Inativo") return "#dc3545";
    return "#6c757d";
  }};
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

const SearchInput = styled.input`
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 5px 10px;
`;

export const TableDashboard = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [selectedUsuario, setSelectedUsuario] = useState(null);
  const [globalFilter, setGlobalFilter] = useState("");
  const [visible, setVisible] = useState(false);
  const [usuarioToEdit, setUsuarioToEdit] = useState(null);
  const dt = useRef(null);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await getUsers();
      setUsuarios(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  const addUsuario = () => {
    const newUsuario = {
      nome: `Novo Usuário ${usuarios.length + 1}`,
      email: "",
      cpf: "",
      telefone: "",
      categoria: "Nova Categoria",
      status: true,
      senha: "", // Inicializa a senha vazia
    };
    setUsuarioToEdit(newUsuario);
    setVisible(true);
  };

  const leftToolbarTemplate = () => (
    <ActionBar>
      <ActionButton>
        <img src={Filtro} alt="Ícone de Filtro" />
        <span>Filtros</span>
      </ActionButton>
    </ActionBar>
  );

  const rightToolbarTemplate = () => (
    <ActionButton primary onClick={addUsuario}>
      <img src={Plus} alt="Ícone de Adicionar Usuário" />
      <span>Adicionar usuário</span>
    </ActionButton>
  );

  const statusBodyTemplate = (rowData) => (
    <StatusBadge status={rowData.status ? "Ativo" : "Inativo"}>
      {rowData.status ? "Ativo" : "Inativo"}
    </StatusBadge>
  );

  const openEditModal = (usuario) => {
    setUsuarioToEdit(usuario);
    setVisible(true);
  };

  const saveUsuario = () => {
    if (usuarioToEdit.id) {
      // Editar usuário existente
      updateUser(usuarioToEdit.id, usuarioToEdit)
        .then(() => {
          const updatedUsuarios = usuarios.map((u) =>
            u.id === usuarioToEdit.id ? usuarioToEdit : u
          );
          setUsuarios(updatedUsuarios);
        })
        .catch((error) => {
          console.error("Erro ao atualizar usuário:", error);
        });
    } else {
      // Adicionar novo usuário
      createUser(usuarioToEdit)
        .then((response) => {
          setUsuarios([...usuarios, response.data]);
        })
        .catch((error) => {
          console.error("Erro ao adicionar usuário:", error);
        });
    }
    setVisible(false);
  };

  const deleteUsuario = (usuarioId) => {
    deleteUser(usuarioId)
      .then(() => {
        const updatedUsuarios = usuarios.filter((u) => u.id !== usuarioId);
        setUsuarios(updatedUsuarios);
        setSelectedUsuario(null); // Limpa a seleção após excluir
      })
      .catch((error) => {
        console.error("Erro ao excluir usuário:", error);
      });
  };

  const header = (
    <TableHeader>
      <TableHeaderCell>Lista de Usuários</TableHeaderCell>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <SearchInput
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Buscar..."
        />
      </span>
    </TableHeader>
  );

  return (
    <MainContent>
      <Navbar />
      <Conteudo>
        <Header/>
        <ContentWrapper>
          <Toolbar
            className="mb-4"
            left={leftToolbarTemplate}
            right={rightToolbarTemplate}
          />
          <Table
            ref={dt}
            value={usuarios}
            selection={selectedUsuario}
            onSelectionChange={(e) => setSelectedUsuario(e.value)}
            dataKey="id"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Exibindo {first} a {last} de {totalRecords} usuários"
            globalFilter={globalFilter}
            header={header}
          >
            <Column selectionMode="multiple" exportable={false} />
            <Column
              field="nome"
              header="Nome"
              sortable
              style={{ minWidth: "12rem", padding: "20px 10px" }}
            />
            <Column
              field="email"
              header="Email"
              sortable
              style={{ minWidth: "16rem" }}
            />
            <Column
              field="cpf"
              header="CPF"
              sortable
              style={{ minWidth: "10rem" }}
            />
            <Column
              field="telefone"
              header="Telefone"
              sortable
              style={{ minWidth: "12rem" }}
            />
            <Column
              field="categoria"
              header="Categoria"
              sortable
              style={{ minWidth: "12rem" }}
            />
            <Column
              field="status"
              header="Status"
              body={statusBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            />
            <Column
              body={(rowData) => (
                <ActionBar>
                  <button
                    className="p-button p-button-primary"
                    onClick={() => openEditModal(rowData)}
                  >
                    Editar
                  </button>
                  <button
                    className="p-button p-button-danger"
                    onClick={() => deleteUsuario(rowData.id)}
                  >
                    Excluir
                  </button>
                </ActionBar>
              )}
              exportable={false}
              style={{ minWidth: "12rem" }}
            />
          </Table>
        </ContentWrapper>
        <Footer>
          <span>© 2023 TeaQIP • Todos os direitos reservados</span>
        </Footer>

        <Dialog
          visible={visible}
          modal
          onHide={() => setVisible(false)}
          header={usuarioToEdit ? `Editar Usuário ${usuarioToEdit.nome}` : "Adicionar Usuário"}
          style={{ width: "50vw" }}
        >
          <div style={{ padding: "20px" }}>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={usuarioToEdit ? usuarioToEdit.nome : ""}
              onChange={(e) =>
                setUsuarioToEdit({ ...usuarioToEdit, nome: e.target.value })
              }
              className="p-inputtext p-component"
              style={{ width: "100%", marginBottom: "1rem", padding: "10px" }}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={usuarioToEdit ? usuarioToEdit.email : ""}
              onChange={(e) =>
                setUsuarioToEdit({ ...usuarioToEdit, email: e.target.value })
              }
              className="p-inputtext p-component"
              style={{ width: "100%", marginBottom: "1rem", padding: "10px" }}
            />
            <label htmlFor="cpf">CPF:</label>
            <input
              type="text"
              id              ="cpf"
              value={usuarioToEdit ? usuarioToEdit.cpf : ""}
              onChange={(e) =>
                setUsuarioToEdit({ ...usuarioToEdit, cpf: e.target.value })
              }
              className="p-inputtext p-component"
              style={{ width: "100%", marginBottom: "1rem", padding: "10px" }}
            />
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="text"
              id="telefone"
              value={usuarioToEdit ? usuarioToEdit.telefone : ""}
              onChange={(e) =>
                setUsuarioToEdit({ ...usuarioToEdit, telefone: e.target.value })
              }
              className="p-inputtext p-component"
              style={{ width: "100%", marginBottom: "1rem", padding: "10px" }}
            />
            <label htmlFor="categoria">Categoria:</label>
            <input
              type="text"
              id="categoria"
              value={usuarioToEdit ? usuarioToEdit.categoria : ""}
              onChange={(e) =>
                setUsuarioToEdit({ ...usuarioToEdit, categoria: e.target.value })
              }
              className="p-inputtext p-component"
              style={{ width: "100%", marginBottom: "1rem", padding: "10px" }}
            />
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={usuarioToEdit ? usuarioToEdit.senha : ""}
              onChange={(e) =>
                setUsuarioToEdit({ ...usuarioToEdit, senha: e.target.value })
              }
              className="p-inputtext p-component"
              style={{ width: "100%", marginBottom: "1rem", padding: "10px" }}
            />
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              value={usuarioToEdit ? (usuarioToEdit.status ? "Ativo" : "Inativo") : ""}
              onChange={(e) =>
                setUsuarioToEdit({ ...usuarioToEdit, status: e.target.value === "Ativo" })
              }
              className="p-dropdown"
              style={{ width: "100%", marginBottom: "1rem", padding: "10px" }}
            >
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
            </select>
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <button
                className="p-button p-button-primary"
                onClick={saveUsuario}
                style={{ marginRight: "1rem", padding: "10px 20px" }}
              >
                Salvar
              </button>
              <button
                className="p-button p-button-secondary"
                onClick={() => setVisible(false)}
                style={{ padding: "10px 20px" }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </Dialog>
      </Conteudo>
    </MainContent>
  );
};

