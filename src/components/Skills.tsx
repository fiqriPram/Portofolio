const Skills = () => {
  const skills = {
    frontend: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 60 },
      { name: "Go/Golang", level: 60 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 70 },
    ],
    tools: [
      { name: "Git", level: 80 },
      { name: "VS Code", level: 85 },
    ],
  };

  return (
    <section id="skills" className="py-50 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Frontend Development</h3>
            <div className="space-y-4">
              {skills.frontend.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Tools & Software</h3>
            <div className="space-y-4">
              {skills.tools.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
