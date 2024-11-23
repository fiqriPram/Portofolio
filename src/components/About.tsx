const About = () => {
  return (
    <section id="about" className="py-50 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I&apos;m a passionate student exploring the world of web development, both frontend and backend.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With a strong curiosity about how the internet works, I started my journey in this field to understand and create comprehensive solutions. Currently, I&apos;m learning to build responsive and functional websites with seamless user experiences while also deepening my backend skills to develop efficient and reliable applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Although I&apos;m still at the beginning of my journey, I&apos;m committed to continuously learning and crafting creative and elegant solutions to web-based challenges.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Frontend Development</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Specializing in modern frontend technologies and frameworks to build responsive and interactive web applications.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Problem Solving</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Passionate about solving complex problems and creating efficient, scalable solutions.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Continuous Learning</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Always eager to learn new technologies and stay updated with the latest web development trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
