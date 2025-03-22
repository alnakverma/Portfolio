import { meta, shopify, starbucks, tesla } from "../assets/images";
import c from "../assets/icons/c.svg"; 
import cpp from "../assets/icons/cpp.svg";
import brainwave from "../assets/icons/brainwave.svg"; 
import apple from "../assets/icons/apple.svg";
import gamingworld from "../assets/icons/gamingworld.svg"; 
import xora from "../assets/icons/xora.svg";
import blogging from "../assets/icons/blogging.svg"
import hoobank from "../assets/icons/hoobank.svg"
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: c,
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    }
    
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/alnakverma',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/anuj-kumar-verma-046a71257/',
    }
];

export const projects = [
    {
        iconUrl: brainwave,
        theme: 'btn-back-pink',
        name: 'Brainwave',
        description: 'Developed a sleek and responsive website using React.js and Tailwind CSS, focusing on modern UI/UX principles. Serves as a reference for modern application design with high aesthetic and functional standards.',
        link: 'https://github.com/alnakverma/Brainwave',
        livelink: 'https://brainwave-git-main-anujs-projects-c1787fce.vercel.app/', 
    },
    {
        iconUrl: apple,
        theme: 'btn-back-black',
        name: 'Iphone 15 Clone',
        description: 'Developed a React.js and Tailwind CSS clone of Apple’s iPhone 15 Pro website. Integrated Three.js to render iPhone 15 Pro models in various colors and shapes, enhancing visual appeal',
        link: 'https://github.com/alnakverma/IPhone15',
        livelink: 'https://iphone15clone-git-main-anujs-projects-c1787fce.vercel.app/', 
    },
    {
        iconUrl: hoobank,
        theme: 'btn-back-green',
        name: 'HooBank',
        description: 'Developed a responsive and visually appealing banking website using React.js and Tailwind CSS. Integrated seamless animations and interactive UI elements to enhance user experience.',
        link: 'https://github.com/alnakverma/HooBank',
        livelink: 'https://hoo-bank-git-main-anujs-projects-c1787fce.vercel.app/', 
    },
    {
        iconUrl: xora,
        theme: 'btn-back-blue',
        name: 'Xora',
        description: 'Built a React.js and Tailwind CSS-based SaaS website with a sleek and modern UI/UX. Serves as a reference for designing engaging and professional SaaS platforms.',
        link: 'https://github.com/alnakverma/Xora',
        livelink: 'https://xora-git-main-anujs-projects-c1787fce.vercel.app/', 
    },
    {
        iconUrl: estate,
        theme: 'btn-back-red',
        name: 'Blogging Website',
        description: 'Built a fully responsive blogging website using HTML, CSS, and JavaScript, focusing on modern UI/UX principles. Designed a sleek and user-friendly interface to enhance readability and engagement.',
        link: 'https://github.com/alnakverma/blogger',
        livelink: 'https://alnakverma.github.io/blogger/', 
    },
    {
        iconUrl: gamingworld,
        theme: 'btn-back-yellow',
        name: 'Gaming World',
        description: 'Developed an interactive gaming platform using React.js and Tailwind CSS, focusing on a futuristic and immersive UI. Enhanced user engagement through smooth transitions, interactive elements, and a responsive layout.',
        link: 'https://github.com/alnakverma/Gaming-World',
        livelink: 'https://gaming-world-git-main-anujs-projects-c1787fce.vercel.app/', 
    }
];