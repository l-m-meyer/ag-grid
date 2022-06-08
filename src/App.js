import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS

const App = () => {

  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

  // Each Column Definition results in one Column
  const [columnDefs, setColumnDefs] = useState([
    { field: 'make', filter: true },
    { field: 'model', filter: true },
    { field: 'price' }
  ]);

  // DefaultColDef sets props common to all Columns
  const DefaultColDef = useMemo(() => ({
    sortable: true
  }));

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event) => {
    console.log('cellClicked', event);
  }, []);

  // Example of load data from server
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then((res) => res.json())
      .then((rowData) => setRowData(rowData))
  }, [])
}