// src/components/AddArtwork.js
import React, { useState } from 'react';
import './AddArtwork.css'; // Asigură-te că importi fișierul CSS
import { addPortfolioItem, getPortfolioItems, deletePortfolioItem, updatePortfolioItem } from '../services/portfolioService';

const AddArtwork = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [clientSiteUrl, setClientSiteUrl] = useState('');
    const [status, setStatus] = useState('visible');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Logica pentru a salva lucrarea (exemplu: apel API)
        try {
            const newArtwork = { title, description, imageUrl, clientSiteUrl, status };
            console.log('Artwork added:', newArtwork);

            // Aici poți adăuga apelul către API pentru a salva lucrarea
             addPortfolioItem(newArtwork); // Un exemplu de apel

            // Resetare câmpuri după trimitere
            setTitle('');
            setDescription('');
            setImageUrl('');
            setClientSiteUrl('');
            setStatus('visible');
            alert('Artwork added successfully!');
        } catch (error) {
            console.error('Error adding artwork:', error);
            alert('Failed to add artwork. Please try again.');
        }
    };

    return (
        <div className="add-artwork-container">
            <h2>Add New Artwork</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input 
                        type="text" 
                        id="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea 
                        id="description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input 
                        type="text" 
                        id="imageUrl" 
                        value={imageUrl} 
                        onChange={(e) => setImageUrl(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="clientSiteUrl">Client Site URL:</label>
                    <input 
                        type="text" 
                        id="clientSiteUrl" 
                        value={clientSiteUrl} 
                        onChange={(e) => setClientSiteUrl(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="status">Status:</label>
                    <select 
                        id="status" 
                        value={status} 
                        onChange={(e) => setStatus(e.target.value)} 
                        required
                    >
                        <option value="visible">Visible</option>
                        <option value="hidden">Hidden</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddArtwork;
