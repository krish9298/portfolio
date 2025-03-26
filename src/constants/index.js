import {
    mobile,
    backend,
    creator,
    web,
    reviewApp,
    reactjs,
    nodejs,
    gep,
    copart,
    mnnit,
    socialBook,
    videoChat,
    whatsAI,
    detection,
    medX,
    java,
    javascript,
    python,
    github,
    personal,
    live
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Innovative",
      icon: web,
    },
    {
      title: "Decisive",
      icon: mobile,
    },
    {
      title: "Accountable",
      icon: backend,
    },
    {
      title: "Customer-Focused",
      icon: creator,
    }
  ];

  const technologies = [
    {
      title: "React",
      icon: reactjs,
    },
    {
      title: "Node",
      icon: nodejs,
    },
    {
      title: "javascript",
      icon: javascript,
    },
    {
      title: "Java",
      icon: java,
    },
    {
      title: "Python",
      icon: python,
    },
  ];
  
  
  const experiences = [
    {
      title: "Senior Java Developer",
      company_name: "AT&T Inc. (via Pyramid Consulting Inc.)",
      icon: att,
      iconBg: "#383E56",
      date: "June 2024 - Present",
      points: [
        "Engaged in the entirety of the Software Development Life Cycle (SDLC), playing a pivotal role in both the design and implementation phases of the project.",
        "Developed the Backend solutions with Java, Spring Boot, and PostgreSQL databases. Collaborated with global teams to integrate REST APIs and Docker components into the backend systems.",
        "Responsible for migrating the application from Spring MVC to Spring Boot in phase-1 and later implementing it into a scalable Microservices architecture on AWS using Kubernetes, managed and maintained with GitHub.",
        "Utilized Kafka to integrate asynchronous communication patterns within the Microservices, thereby enhancing scalability and fault tolerance.",
        "Optimized database queries and procedures, increasing application efficiency and response time by 40%.",
        "Migrated downstream data to the cloud, implemented shell script jobs for daily and weekly data processing, and scheduled Cron Jobs for continuous updates, ensuring Data Representation is greatly improved.",
        "Collaborated with Agile teams in daily Scrum meetings and sprint planning streamlining development to ensure Continuous Integration and Continuous Development (Cl/CD)."
      ]
    },
    {
      title: "IT Intern",
      company_name: "Copart Inc.",
      icon: copart,
      iconBg: "#383E56",
      date: "September 2023 - May 2024",
      points: [
        "Designed and developed Java Spring Boot microservices, optimizing DMV vehicle data processing and improving system efficiency by 40%.",
        "Deployed and managed microservices on Kubernetes with auto-scaling and load balancing, handling 200,000+ daily API requests.",
        "Introduced a ReactJS-based interface integrated with Elasticsearch, reducing page load times by 30% and improving front-end performance.",
        "Implemented CI/CD pipelines with Jenkins, automating testing and deployment, reducing release cycles by 40%."
       ]
     },
    {
      title: "Software Engineer",
      company_name: "GEP Worldwide",
      icon: gep,
      iconBg: "#383E56",
      date: "May 2020 - August 2022",
      points: [
        "Implemented UI for contract lifecycle modules React plugin architecture, measured based on the project delivery times, resulted in 20% reduction of team workload.",
        "Spearheaded the design and development of backend microservices-based contract creation platform using Java Spring Boot,measured through New Relic and Postman, resulted in a 30% improvement in the contract creation page load time and a 40% reduction in API data retrieval time by migrating SQL data to Neo4j"
      ]
    },
    {
      title: "Club Member",
      company_name: "Institution of Engineering and Technology, MNNIT",
      icon: mnnit,
      iconBg: "#E6DEDD",
      date: "May 2017 - July 2019",
      points: [
        "Delivered weekly seminars on Data Structures, programming, and web technologies to juniors",
      ],
    },
    {
      title: "Volunteer",
      company_name: "National Service Scheme (NSS), MNNIT",
      icon: mnnit,
      iconBg: "#E6DEDD",
      date: "July 2016 - December 2016",
      points: [
        "Organized weekend cleanliness campaigns, blood donations and teaching students in rural villages"
      ],
    }
  ];

  const projects = [
    {
      name: "Movie Review App",
      description:
        "Developed a robust web application using Spring framework and Java for the backend, React and JavaScript for the frontend, and MongoDB for the database. Implemented features that enable users to browse movies, view details, and write reviews for their favorite films. Leveraged Spring's powerful features such as dependency injection, MVC architecture, and RESTful APIs to create a scalable and maintainable backend. Utilized React and JavaScript to build a responsive and interactive user interface, allowing seamless navigation and dynamic updates.Leveraged MongoDB, a NoSQL database, to efficiently store and retrieve movie information and user reviews. Utilized version control and collaborative tools such as Git and GitHub for effective teamwork and code management.",
      tags: [
        {
          name: "Spring Boot",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: reviewApp,
      source_code_link: "https://github.com/krish9298/MovieAPI",
      minImg: github,
    },
    {
      name: "Real-time Video Chat Application",
      description:
        "Developed a real-time Video chat application using React, Node.js and WebSocket’s. Implemented user authentication and message history features. Achieved a response time of less than 100ms for sending and receiving messages.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Websocket",
          color: "pink-text-gradient",
        },
      ],
      image: videoChat,
      source_code_link: "https://github.com/krish9298/web-rtc-app",
      minImg: github,
    },
    {
      name: "WhatsAI",
      description:
        "Utilizes Python programming language and frameworks to provide remote control of a PC from anywhere in the world. Helps users stay organized with reminders and notifications. Enables quick retrieval of personal documents.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        }
      ],
      image: whatsAI,
      source_code_link: "https://github.com/krish9298/WhatsAI-1",
      minImg: github,
    },
    {
      name: "Object Detection in a Video",
      description:
        "Developed a Python model using convolutional neural networks to detect instances of semantic objects in videos, improving. object recognition and classification accuracy. Reduced the processing time of object detection in videos by 40% by implementing parallel processing techniques, resulting in faster analysis of large datasets. Achieved 80% accuracy over the testing dataset using Retina Net dataset, outperforming previous state-of-the-art methods that achieved 70% accuracy.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        }
      ],
      image: detection,
      source_code_link: "https://github.com/krish9298/objectDetection",
      minImg: github,
    },
    {
      name: "MedX",
      description:
        "A revolutionary platform for easy storage and access of electronic medical records (EMR) using blockchain technology. Developed using Solidity, a smart contract programming language specifically designed for Ethereum. Using Web3.js, MedX enables users to securely manage their medical records and interact with smart contracts on the Ethereum blockchain.",
      tags: [
        {
          name: "Web3.js",
          color: "blue-text-gradient",
        },
        {
          name: "Solidity",
          color: "blue-text-gradient",
        }
      ],
      image: medX,
      source_code_link: "https://github.com/krish9298/MedX",
      minImg: github,
    },
    {
      name: "Personal Portfolio",
      description:
        "You are surfing on the same Project",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "three.js",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: personal,
      source_code_link: "https://vamsikrishnayarragunta.netlify.app/",
      minImg: github,
    }
  ];
  
  export { services, technologies, experiences, projects };