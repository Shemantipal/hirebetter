
import { TypographyH1, TypographyP } from '@/components/ui/typography';
import { ProjectCard } from '@/components/user/project-card';
import React, { useState } from 'react';

function PublicProjects() {

    // layer we fetch all the data from the backend db :)
    const projects = Array(16).fill({}).map((_, index) => ({
        id: index + 1,
        title: `Project ${index + 1}`,
        developer: `Developer ${index + 1}`,
        description: "A brief description of the project goes here. It showcases the main features and technologies used.",
        tags: ["React", "Node.js", "MongoDB"],
        imageUrl: `https://picsum.photos/seed/${index + 1}/300/200`
    }));


    return (
        <div className="min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <TypographyH1
                        className="dark:text-blue-100 mb-2"
                    >
                        Developer Showcase💜
                    </TypographyH1>
                    <TypographyP className="text-gray-500 font-mono">
                        Hand-picked projects from the cutting edge of tech. Curated by experts, built by visionaries.
                    </TypographyP>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            image={project.imageUrl}
                            href="#"
                            dates="2021-2022"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PublicProjects;
