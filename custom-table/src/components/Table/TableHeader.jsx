import React from 'react';
import FilterInput from './FilterInput';

const TableHeader = ({ columns, sortConfig, setSortConfig, setFilters }) => {
    const handleSort = (key) => {
        setSortConfig((prev) => {
            if (prev.key === key && prev.direction === 'asc') {
                return { key, direction: 'desc' };
            } else if (prev.key === key && prev.direction === 'desc') {
                return { key: null, direction: null };
            }
            return { key, direction: 'asc' };
        });
    };

    return (
        <thead>
            <tr>
                {columns.map((col) => (
                    <th key={col.key}>
                        <div onClick={() => col.sortable && handleSort(col.key)}>
                            {col.title}
                            {sortConfig.key === col.key && (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽')}
                        </div>
                        {col.filterable && (
                            <FilterInput columnKey={col.key} setFilters={setFilters} />
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
