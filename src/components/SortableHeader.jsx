import React from 'react';

const SortableHeader = ({ column, sortBy, sortOrder, onSort }) => {
  const nextOrder = () => {
    if (sortBy !== column) return 'asc';
    if (sortOrder === 'asc') return 'desc';
    if (sortOrder === 'desc') return null;
    return 'asc';
  };

  const handleClick = () => {
    const newOrder = nextOrder();
    onSort(column, newOrder);
  };

  return (
    <th className="cursor-pointer" onClick={handleClick}>
      {column.charAt(0).toUpperCase() + column.slice(1)}
      {sortBy === column && (
        <span>{sortOrder === 'asc' ? ' 🔼' : sortOrder === 'desc' ? ' 🔽' : ''}</span>
      )}
    </th>
  );
};

export default SortableHeader;
