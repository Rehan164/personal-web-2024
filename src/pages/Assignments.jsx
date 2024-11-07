import React from 'react'
import NavBar from '../components/NavBar'
import RCard from "../components/r-card.jsx";

export const Assignments = () => {
  return (
    <div className="assignment-page">
        <NavBar />

        <div className="assignment-content">
            <h1>My Assignments for CS CAS 506</h1>
            <RCard
                title="Midterm"
                body="I created a predictor model that predicted Amazon movie star ratings from a large training dataset."
                link="https://github.com/Rehan164/rdsam-midterm"
            />
            <RCard
                title="Assignment 0: GIT Instructions"
                body="In this assignment I have written a python script that adds two numbers together and prints their sum to the command line."
                link="https://github.com/Rehan164/rdsam-assignment-0"
            />
            <RCard
                title="Assignment 1: Data Collection and Analysis"
                body="In this assignment, I calculated and compared the average distances from the CDS elevator waiting positions, one naive and one optimized, so that I can determine the most efficient location for minimizing walking distance at CDS."
                link="https://github.com/Rehan164/rdsam-assignment-1"
            />
            <RCard
                title="Assignment 2: KMeans Clustering Visualization Webpage"
                body="I developed an interactive web application showcasing the KMeans clustering algorithm with multiple initialization methods. This project enables users to examine how different initialization strategies influence clustering results."
                link="https://github.com/Rehan164/rdsam-assignment-2"
                video="/hw2-recording.mp4"
            />
            <RCard
                title="Assignment 3: SVD Algorithm"
                body="In this assignment I implemented the SVD algorithm from scratch to perform dimensionality reduction, analyzing the impact of dimensionality on classifier performance. Visualized results to compare accuracy and computational efficiency, demonstrating the trade-off between model complexity and performance."
                link="https://github.com/Rehan164/rdsam-assignment-3"
            />
            <RCard
                title="Assignment 4: Latent Semantic Analysis (LSA) Search Engine Webpage"
                body="I built a Latent Semantic Analysis (LSA) search engine within a Python web application. This engine processes user queries, applies LSA to a set of sklearn documents, and returns the most relevant results using cosine similarity."
                link="https://github.com/Rehan164/rdsam-assignment-4"
                video="/hw4-recording.mp4"
            />
            <RCard
                title="Assignment 5: KNN Comp"
                body="In this assignment, I built a K-Nearest Neighbors (KNN) model from scratch to predict customer churn for a bank. By preprocessing the data, implementing and optimizing KNN, and participating in a mini Kaggle competition, I identified customers who were likely to leave the bank based on historical data."
                link="https://github.com/Rehan164/rdsam-assignment-5"
            />
            <RCard
                title="Assignment 6: Linear Regression"
                link="https://github.com/Rehan164/rdsam-assignment-6"
                video="/hw6-recording.mp4"
            />
        </div>
    </div>
  )
}
