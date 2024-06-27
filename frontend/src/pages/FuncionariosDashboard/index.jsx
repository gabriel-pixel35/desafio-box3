import React, { useState, useRef } from "react";
import { Navbar } from "../../components/Dashboard/Navbar";
import { Toolbar } from "primereact/toolbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import styled from "styled-components";

import {
  MainContent,
  Conteudo,
  Header,
  UserInfo,
  ActionButton,
  ActionBar,
  TableHeader,
  TableHeaderCell,
  ContentWrapper,
  Footer,
} from "./style";

import Perfil from "/src/assets/perfil.png";
import Seta from "/src/assets/seta.png";
import Plus from "/src/assets/plus.png";
import Filtro from "/src/assets/filtro.png";

const initialProducts = [
  {
    id: 1,
    code: "P1001",
    name: "Product 1",
    price: 10.99,
    category: "Category A",
    rating: 4.5,
    inventoryStatus: "In Stock",
  },
  {
    id: 2,
    code: "P1002",
    name: "Product 2",
    price: 15.99,
    category: "Category B",
    rating: 3.8,
    inventoryStatus: "Low Stock",
  },
  // Adicione mais produtos conforme necessário
];

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
    if (props.status === "In Stock") return "#28a745";
    if (props.status === "Low Stock") return "#ffc107";
    if (props.status === "Out of Stock") return "#dc3545";
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

export const Funcionarios = () => {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [globalFilter, setGlobalFilter] = useState("");
  const [visible, setVisible] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const dt = useRef(null);

  const addUser = () => {
    const newUser = {
      id: products.length + 1,
      code: `P100${products.length + 1}`,
      name: `New User ${products.length + 1}`,
      price: 0,
      category: "New Category",
      rating: 0,
      inventoryStatus: "In Stock",
    };
    setProducts([...products, newUser]);
  };

  const leftToolbarTemplate = () => (
    <ActionBar>
      <ActionButton>
        <img src={Filtro} alt="Filter Icon" />
        <span>Filtros</span>
      </ActionButton>
    </ActionBar>
  );

  const rightToolbarTemplate = () => (
    <ActionButton primary onClick={addUser}>
      <img src={Plus} alt="Add User Icon" />
      <span>Adicionar usuário</span>
    </ActionButton>
  );

  const ratingBodyTemplate = (rowData) => `${rowData.rating} Stars`;

  const statusBodyTemplate = (rowData) => (
    <StatusBadge status={rowData.inventoryStatus}>
      {rowData.inventoryStatus}
    </StatusBadge>
  );

  const openEditModal = (product) => {
    setProductToEdit(product);
    setVisible(true);
  };

  const actionBodyTemplate = (rowData) => (
    <ActionBar>
      <button
        className="p-button p-button-primary"
        onClick={() => openEditModal(rowData)}
      >
        Edit
      </button>
      <button
        className="p-button p-button-danger"
        onClick={() => deleteProduct(rowData.id)}
      >
        Delete
      </button>
    </ActionBar>
  );

  const header = (
    <TableHeader>
      <TableHeaderCell>Lista de Funcionarios</TableHeaderCell>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <SearchInput
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </TableHeader>
  );

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    setSelectedProducts(null); // Limpa a seleção após excluir
  };

  return (
    <MainContent>
      <Navbar />
      <Conteudo>
        <Header>
          <h2>Funcionarios</h2>
          <UserInfo>
            <span>
              Bem vindo, <strong>Arthur</strong>
            </span>
            <img src={Perfil} alt="User Avatar" />
            <img src={Seta} alt="Notification Icon" />
          </UserInfo>
        </Header>
        <ContentWrapper>
          <Toolbar
            className="mb-4"
            left={leftToolbarTemplate}
            right={rightToolbarTemplate}
          />
          <Table
            ref={dt}
            value={products}
            selection={selectedProducts}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="id"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            globalFilter={globalFilter}
            header={header}
          >
            <Column selectionMode="multiple" exportable={false} />
            <Column
              field="code"
              header="Code"
              sortable
              style={{ minWidth: "12rem", padding: "20px 10px" }}
            />
            <Column
              field="name"
              header="Name"
              sortable
              style={{ minWidth: "16rem" }}
            />
            <Column
              field="category"
              header="Category"
              sortable
              style={{ minWidth: "10rem" }}
            />
            <Column
              field="rating"
              header="Reviews"
              body={ratingBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            />
            <Column
              field="inventoryStatus"
              header="Status"
              body={statusBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            />
            <Column
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "12rem" }}
            />
          </Table>
        </ContentWrapper>
        <Footer>
          <span>© 2023 TeaQIP • All rights reserved</span>
        </Footer>

        <Dialog
          visible={visible}
          modal
          onHide={() => setVisible(false)}
          header="Edit Product"
          style={{ width: "50vw" }}
        >
          <div style={{ padding: "20px" }}>
            <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>
              Editing: {productToEdit ? productToEdit.name : ""}
            </h4>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={productToEdit ? productToEdit.name : ""}
              onChange={(e) =>
                setProductToEdit({ ...productToEdit, name: e.target.value })
              }
              className="p-inputtext p-component"
              style={{ width: "100%", marginBottom: "1rem", padding: "10px" }}
            />
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              value={productToEdit ? productToEdit.category : ""}
              onChange={(e) =>
                setProductToEdit({ ...productToEdit, category: e.target.value })
              }
              className="p-inputtext p-component"
              style={{ width: "100%", marginBottom: "1rem", padding: "10px" }}
            />
            <label htmlFor="inventoryStatus">Status:</label>
            <input
              type="text"
              id="inventoryStatus"
              value={productToEdit ? productToEdit.inventoryStatus : ""}
              onChange={(e) =>
                setProductToEdit({
                  ...productToEdit,
                  inventoryStatus: e.target.value,
                })
              }
              className="p-inputtext p-component"
              style={{ width: "100%", marginBottom: "1rem", padding: "10px" }}
            />
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <button
                className="p-button p-button-primary"
                onClick={() => setVisible(false)}
                style={{ marginRight: "1rem", padding: "10px 20px" }}
              >
                Save
              </button>
              <button
                className="p-button p-button-secondary"
                onClick={() => setVisible(false)}
                style={{ padding: "10px 20px" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </Dialog>
      </Conteudo>
    </MainContent>
  );
};
