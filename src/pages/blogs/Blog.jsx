import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Transition } from "react-transition-group";
import { useState } from "react";

const Blog = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title:
        "Mastering Frontend Development: Unleashing the Power of Modern Web Interfaces",
      author: "MHKM",
      authorLogo: "https://i.ibb.co/CQ18mGS/OMYJ3xu-I-male-12-cartoon65.png",
      date: new Date().toLocaleDateString(),
      content: [
        "▶️ Frontend development plays a crucial role in creating engaging and user-friendly web interfaces. With advancements in technologies and frameworks, it's essential for frontend developers to stay up-to-date with the latest trends and best practices. In this blog post, we will dive into the world of frontend development, exploring key concepts, tools, and techniques that will help you become a master in crafting modern web interfaces.",
        "▶️ Frontend development focuses on the client-side of web development, encompassing the design, structure, and behavior of user interfaces. It involves writing HTML, CSS, and JavaScript code to create visually appealing and interactive web pages. Frontend developers need to have a solid understanding of web standards, accessibility, and cross-browser compatibility to ensure a seamless user experience.",
        "▶️ To excel in frontend development, it's crucial to master HTML and CSS. We'll explore best practices for writing clean and semantic HTML code, as well as advanced CSS techniques for layout, responsiveness, and animations. Understanding the box model, working with flexbox and grid systems, and optimizing stylesheets for performance are all essential skills for frontend developers.",
        "▶️ JavaScript is the language of interactivity on the web. We'll cover key JavaScript concepts and dive into modern frameworks like React, Vue, or Angular, which provide powerful tools for building dynamic and scalable web applications. We'll explore topics such as component-based architecture, state management, and data manipulation, enabling you to create interactive and responsive web interfaces.",
        "▶️ User experience (UX) is paramount in frontend development. We'll discuss strategies for creating intuitive and accessible interfaces, optimizing performance, and implementing smooth transitions and animations. Responsive design techniques will ensure that your websites adapt seamlessly to different screen sizes and devices, providing a consistent and enjoyable user experience.",
        "▶️ Testing and debugging are essential aspects of frontend development. We'll cover tools and techniques for unit testing JavaScript code, writing effective test cases, and debugging common frontend issues. Browser developer tools and frameworks will aid in inspecting, profiling, and optimizing frontend code, ensuring that your web interfaces are bug-free and performant.",
        "▶️ In conclusion, frontend development is a constantly evolving field, and staying on top of the latest trends and techniques is crucial for success. By mastering HTML, CSS, JavaScript, and understanding the principles of user experience, you'll be equipped to create stunning and highly functional web interfaces that leave a lasting impact.",
      ],
      image: "https://i.ibb.co/tZX9pb0/freepik-5-23-12-21-9.jpg",
    },
    {
      id: 2,
      title:
        "Optimizing Performance in JavaScript: Techniques for Faster and Smoother Web Applications",
      author: "MHKM",
      authorLogo: "https://i.ibb.co/fqVWmT8/OMYJ3xu-I-male-12-cartoon55.png",
      date: getFormattedDate(getPastDate(7)),
      content: [
        "▶️ In today's fast-paced online world, users have little patience for slow and unresponsive web applications. As a developer, it is crucial to optimize the performance of your JavaScript code to provide the best possible user experience. In this blog post, we will explore various techniques and strategies for improving the speed and smoothness of web applications built with JavaScript.",
        "▶️ One of the first steps in optimizing JavaScript performance is minification and compression. Minification involves removing unnecessary white spaces, comments, and renaming variables to reduce the size of the code. Compression further reduces the file size by using algorithms like Gzip or Brotli. These techniques improve load times by reducing the amount of data that needs to be transferred over the network.",
        "▶️ Lazy loading is a technique used to defer the loading of non-critical resources until they are actually needed. In the case of JavaScript, you can use lazy loading to load scripts only when specific actions or conditions occur. This approach helps reduce the initial load time and improves the perceived performance of your web application.",
        "▶️ Caching plays a vital role in optimizing JavaScript performance. By caching resources, such as scripts, stylesheets, and images, you can reduce the number of requests made to the server, resulting in faster page loads. You can utilize browser caching by setting proper cache headers or implement server-side caching techniques like Redis or Memcached.",
        "▶️ Debouncing and throttling are techniques used to limit the frequency of function execution, particularly useful when handling events like scrolling or resizing. Debouncing ensures that a function is executed after a certain delay once the event has stopped firing, while throttling limits the number of times a function can be executed within a given time frame. By implementing these techniques, you can prevent unnecessary function calls and improve performance.",
        "▶️ Efficiently iterating over arrays and minimizing DOM manipulation can significantly improve JavaScript performance. When working with loops, consider using techniques like caching the array length, reducing the number of iterations, or utilizing specialized array methods like forEach, map, or reduce. Additionally, batch DOM updates using methods like DocumentFragment or requestAnimationFrame to minimize layout thrashing and improve rendering performance.",
        "▶️ In conclusion, Optimizing performance in JavaScript is crucial for delivering fast and responsive web applications. By applying techniques such as minification, lazy loading, caching, debouncing, optimized loops, Web Workers, and performance profiling, you can significantly enhance the speed and smoothness of your web applications. Remember to test and measure the impact of each optimization to make informed decisions and continuously improve the overall user experience.",
      ],
      image: "https://i.ibb.co/hfSkmgL/Wavy-Tech-09-Single-08.jpg",
    },
    {
      id: 3,
      title: "Introduction to CSS Grid: Building Responsive Layouts with Ease",
      author: "MHKM",
      authorLogo: "https://i.ibb.co/CQ18mGS/OMYJ3xu-I-male-12-cartoon65.png",
      date: getFormattedDate(getPastDate(15)),
      content: [
        "▶️ CSS Grid is a powerful layout system that allows developers to create flexible and responsive web layouts with ease. Unlike traditional layout methods like floats or positioning, CSS Grid provides a two-dimensional grid-based layout that brings a new level of control and flexibility to web design. In this article, we will introduce the basics of CSS Grid and explore how it can be used to build responsive layouts effortlessly.",
        "▶️ CSS Grid introduces a grid container that consists of rows and columns, forming a grid-like structure. By defining the size and placement of these rows and columns, you can create complex layouts for your web pages. The grid system works by dividing the available space into cells, allowing you to place elements precisely within those cells.",
        "▶️ To start using CSS Grid, you need to define a grid container. The container serves as the parent element that holds the grid items. By setting the display property of the container to grid, you activate the grid layout. Each direct child element within the container becomes a grid item and can be positioned within the grid.",
        "▶️ Grid tracks are the horizontal rows and vertical columns that make up the grid. You can specify the size of these tracks using various units such as pixels, percentages, or the fr unit, which represents a fraction of the available space. By defining the number and sizes of tracks, you have fine-grained control over the layout's structure.",
        "▶️ CSS Grid provides multiple ways to position and place grid items within the grid. You can use properties like grid-row-start, grid-column-end, grid-area, and more to determine where an item should be placed. Additionally, grid items can span across multiple rows or columns, providing additional flexibility for complex layouts.",
        "▶️ One of the most powerful features of CSS Grid is the ability to define named grid areas. By assigning names to specific cells or groups of cells, you can easily create complex layouts without having to remember numerical positions. The grid-template-areas property allows you to specify the arrangement of named areas in a visual way.",
        "▶️ In conclusion, CSS Grid is a game-changer for web layouts, offering developers a powerful and intuitive system for creating responsive designs. With its flexible grid structure, precise item placement, and seamless integration with media queries, CSS Grid empowers designers to build complex and adaptive layouts with ease. By mastering the fundamentals of CSS Grid, you can take your web design skills to the next level and deliver exceptional user experiences on any device.",
      ],
      image: "https://i.ibb.co/8DhN2Xn/4380747.jpg",
    },

    // Add more articles here...
  ]);

  function getPastDate(days) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - days);
    return currentDate;
  }

  function getFormattedDate(date) {
    return date.toLocaleDateString();
  }

  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  const articleTransitionStyles = {
    entering: "opacity-0 transform scale-75",
    entered: "opacity-100 transform scale-100",
    exiting: "opacity-0 transform scale-75",
    exited: "opacity-0 transform scale-0",
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-3xl font-bold mb-6">
        Exploring the World of Development
      </h1>
      <h1 className="text-center text-lg font-semibold mb-10">
        Discover the Latest Trends, Tips, and Techniques in Frontend, Backend,
        and MERN Development
      </h1>
      {selectedArticle ? (
        <Transition in={true} timeout={300} mountOnEnter unmountOnExit>
          {(state) => (
            <div
              className={`max-w-4xl mx-auto transition-all duration-300 ${articleTransitionStyles[state]}`}
            >
             
              <div className="text-center">
             

              
                <div
                    className="mb-4 overflow-y-scroll"
                    style={{ maxHeight: "400px" }}
                  >
                    <img
                      src={selectedArticle.image}
                      alt={selectedArticle.title}
                      className="rounded-lg"
                    />
                  </div>

                  <h2 className="text-2xl font-semibold mb-2 mt-10">
                  {selectedArticle.title}
                </h2>
                <div className="mx-auto flex justify-center items-center mt-2 pt-3 mb-4">
                  <div className="w-10 h-10 rounded-full">
                    <img
                      src={selectedArticle.authorLogo}
                      className="w-full h-full rounded-full"
                      alt={selectedArticle.author}
                    />
                  </div>
                
                  <div className="ml-3">
                    <span className="block text-gray-900">
                      {selectedArticle.author}
                    </span>
                    <span className="block text-gray-400 text-sm">
                      {selectedArticle.date}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-left text-justify">
                  <ul>
                    {selectedArticle.content.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </p>
              </div>
              <div class="flex justify-center mt-8">
  <button class="flex items-center btn" onClick={handleCloseArticle}>
    <FaArrowLeft class="mr-2" size={16} /> Back to Blogs
  </button>
</div>
            </div>
          )}
        </Transition>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-full">
          {articles.map((article) => (
            <Transition
              key={article.id}
              in={true}
              timeout={300}
              mountOnEnter
              unmountOnExit
            >
              {(state) => (
                <div
                  className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 ${articleTransitionStyles[state]}`}
                  onClick={() => handleArticleClick(article)}
                >
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">
                      {article.title}
                    </h2>
                    <div className="flex items-center mt-2 pt-3 ml-1 mr-2 mb-4">
                      <div className="flex-none w-10 h-10 rounded-full">
                        <img
                          src={article.authorLogo}
                          className="w-full h-full rounded-full"
                          alt={article.author}
                        />
                      </div>
                      <div className="ml-3">
                        <span className="block text-gray-900">
                          {article.author}
                        </span>
                        <span className="block text-gray-400 text-sm">
                          {article.date}
                        </span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="rounded-lg w-full h-64"
                      />
                    </div>
                   
                    <p className="text-gray-700 leading-relaxed text-justify mb-16">
                      {article.content.map((paragraph, index) => (
                        <p key={index}>
                          {paragraph.substring(0, 40)}
                          {paragraph.length > 100 ? "..." : ""}
                        </p>
                      ))}
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
                     <a className="btn flex items-center" href="#">
  Details More <FaArrowRight className="ml-2" size={16} />
</a>
                    </div>
                  </div>
                </div>
              )}
            </Transition>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
