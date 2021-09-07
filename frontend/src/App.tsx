import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

function App() {
  return ( // no retorno da função(que é o componente do react), só podemos ter um elemento. por isso declaramos um fragment(<> </>)
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso de vendas fechadas em visitas (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Total de vendas</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas as vendas</h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App; // export é o que vai ficar visível para os outros arquivos
