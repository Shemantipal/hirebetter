import React from 'react';

function TestimonialSection() {
    const testimonials = [
    { id: 1, text: "HireBetter revolutionized my job search. Knowing my rank for each application helped me focus on improving my skills where it mattered most.", author: "Michael Rodriguez, HR Manager" },
        { id: 2, text: "I love using this every day.", author: "Alex Chen, Software Engineer" },
        { id: 3, text: "As a recent graduate, I was lost in the job market. HireBetter's transparency gave me the insights I needed to land my dream job." , author: "Emily Johnson" },
        { id: 4, text: "I've been hiring for years, and HireBetter has made our recruitment process more efficient and fair. Candidates appreciate the openness.", author: "Emily Nguyen, Data Analyst" },
        { id: 5, text: "The app's ranking system motivated me to tailor my applications better. I secured a position much faster than I expected!" , author: "David Thompson, Sales Representative" },
        { id: 6, text: "As a career coach, I recommend HireBetter to all my clients. It provides invaluable feedback for improvement.", author: "Lisa Johnson, Career Development Specialist" },
        { id: 3, text: "HireBetter's transparency eliminated the anxiety of waiting for responses. It's a game-changer for job seekers and employers alike.", author: "Omar Al-Farsi, Project Manager" },
        // Add more testimonials as needed
    ];

    return (
        <div className="overflow-hidden py-12">
            <div className="flex space-x-4 animate-scroll">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="min-w-[300px] border-dashed border-2 border-green-700 bg-slate-900 p-6 drop-shadow-xl rounded-lg  shadow-lg shadow-green-800"
                    >
                        <p className="text-sm font-mono text-green-100">{testimonial.text}</p>
                        <p className="mt-2 text-sm text-green-500">- {testimonial.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TestimonialSection;
