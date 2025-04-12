import { useRef, useState } from "react";
import { motion } from 'framer-motion';

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faq } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faq.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faq.a}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
 
    const faqsList = [
      {
        category: "General Questions",
        faqs:[
          {
            "q": "What is a frontend developer?",
            "a": "A frontend developer is responsible for creating the user-facing part of a website or application. They work with HTML, CSS, and JavaScript to build interactive and visually appealing interfaces that users interact with directly."
            },
            {
            "q": "What is a backend developer?",
            "a": "A backend developer focuses on the server-side development of a website or application. They work with programming languages like Python, Ruby, or Node.js, and handle tasks such as database management, server logic, and API integrations."
            },
            {
            "q": "What is a MERN developer?",
            "a": "A MERN developer is proficient in using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. They specialize in developing full-stack web applications, leveraging these technologies for frontend and backend development."
            },
            {
            "q": "What are the primary responsibilities of a frontend developer?",
            "a": "The primary responsibilities of a frontend developer include designing and developing the user interface, implementing user interactions, optimizing website performance, ensuring cross-browser compatibility, and collaborating with designers and backend developers."
            },
            {
            "q": "What are the primary responsibilities of a backend developer?",
            "a": "The primary responsibilities of a backend developer involve server-side logic implementation, database management, API integration, handling security and authentication, optimizing performance, and collaborating with frontend developers and system administrators."
            },
            {
            "q": "What are the primary responsibilities of a MERN developer?",
            "a": "A MERN developer's primary responsibilities include developing full-stack web applications using the MERN stack, handling frontend and backend development tasks, integrating APIs and databases, optimizing performance, and ensuring smooth communication between frontend and backend components."
            }
     
        ]
      },
     
      {
        category: "Skills and Expertise",
        faqs:[
          {
            "q": "What programming languages are you proficient in?",
            "a": "I am proficient in several programming languages, including but not limited to HTML, CSS, JavaScript, Next JS, Redux, and TypeScript."
            },
            {
            "q": "What frameworks or libraries are you experienced in working with?",
            "a": "I have experience working with various frameworks and libraries, such as React,  Express.js, and Node.js, to name a few."
            },
            {
            "q": "Do you have experience with database management?",
            "a": "Yes, I have experience with database management. I am proficient in working with popular databases such as  MongoDB."
            },
            {
            "q": "Are you familiar with version control systems?",
            "a": "Yes, I am familiar with version control systems, especially Git. I use Git for managing source code, collaborating with teams, and ensuring efficient code management."
            },
            {
            "q": "Do you have experience with cloud platforms and deployment?",
            "a": "Yes, I have experience with cloud platforms like AWS (Amazon Web Services), Google Cloud Platform, and Heroku. I am proficient in deploying applications and managing infrastructure on these platforms."
            }
    
        
        ]
      },
     
      {
        category: "Frontend Development",
        faqs:[
          {
            "q": "What programming languages are commonly used for frontend development?",
            "a": "The common programming languages used for frontend development are HTML, CSS, and JavaScript. HTML provides the structure, CSS handles the styling, and JavaScript adds interactivity to web pages."
            },
            {
            "q": "What frameworks or libraries are commonly used for frontend development?",
            "a": "Popular frontend frameworks and libraries include React.js, Angular, and Vue.js. These frameworks provide efficient ways to build complex user interfaces and simplify frontend development tasks."
            },
            {
            "q": "How do I structure and organize my frontend code?",
            "a": "A common approach to structuring frontend code is using a component-based architecture. Break your code into reusable components, separate concerns (such as HTML, CSS, and JavaScript), and organize files based on their functionality."
            },
            {
            "q": "What tools can I use for testing and debugging frontend code?",
            "a": "There are several tools available for testing and debugging frontend code, such as Chrome DevTools, Firefox Developer Tools, and Jest for unit testing. These tools help you identify and fix issues in your code."
            },
            {
            "q": "How can I optimize performance in frontend development?",
            "a": "To optimize performance in frontend development, you can minimize file sizes, use efficient algorithms and data structures, optimize images, lazy load content, and leverage caching mechanisms. Additionally, following best practices for code organization and reducing unnecessary re-renders can also improve performance."
            },
            {
            "q": "How do I ensure cross-browser compatibility?",
            "a": "To ensure cross-browser compatibility, it's important to test your website or application on different browsers and versions. Use CSS and JavaScript features that have good browser support, and consider using CSS frameworks or libraries that handle cross-browser compatibility for you."
            }
        ]
      },
      {
        category: "Backend Development",
        faqs:[
          {
            "q": "What programming languages are commonly used for backend development?",
            "a": "Common programming languages used for backend development include Python, Ruby, Java, and Node.js. Each language has its own strengths and is suitable for different types of projects."
            },
            {
            "q": "What frameworks or libraries are commonly used for backend development?",
            "a": "Frameworks and libraries commonly used for backend development include Express.js (for Node.js), Ruby on Rails, Django (for Python), and Spring (for Java). These frameworks provide a foundation and tools for building robust backend systems."
            },
            {
            "q": "How do I handle server-side security and authentication?",
            "a": "Server-side security and authentication can be handled by implementing secure protocols (such as HTTPS), validating and sanitizing user input, using encryption for sensitive data, implementing secure authentication mechanisms (e.g., OAuth, JWT), and following security best practices throughout your application."
            },
            {
            "q": "What are the best practices for database management in backend development?",
            "a": "Best practices for database management in backend development include using proper indexing, normalizing data to avoid duplication, securing your database connections, implementing backups and disaster recovery plans, and optimizing queries for performance."
            },
            {
            "q": "How can I optimize performance in backend development?",
            "a": "To optimize performance in backend development, you can employ techniques such as caching, optimizing database queries, using appropriate data structures, implementing efficient algorithms, and optimizing server configurations. Profiling and load testing can help identify bottlenecks and areas for improvement."
            },
            {
            "q": "How do I handle errors and exceptions in backend development?",
            "a": "Handling errors and exceptions involves implementing proper error handling mechanisms, such as try-catch blocks, logging errors, providing informative error messages, and implementing error response codes. It's important to gracefully handle errors and provide meaningful feedback to users."
            }
        
        ]
      },
      {
        category: "MERN Stack Development",
        faqs:[
          {
            "q": "What is the MERN stack and how does it work?",
            "a": "The MERN stack is a combination of technologies: MongoDB (a NoSQL database), Express.js (a backend framework for Node.js), React.js (a JavaScript library for building user interfaces), and Node.js (a JavaScript runtime for server-side development). Together, these technologies enable end-to-end JavaScript development for web applications."
            },
            {
            "q": "How do I set up a MERN development environment?",
            "a": "To set up a MERN development environment, you need to install Node.js, MongoDB, and a code editor. You can then create a new project directory, set up the backend using Express.js and Node.js, and set up the frontend using React.js."
            },
            {
            "q": "How do I establish a connection between MongoDB and Node.js?",
            "a": "You can establish a connection between MongoDB and Node.js using a MongoDB driver or an Object-Document Mapper (ODM) like Mongoose. These tools provide methods to connect to your MongoDB database and perform database operations using Node.js."
            },
            {
            "q": "What are the best practices for structuring a MERN application?",
            "a": "Some best practices for structuring a MERN application include separating the frontend and backend code into separate directories, organizing components or modules based on functionality, and establishing clear communication between frontend and backend through APIs."
            },
            {
            "q": "How can I handle routing and API calls in a MERN application?",
            "a": "In a MERN application, you can use libraries like React Router on the frontend to handle routing and define routes for different components. On the backend, you can define routes using Express.js and handle API calls from the frontend."
            },
            {
            "q": "How do I deploy a MERN application to a server or hosting platform?",
            "a": "To deploy a MERN application, you can use platforms like Heroku, AWS, or Azure, which provide hosting and deployment services. You typically need to configure your application, set up a build process, and deploy your code to the chosen platform."
            }
        
        ]
      },
      {
        category: "Project Management and Collaboration",
        faqs:[
          {
            "q": "What version control systems are commonly used in software development?",
            "a": "Commonly used version control systems in software development include Git, Mercurial, and Subversion (SVN). Git is the most widely used version control system and offers powerful features for collaboration and code management."
            },
            {
            "q": "How do I collaborate effectively with a team of developers?",
            "a": "To collaborate effectively with a team of developers, you can use collaboration tools like Git for version control, project management tools like Jira or Trello for task tracking, and communication tools like Slack or Microsoft Teams for seamless communication."
            },
            {
            "q": "What project management methodologies can I adopt?",
            "a": "Popular project management methodologies include Agile, Scrum, and Kanban. These methodologies promote iterative development, collaboration, and continuous improvement throughout the project lifecycle."
            },
            {
            "q": "How can I efficiently track and manage project tasks?",
            "a": "You can efficiently track and manage project tasks by using project management tools that offer features like task assignment, progress tracking, deadlines, and task dependencies. Regular team meetings and effective communication also contribute to efficient task management."
            },
            {
            "q": "What are the best practices for documenting and maintaining code?",
            "a": "Some best practices for documenting and maintaining code include writing clear and concise comments, documenting APIs and code interfaces, using consistent coding styles, keeping a well-organized code structure, and regularly refactoring and optimizing code for readability and maintainability."
            }
        
        ]
      },
      {
        category: "Development Tools and Technologies",
        faqs:[
          {
            "q": "What code editors or IDEs are commonly used in frontend and backend development?",
            "a": "Commonly used code editors and IDEs for frontend development include Visual Studio Code, Sublime Text, and Atom. For backend development, popular choices are Visual Studio Code, IntelliJ IDEA, and PyCharm."
            },
            {
            "q": "What build tools or task runners can enhance my development workflow?",
            "a": "Build tools and task runners like Webpack, Gulp, and Grunt can enhance your development workflow by automating tasks such as code compilation, bundling, minification, and live reloading."
            },
            {
            "q": "Are there any recommended testing frameworks or libraries for frontend and backend development?",
            "a": "For frontend development, popular testing frameworks include Jest, Mocha, and Jasmine. For backend development, frameworks like Jest, PyTest, and JUnit are commonly used for unit testing and integration testing."
            },
            {
            "q": "What are some useful browser developer tools for frontend debugging and profiling?",
            "a": "Useful browser developer tools for frontend debugging and profiling include Chrome DevTools, Firefox Developer Tools, and Safari Web Inspector. These tools provide features like inspecting elements, debugging JavaScript, monitoring network activity, and analyzing performance."
            },
            {
            "q": "How can I integrate third-party APIs into my frontend or backend applications?",
            "a": "To integrate third-party APIs, you can use HTTP libraries like Axios or Fetch to send requests and receive responses. For frontend applications, you can make API calls from JavaScript. In backend applications, you can use libraries or frameworks specific to your programming language."
            }
        
        ]
      },
      {
        category: "Deployment and Hosting",
        faqs:[
          {
            "q": "How do I deploy a frontend application to a web server or hosting platform?",
            "a": "To deploy a frontend application, you can use hosting platforms like Netlify, Vercel, or GitHub Pages. Typically, you need to build your application for production, configure the hosting platform, and deploy your code or artifacts to the provided hosting service."
            },
            {
            "q": "What are the options for hosting a backend application or API?",
            "a": "You have various options for hosting a backend application or API, including cloud platforms like AWS, Azure, or Google Cloud, as well as dedicated hosting providers like DigitalOcean or Heroku. These platforms offer infrastructure and services to deploy and manage backend applications."
            },
            {
            "q": "How can I configure and manage environment variables for my applications?",
            "a": "Environment variables can be configured and managed using configuration files, command-line arguments, or environment variable management tools specific to your programming language or framework. These variables allow you to store sensitive information or configuration settings outside of your codebase."
            },
            {
            "q": "What are some best practices for securing and monitoring deployed applications?",
            "a": "Best practices for securing and monitoring deployed applications include implementing proper authentication and authorization mechanisms, using SSL/TLS certificates for secure communication, regularly applying security patches and updates, monitoring logs and system metrics, and setting up automated monitoring and alerting systems."
            },
            {
            "q": "How do I handle continuous integration and continuous deployment (CI/CD) for my projects?",
            "a": "To handle CI/CD, you can use CI/CD platforms like Jenkins, CircleCI, or GitLab CI/CD. These platforms allow you to automate building, testing, and deploying your applications based on triggers such as code commits or pull requests."
            }
        
        ]
      },
      {
        category: "Performance Optimization",
        faqs:[
          {
            "q": "How can I optimize the loading speed of my frontend application?",
            "a": "To optimize frontend loading speed, you can minify and compress your code and assets, utilize browser caching, lazy load resources, and optimize images and media files. Additionally, reducing the number of HTTP requests and leveraging content delivery networks (CDNs) can improve performance."
            },
            {
            "q": "What techniques can I use to improve backend performance and response time?",
            "a": "Techniques to improve backend performance include optimizing database queries, implementing caching mechanisms (e.g., Redis or Memcached), using efficient algorithms and data structures, and scaling horizontally or vertically based on traffic and workload demands."
            },
            {
            "q": "Are there any strategies for optimizing database queries and indexing?",
            "a": "Strategies for optimizing database queries include creating appropriate indexes for frequently accessed columns, optimizing complex queries or joins, avoiding unnecessary data retrieval, and utilizing database-specific features like query optimization tools or query caching."
            },
            {
            "q": "What are some caching mechanisms and strategies for improving performance?",
            "a": "Caching mechanisms and strategies include using in-memory caches like Redis or Memcached to store frequently accessed data, leveraging browser caching for static assets, and employing content delivery networks (CDNs) to cache and serve static content closer to users."
            },
            {
            "q": "How can I leverage browser caching and compression techniques for frontend assets?",
            "a": "You can leverage browser caching by setting appropriate caching headers for your static assets, such as JavaScript, CSS, and image files. Additionally, you can compress these assets using techniques like Gzip or Brotli compression to reduce file sizes and improve transfer speeds."
            }
        
        ]
      },
      {
        category: "Responsive Design and Mobile Development",
        faqs:[
          {
            "q": "What are the best practices for creating responsive and mobile-friendly web applications?",
            "a": "Best practices for creating responsive and mobile-friendly web applications include using responsive design techniques like media queries, designing for a mobile-first approach, optimizing touch interactions, and testing your application on different devices and screen sizes."
            },
            {
            "q": "Are there any frameworks or libraries specifically designed for mobile development?",
            "a": "Yes, there are frameworks and libraries specifically designed for mobile development, such as React Native, Flutter, and Xamarin. These frameworks allow you to build mobile applications using JavaScript, Dart, or C# and provide native-like performance and user experience."
            },
            {
            "q": "How do I handle touch events and gestures in frontend development?",
            "a": "To handle touch events and gestures in frontend development, you can use touch event listeners and libraries like Hammer.js. These tools enable you to detect and respond to touch events such as tapping, swiping, pinching, and dragging."
            },
            {
            "q": "What strategies can I use to optimize the user experience on different devices and screen sizes?",
            "a": "Strategies for optimizing the user experience on different devices and screen sizes include using responsive layouts and fluid grids, optimizing images and media for different resolutions, and providing clear and concise content that adapts well to varying screen sizes."
            },
            {
            "q": "How can I test and debug my applications on various mobile devices and emulators?",
            "a": "You can test and debug your applications on various mobile devices and emulators using tools like the Chrome DevTools Device Mode, Android Studio Emulator, or Xcode Simulator. These tools allow you to simulate different devices and test your application's responsiveness and behavior."
            }
        
        ]
      },
      {
        category: "Continuous Learning and Professional Growth",
        faqs:[
          {
            "q": "What are some recommended resources or websites for staying up-to-date with frontend and backend development?",
            "a": "Some recommended resources and websites for staying up-to-date with frontend and backend development include MDN Web Docs, Stack Overflow, GitHub repositories, CSS-Tricks, Smashing Magazine, and developer blogs or newsletters specific to your programming languages or frameworks."
            },
            {
            "q": "Are there any online courses or certifications that can enhance my skills?",
            "a": "Yes, there are various online courses and certifications available that can enhance your skills as a developer. Platforms like Udemy, Coursera, and LinkedIn Learning offer a wide range of courses and certifications covering frontend, backend, and MERN development, among other topics."
            },
            {
            "q": "How can I improve my problem-solving abilities as a developer?",
            "a": "To improve your problem-solving abilities as a developer, practice regularly by solving coding challenges, puzzles, or algorithmic problems. Additionally, engage in collaborative coding exercises, participate in online coding communities, and learn from experienced developers to gain different problem-solving perspectives."
            },
            {
            "q": "What are some effective ways to collaborate and network with other developers?",
            "a": "Effective ways to collaborate and network with other developers include joining online developer communities and forums, attending developer conferences or meetups, contributing to open-source projects, participating in hackathons, and engaging in social media platforms for developers like Twitter or LinkedIn."
            },
            {
            "q": "How do I balance work and personal projects to continue learning and growing?",
            "a": "Balancing work and personal projects can be achieved by setting aside dedicated time for personal learning and side projects, prioritizing tasks and goals, and maintaining a healthy work-life balance. Effective time management, setting realistic expectations, and regularly assessing and adjusting your commitments are key to continuous learning and growth."
            }
        
        ]
      },
      {
        category: "Security and Privacy",
        faqs:[
          {
            "q": "How can I ensure the security of user data in my applications?",
            "a": "To ensure the security of user data, you should implement secure authentication and authorization mechanisms, encrypt sensitive data at rest and in transit, regularly update and patch your software dependencies, conduct security audits and vulnerability assessments, and follow security best practices such as input validation and proper error handling."
            },
            {
            "q": "What measures should I take to protect against common security vulnerabilities?",
            "a": "To protect against common security vulnerabilities, you should implement proper input validation and sanitization, use parameterized queries or prepared statements to prevent SQL injection, avoid storing sensitive information in plain text, employ secure session management, and stay updated with security advisories and patches for your software components."
            },
            {
            "q": "Are there any best practices for securing API endpoints and handling user authentication?",
            "a": "Best practices for securing API endpoints include implementing secure communication protocols (e.g., HTTPS), using authentication methods like tokens or JWT (JSON Web Tokens), enforcing strong password policies, implementing rate limiting and throttling to prevent abuse, and regularly monitoring and auditing API usage."
            },
            {
            "q": "How do I implement encryption and secure communication in my applications?",
            "a": "To implement encryption and secure communication, you can use cryptographic libraries or frameworks specific to your programming language or platform. Use SSL/TLS certificates for secure communication over HTTPS, and consider encrypting sensitive data using algorithms like AES (Advanced Encryption Standard) or RSA (Rivest-Shamir-Adleman)."
            },
            {
            "q": "What steps should I follow to comply with privacy regulations, such as GDPR?",
            "a": "To comply with privacy regulations like GDPR (General Data Protection Regulation), you should obtain user consent for data collection and processing, provide transparent privacy policies, implement data protection measures, allow users to access and manage their data, and have processes in place for data breach notifications and compliance audits."
            }
        ]
      },
      {
        category: "Payment and Pricing",
        faqs:[
          {
            "q": "How do I handle payment transactions for my services or products?",
            "a": "You can handle payment transactions by integrating payment gateways or platforms like PayPal, Stripe, or Braintree into your applications. These platforms provide APIs and SDKs that allow you to securely process payments, handle different currencies, and manage transactions."
            },
            {
            "q": "What payment gateways or platforms can I integrate into my applications?",
            "a": "Popular payment gateways and platforms that you can integrate into your applications include PayPal, Stripe, Braintree, Square, and Authorize.Net. These platforms offer a range of features and support various payment methods, making it convenient for you and your users."
            },
            {
            "q": "Are there any considerations for setting pricing and handling different currencies?",
            "a": "When setting pricing, consider factors such as your costs, market demand, and competitive landscape. For handling different currencies, utilize currency conversion APIs or payment gateways that support multiple currencies. Keep in mind exchange rate fluctuations and consider including a currency conversion fee if necessary."
            },
            {
            "q": "What is your preferred payment schedule and method?",
            "a": "My preferred payment schedule is typically agreed upon before starting a project and can vary based on the scope and duration of the project. As for payment methods, I accept various options such as bank transfers, PayPal, or other secure online payment platforms."
            },
            {
            "q": "Do you offer any discounts or packages for long-term projects or multiple services?",
            "a": "Yes, I offer discounts or customized packages for long-term projects or when multiple services are requested. Feel free to discuss your requirements and project details, and we can work together to find a suitable arrangement that meets your needs."
            }
        
        ]
      },
      {
        category: "Refund and Cancellation Policy",
        faqs:[
          {
            "q": "What is your refund policy for services or products?",
            "a": "My refund policy for services or products is as follows: [Provide details of your specific refund policy, including any conditions, timeframes, or limitations.]"
            },
            {
            "q": "Under what circumstances can a refund be requested?",
            "a": "A refund can be requested under circumstances such as [Specify the circumstances under which a refund can be requested, e.g., failure to meet project requirements, unsatisfactory deliverables, etc.]"
            },
            {
            "q": "How do I initiate a refund or cancellation process?",
            "a": "To initiate a refund or cancellation process, please [Provide instructions on how the client can initiate the refund or cancellation process, such as contacting you via email or submitting a refund request form.]"
            },
            {
            "q": "Are there any specific conditions or requirements for refund eligibility?",
            "a": "Refund eligibility may be subject to certain conditions or requirements, which can include [Specify any specific conditions or requirements for refund eligibility, such as adhering to agreed-upon project milestones or providing sufficient justification for the refund request.]"
            },
            {
            "q": "What is the timeline for processing refunds?",
            "a": "The timeline for processing refunds may vary, but we strive to process refunds promptly upon verification and approval. Generally, refunds are processed within [Specify the average timeframe for processing refunds, e.g., 5-7 business days.]"
            }
        
        ]
      },
      {
        category: "Revision Process",
        faqs:[
          {
            "q": "How many revisions are included in your service packages?",
            "a": "The number of revisions included in my service packages depends on the specific package and agreement. Typically, [Specify the number of revisions included or refer to the package details or contract for specific information.]"
            },
            {
            "q": "What constitutes a revision request?",
            "a": "A revision request constitutes changes or modifications to the initial deliverables or project requirements. This can include [Specify what is considered a revision request, such as design changes, content updates, or functionality adjustments.]"
            },
            {
            "q": "How do I communicate my revision requests to you?",
            "a": "To communicate revision requests, you can [Specify the preferred method of communication for revision requests, such as sending an email with clear instructions or using a project management tool to track and discuss revisions.]"
            },
            {
            "q": "What is the typical turnaround time for revisions?",
            "a": "The typical turnaround time for revisions may vary depending on the complexity of the revisions and the workload at the time. However, I strive to provide revisions within [Specify the average turnaround time for revisions, e.g., 1-3 business days.]"
            },
            {
            "q": "Are there any limitations or restrictions on the revision process?",
            "a": "There may be certain limitations or restrictions on the revision process, such as [Specify any limitations or restrictions, such as the number of revision rounds included, specific types of changes covered, or additional charges for extensive revisions beyond the agreed scope.]"
            }
        
        ]
      },
      {
        category: "Hiring Process",
        faqs:[
          {
            "q": "What is your process for hiring and onboarding new clients?",
            "a": "My process for hiring and onboarding new clients typically involves [Outline the steps involved in the hiring and onboarding process, such as initial consultation, project discussion, proposal or contract signing, and onboarding documentation.]"
            },
            {
            "q": "How do I initiate a project request or discuss my requirements with you?",
            "a": "To initiate a project request or discuss your requirements, you can [Specify the preferred method of contact, such as sending an email, filling out a contact form on my website, or scheduling a consultation call.]"
            },
            {
            "q": "What information or documents should I provide during the hiring process?",
            "a": "During the hiring process, it is helpful if you can provide [Specify the information or documents you require from clients during the hiring process, such as project briefs, design assets, or any relevant documentation.]"
            },
            {
            "q": "How do you determine project timelines and milestones?",
            "a": "Project timelines and milestones are determined through a collaborative process based on the project scope, complexity, and client requirements. We will discuss and establish project timelines and milestones during the initial project discussions and proposal phase."
            },
            {
            "q": "What is your preferred method of communication during a project?",
            "a": "My preferred method of communication during a project is [Specify your preferred communication methods, such as email, project management tools, video calls, or a combination of different channels.]"
            }
        
        ]
      },
      {
        category: "Freelancing",
        faqs:[
          {
            "q": "Do you offer freelance services?",
            "a": "Yes, I offer freelance services. As a frontend, backend, and MERN developer, I have experience working on various projects as a freelancer and can provide my expertise to help you achieve your goals."
            },
            {
            "q": "What is your experience working as a freelancer?",
            "a": "I have been working as a freelancer for several years. During this time, I have successfully completed numerous projects for clients, honing my skills in frontend, backend, and MERN development. I am comfortable working independently and delivering high-quality results."
            },
            {
            "q": "How do you manage your time and workload as a freelancer?",
            "a": "As a freelancer, I understand the importance of time management and maintaining a balanced workload. I carefully plan my projects, set realistic deadlines, and prioritize tasks to ensure efficient and timely delivery of work. This allows me to handle multiple projects simultaneously while maintaining quality and meeting client expectations."
            },
            {
            "q": "What are your rates for freelance projects?",
            "a": "My rates for freelance projects depend on the scope, complexity, and duration of the project. Once we discuss your specific requirements, I can provide you with a detailed quote outlining the costs involved."
            },
            {
            "q": "How do I hire you for a freelance project?",
            "a": "To hire me for a freelance project, please contact me with your project details, including the scope, timeline, and any specific requirements. We can then discuss the project further, agree on terms, and proceed with the necessary arrangements to get started."
            }
        
        ]
      },
      {
        category: "Delivery and Handover",
        faqs:[
          {
            "q": "How will the final deliverables be provided to me?",
            "a": "The final deliverables will be provided to you [Specify the delivery method, such as via email, file sharing platforms, or through a secure client portal.]"
            },
            {
            "q": "Do you offer any documentation or user guides along with the deliverables?",
            "a": "Yes, if applicable, I provide documentation or user guides along with the deliverables. These documents will help you understand and utilize the deliverables effectively."
            },
            {
            "q": "What file formats or specifications can I expect for the deliverables?",
            "a": "The file formats or specifications for the deliverables will depend on the project requirements and agreed-upon deliverables. Common file formats include [Specify the file formats commonly used, such as PDF, HTML, CSS, JavaScript, PSD, etc.]."
            },
            {
            "q": "Are there any post-delivery support or assistance options?",
            "a": "Yes, I offer post-delivery support or assistance options. These can include [Specify the post-delivery support options you provide, such as a specified support period, maintenance packages, or ongoing support agreements.]"
            },
            {
            "q": "How can I provide feedback or review the delivered work?",
            "a": "You can provide feedback or review the delivered work by [Specify the preferred method for clients to provide feedback or review the work, such as email, comments in a collaborative tool, or scheduled feedback sessions.]"
            }
        
        ]
      },
      {
        category: "Client Collaboration and Communication",
        faqs:[
          {
            "q": "What is your preferred method of communication with clients?",
            "a": "My preferred method of communication with clients is usually through email or project management tools. However, I am open to other communication channels based on the client's preference, such as video calls or instant messaging platforms."
            },
            {
            "q": "How do you ensure effective collaboration with clients?",
            "a": "To ensure effective collaboration with clients, I maintain regular communication, provide progress updates, and seek clarifications whenever necessary. I value client feedback and actively incorporate it into the development process to ensure client satisfaction."
            },
            {
            "q": "Do you provide regular project updates and progress reports?",
            "a": "Yes, I provide regular project updates and progress reports to keep clients informed about the status of their projects. This helps maintain transparency and enables clients to track the development progress."
            },
            {
            "q": "Are you available for meetings or calls during the project?",
            "a": "Yes, I am available for meetings or calls during the project. I understand the importance of direct communication and am willing to schedule meetings or calls as needed to discuss project-related matters."
            },
            {
            "q": "How do you handle feedback and revisions from clients?",
            "a": "I value client feedback and take it seriously. If revisions or modifications are required, I work closely with clients to understand their requirements and implement the necessary changes. I strive to ensure that the final deliverables meet the client's expectations."
            }
    
        
        ]
      },
  

  ];

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
   
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='mt-12'>
        <h1 className="text-center text-3xl font-bold mb-4">Unlocking Insights: Frequently Asked Questions</h1>
        <h2 className="text-center text-lg font-semibold">
        Answers to Your Burning Questions About My Work, Skill, and Process...
        </h2>
      </motion.div>
      <div>
      {faqsList.map((category, index) => (
        <div key={index}>
          <h2 className="text-2xl font-semibold mb-3 text-center py-8">{category.category}</h2>
        
          <div className="mt-10 max-w-2xl mx-auto">
        {category.faqs.map((item, idx) => (
          <FaqsCard key={idx} faq={item} />
        ))}
      </div> 
        </div>
      ))}
    </div>
    
    </section>
  );
};

export default FAQSection;
