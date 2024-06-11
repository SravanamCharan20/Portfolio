export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
  { name: "My Github", link: "https://github.com/SravanamCharan20" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Learning a new tech Stack",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Authentication",
    des: "Authentication in a MERN stack involves setting up a Node.js and Express.js backend with MongoDB for data storage and React.js for the frontend, using JWT tokens for secure authentication. Key steps include initializing the project, installing dependencies, and managing user sessions via the frontend.",
    img: "/hi.webp",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/node.svg", "/fb.svg"],
    link: "https://authentication-1-yk0m.onrender.com",
  },
  {
    id: 2,
    title: "Google Search Clone",
    des: "Build a Google search clone with Next.js, Tailwind CSS, and Google Search Engine API for live search functionality.",
    img: "/Google.png",
    iconLists: ["/next.svg", "/tail.svg", "/node.svg", "/gapi.svg", "/js.svg"],
    link: "https://google-searchclone.vercel.app/",
  },
  {
    id: 3,
    title: "IMDB Clone",
    des: "IMDb is an online database for movies, TV shows, and celebrities, offering ratings, reviews, and extensive information,created with Next Js and Tailwind Css",
    img: "/IMDB.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "/node.svg"],
    link: "https://imbd-chi.vercel.app/",
  },
  {
    id: 4,
    title: "Shoppy Admin DashBoard - (UI/UX Design)",
    des: "An admin dashboard built with Tailwind CSS and React offers a responsive, modern UI with customizable components, ensuring efficient state management and dynamic data rendering. ",
    img: "/Blog.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg"],
    link: "https://shoppy6.vercel.app/",
  },
  {
    id: 5,
    title: "BrainWave - (UI/UX Design)",
    des: "Brainstorm is an eye-catching UI/UX designed platform built with React and Tailwind CSS, offering a sleek, responsive interface with dynamic data handling. Tailwind's utility-first styling ensures rapid development, while React provides efficient state management for a seamless user experience.",
    img: "/ai.jpeg",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/vite.svg", "/fm.svg"],
    link: "https://brain-strom-bay.vercel.app/",
  },
  {
    id: 6,
    title: "EShop-(UI/UX Design)",
    des: "Our e-commerce website, featuring a sleek dark mode, is built with React and Tailwind CSS for a modern and responsive shopping experience. The dark mode provides a visually appealing interface that reduces eye strain.",
    img: "/ecom.jpeg",
    iconLists: ["/re.svg", "/boot.svg", "/js.svg", "/vite.svg"],
    link: "https://project-1-wheat-three.vercel.app/",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Intern (Keshav Soft)",
    desc: "Assisted in the development of a web-based platform using Node.js in KeshavSoft software Technogies",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Authentication App Developer",
    desc: "Developed a secure authentication app using React.js for the frontend and Node.js/Express.js for the backend, implementing JWT for user authentication.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Web App Developer",
    desc: "Led the dev of a Web app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/SravanamCharan20",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sravanam-charan-67773b2a7/",
  },
];
