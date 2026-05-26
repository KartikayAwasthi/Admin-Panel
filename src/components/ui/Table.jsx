const Table = ({ headers, rows, onRowClick }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-6 py-4 text-left text-sm font-semibold text-gray-900"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              onClick={() => onRowClick?.(row)}
              className="border-b border-gray-200 hover:bg-gray-50 transition cursor-pointer"
            >
              {row.map((cell, j) => (
                <td key={j} className="px-6 py-4 text-sm text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
