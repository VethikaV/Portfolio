import React from 'react';
import './CSS/project.css';

const project = () => {
  return (
    <section className="project section" id="project">
      <div className="project__container">
        <h2 className="project__title">MY PROJECT</h2>
        <div className="project__grid">
          <div className="project__card">
            <h3>House-price-prediction</h3>
            <p>House Price Prediction 🏠💰 Description: This repository contains a machine learning project 
              aimed at predicting house prices based on various features such as location, size, number of rooms,
               and more. By leveraging regression algorithms, this project provides a practical solution for estimating 
               real estate prices.

Features:

Data Preprocessing: Cleaning and transforming raw data into a usable format.
 Exploratory Data Analysis (EDA): Insights and visualizations to understand trends and correlations. Modeling: Implementation of machine learning algorithms (e.g., Linear Regression, Decision Trees, Random Forests). Evaluation: Assessing model performance using metrics like RMSE, MAE, and R². Prediction: Predicting house prices for new or unseen data. Technologies Used:

Python: Core programming language for the project. Libraries: Pandas and NumPy: 
Data manipulation and analysis. Matplotlib and Seaborn: Visualization. Scikit-learn: Machine learning algorithms and model evaluation.</p>
            <a href="https://github.com/VethikaV/House-Price-Prediction.git" target="_blank" rel="noopener noreferrer" className="project__link">View on GitHub</a>
          </div>

          <div className="project__card">
            <h3>Poem_generator_RAG</h3>
            <p>Poem Generator RAG
            Poem Generator RAG is an advanced AI-powered system designed to generate creative 
            and meaningful poetry using Retrieval-Augmented Generation (RAG). By leveraging a combination of
             machine learning models and knowledge retrieval, 
            it enhances the quality of generated poems by incorporating relevant contextual information</p>
            <a href="https://github.com/VethikaV/Poem_generator_RAG.git" target="_blank" rel="noopener noreferrer" className="project__link">View on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default project;
