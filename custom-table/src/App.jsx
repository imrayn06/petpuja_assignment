import React from 'react';
import TableContainer from './components/Table/TableContainer';
import { sampleData } from './data/sampleData';

const columns = [
    { key: 'id', title: 'ID', sortable: true, filterable: true },
    { key: 'name', title: 'Name', sortable: true, filterable: true },
    { key: 'age', title: 'Age', sortable: true, filterable: false },
    { key: 'salary', title: 'Salary', sortable: true, filterable: false },
];

const App = () => {
    return (
        <div>
            <h1>Table</h1>
            <TableContainer data={sampleData} columns={columns} />
        </div>
    );
};

export default App;
