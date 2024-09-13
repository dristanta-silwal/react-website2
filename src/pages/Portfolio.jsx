import React from 'react';

import "./Portfolio.css"

const Portfolio = () => {
    const projects = [
        {
            title: 'Job Tracker',
            description: 'A web application to manage and track job applications.',
            image: 'job-tracker.png',  // Replace with actual image path
            link: 'https://github.com/dristanta-silwal/job-tracker'
        },
        {
            title: 'Interactive Public Health Dashboard',
            description: 'A tool for visualizing public health data interactively.',
            image: 'public-health-dashboard.png',  // Replace with actual image path
            link: 'https://github.com/dristanta-silwal/public-health-dashboard'
        },
        {
            title: 'Personal Portfolio',
            description: 'This portfolio website showcasing my work.',
            image: 'portfolio.png',  // Replace with actual image path
            link: 'https://dristantasilwal.com.np'
        }
    ];

    return (
        <>
            <section className="header">
                <h1>Welcome to My Portfolio</h1>
                <p>Explore my projects below.</p>
            </section>

            <section className="projects">
                <h2>My Projects</h2>
                <div className="project-cards">
                    {projects.map((project, index) => (
                        <div key={index} className="card">
                            <img src={project.image} alt={project.title} className="card-image"/>
                            <div className="card-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
}

export default Portfolio;