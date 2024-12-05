import React from 'react';

const TableBody = ({ data, columns }) => {
    return (
        <tbody>
            {data.map((row, idx) => (
                <tr key={idx}>
                    {columns.map((col) => (
                        <td key={col.key}>{row[col.key]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
