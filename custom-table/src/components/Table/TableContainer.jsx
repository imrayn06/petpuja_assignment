import React, { useState } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Pagination from './Pagination';
import './Table.module.css';

const TableContainer = ({ data, columns, rowsPerPage = 5 }) => {
    const [filters, setFilters] = useState({});
    const [sortConfig, setSortConfig] = useState({});
    const [currentPage, setCurrentPage] = useState(1);

    const applyFilters = (data) => {
        return data.filter((row) => {
            return Object.keys(filters).every((key) => {
                if (!filters[key]) return true;
                return row[key].toString().toLowerCase().includes(filters[key].toLowerCase());
            });
        });
    };

    const applySorting = (data) => {
        if (!sortConfig.key) return data;
        const sortedData = [...data].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
            if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
        return sortedData;
    };

    const getPaginatedData = (data) => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        return data.slice(startIndex, endIndex);
    };

    const filteredData = applyFilters(data);
    const sortedData = applySorting(filteredData);
    const paginatedData = getPaginatedData(sortedData);

    return (
        <div className="table-container">
            <table>
                <TableHeader
                    columns={columns}
                    sortConfig={sortConfig}
                    setSortConfig={setSortConfig}
                    setFilters={setFilters}
                />
                <TableBody data={paginatedData} columns={columns} />
            </table>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredData.length / rowsPerPage)}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default TableContainer;
