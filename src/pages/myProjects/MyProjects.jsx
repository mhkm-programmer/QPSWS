import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import ImageWithAutoScroll from "../reusable/ImageWithAutoScroll";
import { Transition } from "react-transition-group";
import { useState } from "react";

const MyProjects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "P7ROBOTICS | MERN stack project",
      description:
        "P7ROBITICS is a yoga and meditation website that offers a diverse range of courses and tips. With a focus on enhancing well-being, the platform provides various types of classes and valuable guidance to support individuals in their yoga and meditation practices.",
      image: "https://i.ibb.co/Kh9FbPS/P7-Robotics-Home-min.png",
      keyFeatures: [
        "Users can see toys by category based on a tab bar.",

        "If users signed, they will add a new Toy.",
        "Smooth checkout and thripple secure system.",
      ],
      technologies: [
        "HTML5",
        "CSS",
        "Bootstrap",
        "Tailwind CSS",
        "React.js",
        "Node.js",
        "Backend frameworks (Express.js)",
        "Databases (NoSQL)",
      ],
      githubLink: "https://github.com/mhkm-programmer/P7Robotics-client-site",
      liveDemoLink: "https://toymarketplace-c4ff6.web.app/",
    },
    {
      id: 2,
      title: "Yoga & Dashboard | MERN stack project",
      description:
        "FitMindful is a yoga and meditation website offering courses, tips, and resources for well-being. Their platform caters to different levels of experience and provides valuable guidance on alignment, breathing techniques, mindfulness exercises, and integrating practices into daily life for holistic wellness.",
      image: "https://i.ibb.co/sWcGYWv/Fit-Mindful-Home-min.png",
      keyFeatures: [
        "Firebase authentication with social media login.",

        "A three-tier base dashboard like Student, Instructor, and Admin.",
        "Express JS APIs connected to MongoDB Stripe API.",
      ],
      technologies: [
        "HTML5",
        "CSS",
        "Bootstrap",
        "Tailwind CSS",
        "React.js",
        "Node.js",
        "Backend frameworks (Express.js)",
        "Databases (NoSQL)",
      ],
      githubLink: "https://github.com/mhkm-programmer/fitMindful-client-site",
      liveDemoLink: "https://summer-camp-client-side-7eb5b.web.app/",
    },
    {
      id: 3,
      title: "Recipies & Chefs | Forntend project",
      description:
        "FoodNetwork is a popular cooking website known for its extensive recipe collection from various cuisines. It organizes recipes by chef and ingredients, allowing users to explore different cooking styles. The platform also offers instructional videos, tips, and articles, serving as a comprehensive resource for home cooks and food enthusiasts.",
      image: "https://i.ibb.co/LCZgd6n/Food-Network-min.png",
      keyFeatures: [
        "Everyone shows the recipes when they are logged.",
        "Users can add recipe items and delete the added item.",
        "All chef's details are stored database and displayed by sort.",
      ],
      technologies: ["HTML5", "CSS", "Bootstrap", "Tailwind CSS", "React.js"],
      githubLink: "https://github.com/mhkm-programmer/foodNetwork-client-site",
      liveDemoLink: "https://assignment10-chef-recipies.firebaseapp.com/",
    },

    // Add more projects here...
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleShowAllProjects = () => {
    setShowAllProjects(true);
  };

  const handleBackToArticles = () => {
    setShowAllProjects(false);
    setSelectedProject(null);
  };

  const articleTransitionStyles = {
    entering: "opacity-0 transform scale-75",
    entered: "opacity-100 transform scale-100",
    exiting: "opacity-0 transform scale-75",
    exited: "opacity-0 transform scale-0",
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);
  return (
    <div className=" container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-4">My Projects</h1>
      <h2 className="text-center text-lg font-semibold mb-12">
        Explore my portfolio of web development projects
      </h2>
      {selectedProject ? (
        <Transition in={true} timeout={300} mountOnEnter unmountOnExit>
          {(state) => (
            <div
              className={`max-w-4xl mx-auto transition-all duration-300 ${articleTransitionStyles[state]}`}
            >
              {/* <span className="flex gap-2 items-baseline sticky top-1/4">
                <button
                  className="text-gray-500 hover:text-gray-700 mb-4  border-b-black hover:border-b-2 opacity-50 hover:opacity-100 rounded-lg p-3"
                  onClick={handleCloseProject}
                >
                  ⬅ Back to Projects
                </button>
              </span> */}
              {/* <h2 className="text-2xl font-semibold mb-2">
                {selectedProject.title}
              </h2> */}

              {/* <div
                className="mb-4 overflow-y-scroll"
                style={{ maxHeight: "400px" }}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-lg"
                />
              </div> */}
              <ImageWithAutoScroll
                src={selectedProject.image}
                alt="selectedProject.title"
                maxHeight="350px"
              />
              <p className="text-gray-500 mb-4">
                {selectedProject.description}
              </p>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                <ul className="list-disc list-inside">
                  {selectedProject.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Technologies:</h3>
                <ul className="list-disc list-inside">
                  {selectedProject.technologies.map((technology, index) => (
                    <li key={index}>{technology}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-start gap-5 mb-8">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-500 hover:border-b-teal-500 border-b-2 rounded-full px-2"
                >
                  Source Code
                </a>
                <a
                  href={selectedProject.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:border-b-teal-500 border-b-2 rounded-full px-2"
                >
                  Live Preview
                </a>
              </div>
              <div class="flex justify-center">
  <button class="flex items-center btn" onClick={handleCloseProject}>
    <FaArrowLeft class="mr-2" size={16} /> Back to Projects
  </button>
</div>
            </div>
          )}
        </Transition>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {displayedProjects.map((project) => (
              <Transition
                key={project.id}
                in={true}
                timeout={300}
                mountOnEnter
                unmountOnExit
              >
                {(state) => (
                  <div
                    className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 ${articleTransitionStyles[state]}`}
                    onClick={() => handleProjectClick(project)}
                    key={project.id}
                  >
                    <ImageWithAutoScroll
                      src={project.image}
                      alt="selectedProject.title"
                      maxHeight="200px"
                    />
                    <h2 className="text-xl p-2 font-semibold mb-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-justify p-2 mb-32">
                      {project.description}
                    </p>

                    <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        margin: "auto",
                        width: "fit-content",
                        padding: "4px",
                      }}
                    >
                      <div className="flex gap-5 justify-between p-4 ">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-teal-500 hover:border-b-teal-500 border-b-2 rounded-full px-2"
                        >
                          Source Code
                        </a>
                        <a
                          href={project.liveDemoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:border-b-teal-500 border-b-2 rounded-full px-2"
                        >
                          Live Preview
                        </a>
                      </div>
                      <a className="btn flex items-center" href="#">
  Details More <FaArrowRight className="ml-2" size={16} />
</a>
                    </div>
                  </div>
                )}
              </Transition>
            ))}
          </div>
          {!showAllProjects && (
            <div className="flex justify-center">
              <button className="btn" onClick={handleShowAllProjects}>
                See More
              </button>
            </div>
          )}

          {showAllProjects && (
            <div className="flex justify-center">
              <button className="btn" onClick={() => setShowAllProjects(false)}>
                Show Less
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyProjects;
