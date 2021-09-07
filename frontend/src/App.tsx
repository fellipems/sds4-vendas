import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";

function App() {
  return ( // no retorno da função(que é o componente do react), só podemos ter um elemento. por isso declaramos um fragment(<> </>)
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">DS Vendas</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App; // export é o que vai ficar visível para os outros arquivos
