import { AllCommunityModule } from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import { useState } from "react";

// AG Grid styles
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function UserData() {
  const [rowData] = useState([
    { name: "Santoh", age: 25 },
    { name: "Sanju", age: 23 },
    { name: "Sampu", age: 21 },
  ]);
  const [columnDefs] = useState([
    { field: "name", sortable: true },
    { field: "age", sortable: true, filter: true },
    {
      headerName: "Action",
      field: "name",
      cellRenderer: (params) => (
        <button onClick={() => alert(params.value)}>View</button>
      ),
    },
  ]);
  const [serchText, setSearchText] = useState("");
  return (
    <>
      <AgGridProvider modules={[AllCommunityModule]}>
        <div style={{ width: 500, margin: "20px auto" }}>
          <input
            type="text"
            placeholder="Search.."
            value={serchText}
            onChange={(e) => setSearchText(e.targrt.value)}
          />
          <div className="ag-theme-alpine" style={{ height: 300, width: 500 }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              pagination={true}
              paginationPageSize={2}
            />
          </div>
        </div>
      </AgGridProvider>
    </>
  );
}
export default UserData;
