"use client"; 
import React, { useState } from 'react';

function PublicProjects() {
    const projects = Array(16).fill().map((_, index) => ({
        id: index + 1,
        title: `Project ${index + 1}`,
        developer: `Developer ${index + 1}`,
        description: "A brief description of the project goes here. It showcases the main features and technologies used.",
        tags: ["React", "Node.js", "MongoDB"],
        imageUrl: `https://picsum.photos/seed/${index + 1}/300/200`
    }));
    const [likedProjects, setLikedProjects] = useState({});
    const toggleLike = (projectId) => {
        setLikedProjects((prev) => ({
            ...prev,
            [projectId]: !prev[projectId]
        }));
    };

    return (
        <div className="bg-green-200 dark:bg-slate-900 min-h-screen p-8">
            
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-extrabold text-black dark:text-blue-100 mb-2">Developer Showcase💜</h1>
                    <p className="text-xl text-gray-500 font-mono text-sm mb-8">Hand-picked projects from the cutting edge of tech. Curated by experts, built by visionaries.</p>
                    <button className="bg-black text-white font-mono px-6 py-2 rounded-sm border-2 border-green-500 hover:bg-gray-800 transition duration-300">
                        ➕ Submit Product
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-blue-300 dark:bg-black rounded-sm shadow-lg border border-purple-900 overflow-hidden transform transition duration-300 hover:scale-105 w-76 h-28 flex items-center">
                            <button 
                                onClick={() => toggleLike(project.id)} 
                                className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center focus:outline-none transition duration-300">
                                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={likedProjects[project.id] ? "currentColor" : "none"} stroke={likedProjects[project.id] ? "currentColor" : "gray"} 
                                    className="w-5 h-5 text-green-400">
                                    <path fillRule="evenodd" 
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                                        clipRule="evenodd"
                                        />
                                </svg>
                            </button>
                            <img src={project.imageUrl} alt={project.title} className="w-16 h-16 object-cover mr-4" />
                            <div className="flex-1 overflow-hidden">
                                <h2 className="text-md font-mono text-black dark:text-white truncate">{project.title}</h2>
                                <p className="text-xs text-blue-800 dark:text-blue-200 truncate">by {project.developer}</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    <h3 className="text-sm font-mono text-black dark:text-slate-400 truncate line-clamp-2">{project.description}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PublicProjects;
