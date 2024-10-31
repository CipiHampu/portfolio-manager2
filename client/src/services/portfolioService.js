// src/services/portfolioService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/portfolio';  

export const getPortfolioItems = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addPortfolioItem = async (item) => {
    const response = await axios.post(API_URL, item);
    return response.data;
};

export const updatePortfolioItem = async (id, item) => {
    const response = await axios.put(`${API_URL}/${id}`, item);
    return response.data;
};

export const deletePortfolioItem = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
