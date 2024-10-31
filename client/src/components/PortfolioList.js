// src/components/PortfolioList.js
import React, { useEffect, useState } from 'react';
import { getPortfolioItems, deletePortfolioItem, updatePortfolioItem } from '../services/portfolioService';
import './PortfolioList.css';

const PortfolioList = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [editedItem, setEditedItem] = useState({ title: '', description: '', imageUrl: '', clientSiteUrl: '', status: 'visible' });

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      const items = await getPortfolioItems();
      setPortfolioItems(items);
    };
    fetchPortfolioItems();
  }, []);

  const handleDelete = async (id) => {
    await deletePortfolioItem(id);
    setPortfolioItems(portfolioItems.filter(item => item._id !== id));
  };

  const handleEdit = (item) => {
    setEditedItem(item);
    setIsEditing(true);
    setEditItemId(item._id);
  };

  const handleUpdate = async () => {
    await updatePortfolioItem(editItemId, editedItem);
    setPortfolioItems(portfolioItems.map(item => (item._id === editItemId ? editedItem : item)));
    resetForm();
  };

  const resetForm = () => {
    setEditedItem({ title: '', description: '', imageUrl: '', clientSiteUrl: '', status: 'visible' });
    setIsEditing(false);
    setEditItemId(null);
  };

  return (
    <div className="portfolio-container">
      
      {/* Lista de items */}
      <ul>
        {portfolioItems.map(item => (
          <li key={item._id} className="portfolio-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <img src={item.imageUrl} alt={item.title} />
            <a href={item.clientSiteUrl} target="_blank" rel="noopener noreferrer">Client Site</a>
            <div className="portfolio-buttons">
              <button className="button button-edit" onClick={() => handleEdit(item)}>Edit</button>
              <button className="button button-delete" onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioList;
