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
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
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
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji("⚡ Fluent in java, javascript, C#"),
    emoji("⚡ Proficient with NodeJS, NestJS and ExpressJS"),
    emoji("⚡ 3 Years experience with Postgres"),
    emoji("⚡ Experience with Tensorflow, Pandas and Numpy"),
    emoji("⚡ Expert in Redux and Flux"),
    emoji("⚡ 4 Years experience with React and React Native"),
    emoji("⚡ Expert in Nginx and PM2")
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
      fontAwesomeClassname: "fab fa-node"
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
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Centennial College",
      logo: require("./assets/images/centennial.jpeg"),
      subHeader: "Software Engineering Technology",
      duration: "September 2017 - April 2020",
      desc: "",
      descBullets: ["", ""]
    },
    {
      schoolName: "Centennial College",
      logo: require("./assets/images/centennial.jpeg"),
      subHeader: "Electronics Engineering Technology",
      duration: "September 2016 - April 2017",
      desc: "",
      descBullets: []
    }
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
      progressPercentage: "80%"
    },
    {
      Stack: "Artificial Intelligence",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Co-Founder & Software Engineer",
      company: "MyBee Technology Inc.",
      companylogo: require("./assets/images/logo.png"),
      date: "June 2018 – Present",
      desc:
        "MyBee App is a platform to connect skilled trades with clients in real-time. We also help small businesses generate more revenue fast by analyzing growth strategies using the power of AI. ",
      descBullets: [
        "Conducted full life-cycle software development in multiple software environments.",
        "Documented technical specifications and project testing methods for future reference and other assignments.",
        "Performed functional, non-functional, regression and performance tests for updated systems.",
        "Developed mobiles apps in React Native, Java and Objective C",
        "Developed web apps using React, Next js and Javascript",
        "Instrumented and modified unit and integration tests to improve software quality and reliability.",
        "Utilized Redux for state management.",
        "Developed and deployed Postgres, MongoDB.",
        "Developed and maintained Google Cloud Functions and Firestore projects."
      ]
    },
    {
      role: "Senior Application Developer",
      company: "Ontario Ministry of Children",
      companylogo: require("./assets/images/ontsrio.webp"),
      date: "May 2019 – May 2020",
      desc: "Developed and tested FRO applications.",
      descBullets: [
        "Collaborated with other members of the team to handle troubleshooting and debugging.",
        `Used variety of technologies, including Java, MVC, HTML5, JavaScript and SQL Server to create
new applications.`,
        "Developed software applications in test-driven development (TDD) environment.",
        `Programmed applications and tools using object-oriented languages with goals of code abstraction,
stability and reuse.`,
        `Implemented unit and integration testing protocols to consistently deliver high quality, functional
features with minimal defects.`,
        `Coordinated ongoing performance assurance for software applications and automated performance
test scripts`,
        `Created Databases with MongoDB.`
      ]
    },
    {
      role: "IT Specialist",
      company: "Bell",
      companylogo: require("./assets/images/Bell_logo.png"),
      date: "Nov 2017 – Mar 2019",
      desc:
        "Bell is Canada's largest telecommunications company, providing Mobile phone, TV, high speed and wireless Internet, and residential Home phone services.",
      descBullets: [
        `Responded to assistance requests from users and directed individuals through basic
        troubleshooting tasks.`,
        `Observed system functioning and entered commands to test different areas of operations.`,
        `Conferred with vendors to obtain replacement hardware or software and escalate more complex
        concerns.`,
        `Removed malware and viruses from laptops and desktop systems using specialized software.`,
        `Explained technology-related details in easy-to-understand terms to individuals from all walks of
        life and in various job positions.`,
        `Delivered local and remote Tier 1 IT support for hardware and software to company personnel.`,
        `Conducted routine maintenance on servers and systems, keeping networks fully operational during
        peak periods.`
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
      image: require("./assets/images/intelocate.png"),
      projectName: "Intelocate",
      projectDesc:
        "Intelocate is the easiest and fastest centralized communications system on the market today to report and resolve issues, incidents, and queries arising in retail and real estate locations. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.intelocate.com/"
        }
        //  you can add extra buttons here.
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
          url: "https://mybeeapp.ca"
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
  subtitle: "Achievements and  Some Other Cool Stuff that I have done !",

  achievementsCards: [
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

        // {
        //   name: "Award Letter",
        //   url:
        //     "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url:
        //     "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "1000+ download",
      subtitle: "Developed Android Apps that got 1000+ downloads in playstore.",
      image:
        "https://www.xda-developers.com/files/2017/01/Google-Play-Store-Feature-Image-Background-Colour-1024x683.png",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url:
        //     "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
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
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
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
