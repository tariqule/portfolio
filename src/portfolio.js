/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Tariqule Khan",
  title: "Hi all, I'm Tariqule",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with extensive experience in building Web and Mobile applications using JavaScript / Reactjs / Nodejs / React Native and other modern libraries and frameworks. I have worked at notable companies like Deloitte and Lululemon, and I am currently the CTO at MyBee app."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1h3BmQDza1x5FnKWnLZMQoFtoo7CmhS-P/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tariqule",
  linkedin: "https://www.linkedin.com/in/tariqule/",
  gmail: "tariqule@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications (PWA) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase, AWS, Digital Ocean"
    ),
    emoji("⚡ Fluent in Java, JavaScript, Typescript, Ruby and Rust"),
    emoji("⚡ Proficient with NodeJS, NestJS, and ExpressJS"),
    emoji("⚡ 7 years experience with Postgres"),
    emoji("⚡ Experience with TensorFlow, Pandas, and NumPy"),
    emoji("⚡ Expert in Redux and Flux"),
    emoji("⚡ 8 years experience with React and React Native"),
    emoji("⚡ Expert in Nginx and PM2"),
    emoji("⚡ Skilled in SQL, NoSQL, MySQL, PostgreSQL, MongoDB, Cassandra"),
    emoji("⚡ Experienced in RESTful API development and GraphQL"),
    emoji("⚡ 5 years experice in Docker and Kubernetes for containerization"),
    emoji("⚡ Proficient with Git and SVN for version control"),
    emoji("⚡ 8 years plus Cloud services experience with AWS, Azure, and GCP"),
    emoji(
      "⚡ Unit, integration, and end-to-end testing with Jest, Mocha, Selenium, and Cypress"
    ),
    emoji(
      "⚡ CI/CD pipelines with Jenkins, CircleCI, GitlabCI, TravisCI, and Github Actions"
    ),
    emoji("⚡ Web security best practices (OWASP, SSL/TLS, HTTPS, CORS, CSP)"),
    emoji(
      "⚡ Techniques for web performance enhancement (lazy loading, code splitting)"
    ),
    emoji(
      "⚡ Creating adaptable applications for various devices and screen sizes"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },

    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fab fa-js-square"
    },

    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "graphql",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "webpack",
      fontAwesomeClassname: "fab fa-js-square"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Centennial College",
      logo: require("./assets/images/centennial.jpeg"),
      subHeader: "Software Engineering Technology",
      duration: "September 2015 - April 2018",
      desc: "",
      descBullets: ["", ""]
    }
    // {
    //   schoolName: "Centennial College",
    //   logo: require("./assets/images/centennial.jpeg"),
    //   subHeader: "Electronics Engineering Technology",
    //   duration: "September 2016 - April 2017",
    //   desc: "",
    //   descBullets: []
    // }
  ]
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "100%"
    },
    {
      Stack: "Artificial Intelligence",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud Services (AWS, Azure, GCP)",
      progressPercentage: "90%"
    },
    {
      Stack: "DevOps (CI/CD, Docker, Kubernetes)",
      progressPercentage: "90%"
    },
    {
      Stack: "Database Management (SQL, NoSQL)",
      progressPercentage: "95%"
    },
    {
      Stack: "Testing (Unit, Integration, End-to-End)",
      progressPercentage: "85%"
    },
    {
      Stack: "Security (OWASP, SSL/TLS)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Software Engineer",
      company: "Deloitte",
      companylogo: require("./assets/images/deloitte.png"),
      date: "Sep 2022 – Apr 2024",
      desc: "Worked in an Agile development environment, contributing to both front-end and back-end aspects of web applications using React, Express, and Node.js.",
      descBullets: [
        "Developed advanced React Native features (Push Notifications, Biometrics, Maps, Accessibility).",
        "Led and managed a team of 10 engineers, fostering a collaborative and efficient work environment.",
        "Collaborated in migrating database and infrastructure to AWS and Azure, enhancing system scalability and reliability.",
        "Designed and implemented highly scalable and maintainable Next.js applications.",
        "Led the development and maintenance of web applications using Ruby on Rails.",
        "Built a comprehensive ERP system using React JS, Node JS, JavaScript, and TypeScript.",
        "Developed complex Postgres SQL queries and database schemas.",
        "Containerized React and Node.js applications using Docker.",
        "Integrated and managed Redis as an in-memory data store.",
        "Managed AWS cloud infrastructure and services.",
        "Orchestrated seamless migration of multiple legacy applications to Kubernetes.",
        "Developed RESTful and gRPC APIs.",
        "Integrated event-driven architecture using message brokers like Kafka and RabbitMQ.",
        "Streamlined development processes by designing and managing CI/CD pipelines.",
        "Decomposed monolithic front-end applications into independently deployable micro frontends."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Scotiabank",
      companylogo: require("./assets/images/scotiabank.png"),
      date: "Mar 2022 – Sep 2022",
      desc: "Migrated an internal employee management system to React, enhancing the user experience and improving application performance.",
      descBullets: [
        "Developed and maintained web applications using React and Next.js.",
        "Implemented state management solutions using Redux.",
        "Developed Biometrics using React Native in Scotiabank mobile app.",
        "Participated in agile development processes.",
        "Designed and implemented scalable microservices using NodeJs.",
        "Designed and styled user interfaces with Material UI.",
        "Managed code repositories and version control using Bitbucket.",
        "Automated build and deployment pipelines with Jenkins.",
        "Handled package management and dependencies using npm.",
        "Integrated and managed binary artifacts using JFrog.",
        "Collaborated with cross-functional teams including designers, backend developers, and QA engineers.",
        "Conducted code reviews and provided constructive feedback.",
        "Engineered robust and scalable web applications with Ruby on Rails."
      ]
    },
    {
      role: "Senior Technical Lead",
      company: "Lululemon Athletica",
      companylogo: require("./assets/images/lululemon.gif"),
      date: "May 2020 – Mar 2022",
      desc: "Led development of e-commerce features using React.js, Next.js, and Node.js, driving increased user engagement and sales.",
      descBullets: [
        "Managed transition to Next.js architecture, enhancing website performance and SEO.",
        "Developed custom native modules and components using Native Modules and Native UI in React Native.",
        "Developed full-stack web applications using the MEAN stack (MongoDB, Express, Angular, Node.js).",
        "Developed robust backend solutions with Node.js and integrated RESTful and GraphQL APIs.",
        "Proficient in deploying and managing AWS applications.",
        "Implemented and managed CI/CD pipelines with automated testing.",
        "Played a pivotal role in integrating Kubernetes with Azure Cloud Services.",
        "Conducted Azure cloud workshops for cross-functional teams.",
        "Collaborated with frontend teams to integrate Ruby backend services with JavaScript frameworks.",
        "Developed event sourcing and CQRS patterns.",
        "Implemented optimized Dockerfiles for React and Node.js applications.",
        "Implemented Webpack for module bundling.",
        "Utilized technologies such as Docker, Kubernetes, and Istio for containerization and orchestration of microservices.",
        "Trained over 50 engineers in industry best practices and coding standards."
      ]
    },
    {
      role: "Senior Application Developer",
      company: "Ontario Ministry of Children",
      companylogo: require("./assets/images/ontsrio.webp"),
      date: "May 2019 – May 2020",
      desc: "Collaborated with team members for effective troubleshooting and debugging of software applications.",
      descBullets: [
        "Utilized Java, MVC, HTML5, JavaScript, NodeJs, and SQL Server to develop new applications.",
        "Practiced Test-Driven Development (TDD) for software application development.",
        "Regularly evaluated and updated SLAs/SLOs.",
        "Coordinated performance assurance and automated test scripts for software applications.",
        "Developed real-time databases using MongoDB.",
        "Ensured compliance with data governance and privacy standards.",
        "Implemented caching strategies using Redis and Memcached in Ruby applications.",
        "Configured and maintained a Redis cluster.",
        "Engineered and maintained continuous monitoring and alerting systems.",
        "Mentored software engineers in coding best practices and standards.",
        "Provided technical guidance to junior developers.",
        "Deployed containerized microservices using Kubernetes."
      ]
    },
    {
      role: "Senior Mobile Application Developer",
      company: "MyBee Technologies Inc",
      companylogo: require("./assets/images/mybee.jpeg"),
      date: "May 2015 – May 2019",
      desc: "Managed full life-cycle software development across multiple environments.",
      descBullets: [
        "Documented technical specifications and testing methodologies.",
        "Conducted functional, non-functional, regression, and performance testing.",
        "Developed mobile apps using React Native, Java, and Objective-C.",
        "Created web applications with React, Next.js, NodeJs and JavaScript.",
        "Utilized Redux for state management.",
        "Developed and deployed databases in Postgres and MongoDB.",
        "Applied Site Reliability Engineering (SRE) principles to manage large-scale, highly available systems.",
        "Dockerized React projects and implemented CircleCI for CI/CD."
      ]
    },
    {
      role: "Sr. Software Developer",
      company: "XSensor Corp",
      companylogo: require("./assets/images/xsensor.jpeg"),
      date: "May 2013 – Apr 2015",
      desc: "Conducted in-depth studies of platform-specific characteristics, guiding application development for iPhone, Android, Windows, and OSX.",
      descBullets: [
        "Led the design, development, and deployment of React Native CLI and Expo apps.",
        "Utilized Detox for end-to-end testing of React Native applications.",
        "Enhanced React Native app performance through a custom Profiler API.",
        "Collaborated with product and engineering teams to conceptualize and develop new product ideas.",
        "Integrated Java applications with database systems like MySQL, Oracle, and MongoDB.",
        "Successfully developed and deployed a React Native mobile app to the App Store and Play Store."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/lululemon.gif"),
      projectName: "Lululemon Search Engine",
      projectDesc:
        "Developed a search engine for Lululemon Athletica that allows users to search for products using various filters and categories.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.lululemon.com"
        }
      ]
    },
    {
      image: require("./assets/images/intelocate.png"),
      projectName: "Intelocate",
      projectDesc:
        "Intelocate is the easiest and fastest centralized communications system on the market today to report and resolve issues, incidents, and queries arising in retail and real estate locations. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.intelocate.com/"
        }
      ]
    },
    {
      image: require("./assets/images/logo.png"),
      projectName: "MyBee App",
      projectDesc:
        "MyBee App is a platform to connect skilled trades with clients in real-time. We also help small businesses generate more revenue fast by analyzing growth strategies using the power of Artificial Intelligence.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mybee.app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle: "Achievements and Some Other Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Bronze Dot Award",
      subtitle:
        "Received the prestigious Bronze Dot Award for Delivery Excellence at Deloitte for outstanding project delivery, leadership, and innovation in software development.",
      image: require("./assets/images/deloitte.png"),
      footerLink: [
        {
          name: "Bronze Dot Award"
        }
      ]
    },
    {
      title: "Top 5 in Product Hunt",
      subtitle:
        "Developed and deployed mybeeapp.com which got 300+ upvotes in Product Hunt.",
      image: require("./assets/images/ph.png"),
      footerLink: [
        {
          name: "300+ upvotes",
          url: "https://www.producthunt.com/posts/mybee-app"
        }
      ]
    },
    {
      title: "100K+ Downloads",
      subtitle:
        "Developed Android Apps that got 100K+ downloads in Play Store.",
      image:
        "https://www.xda-developers.com/files/2017/01/Google-Play-Store-Feature-Image-Background-Colour-1024x683.png",
      footerLink: []
    },
    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certification from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: []
    },
    {
      title: "Certified AWS Cloud Practitioner",
      subtitle: "Achieved AWS Cloud Practitioner Certification.",
      image: require("./assets/images/aws.png"),
      footerLink: [
        {
          name: "AWS Certification"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1416-845-2982",
  email_address: "tariqule@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
