'use client';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  homepage: string;
}

const Projects = () => {
  const projects = [
    {
      name: "Portfolio",
      description: "My personal portfolio website built with Next.js and Tailwind CSS",
      html_url: "https://github.com/fiqriPram/Portofolio",
      topics: ["nextjs", "tailwindcss", "typescript"],
      homepage: ""
    },
    // Add more hardcoded projects here
  ];

  return (
    <section id="projects" className="py-50 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Repository, index: number) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description || 'No description available'}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.html_url}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code →
                  </a>
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
