// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import SortableHeader from '../components/SortableHeader';
import '../styles/dashboard.css';

const Dashboard = () => {
  const [comments, setComments] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);

  useEffect(() => {
    let data = [...comments];

    if (search) {
      const q = search.toLowerCase();
      data = data.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.email.toLowerCase().includes(q)
      );
    }

    if (sortBy && sortOrder) {
      data.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    }

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setDisplayed(data.slice(start, end));
  }, [comments, search, sortBy, sortOrder, currentPage, pageSize]);

  const totalPages = Math.ceil(comments.length / pageSize);

  function setSortState(column, order) {
    setSortBy(order ? column : null);
    setSortOrder(order);
  }

  return (
    <div className="dashboard-container">
      <div className="flex items-center my-3">
        <SearchBar searchQuery={search} onSearch={setSearch} />
        <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
          <option value={10}>10</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>

      <table className="table">
        <thead>
          <tr>
            <SortableHeader column="postId" sortBy={sortBy} sortOrder={sortOrder} onSort={setSortState} />
            <SortableHeader column="name" sortBy={sortBy} sortOrder={sortOrder} onSort={setSortState} />
            <SortableHeader column="email" sortBy={sortBy} sortOrder={sortOrder} onSort={setSortState} />
          </tr>
        </thead>
        <tbody>
          {displayed.map((c, idx) => (
            <tr
              key={idx}
              onClick={() => navigate('/profile', { state: c })}
              className="clickable-row"
            >
              <td>{c.postId}</td>
              <td>{c.name}</td>
              <td>{c.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Dashboard;
