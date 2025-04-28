import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si";
import {
    VscVscode,
    VscCommentUnresolved,
    VscTerminalPowershell,
} from "react-icons/vsc";
import { FaGitAlt, FaXTwitter, FaDribbble } from "react-icons/fa6";
import { MdGroups3 } from "react-icons/md";

import PROJECT_IMG_1 from "";
import PROJECT_IMG_2 from "";
import PROJECT_IMG_3 from "";
import PROJECT_IMG_4 from "";
import PROJECT_IMG_5 from "";
import PROJECT_IMG_6 from "";

export const MENU_LINKS = [
    {id: "01", label: "Home", offset: -100, to: "hero"},
    {id: "02", label: "Skills", offset: -80, to: "skills"},
    {id: "03", label: "About Me", offset: -80, to: "about"},
    {id: "04", label: "Projects", offset: -80, to: "projects"},
    {id: "05", label: "Contact", offset: -80, to: "contact"},
];

export const STATS = [
    {id: "01", count: "10", label: `Years of \nExperience`},
    {id: "02", count: "12", label: `Certifications \nEarned`},
    {id: "03", count: "10", label: `Projects \nCompleted`},
    {id: "04", count: "37+", label: `Happly \nClients`},
];

export const SKILL_TABS = [
    {id: "01", label: "All", value: "all"},
    {id: "02", label: "Frontend", value: "frontend"},
    {id: "03", label: "Backend", value: "backend"},
    {id: "04", label: "Tools", value: "tools"},
    {id: "05", label: "Skills", value: "soft-skills"},
];

export const SKILLS = [
    {
        id: "01",
        icon: FaReact,
        skills: "React JS",
        progress: 95,
        type: "frontend",
        description: "",
    },
    {
        id: "02",
        icon: FaHtml5,
        skills: "HTML",
        progress: 99,
        type: "frontend",
        description: "",
    },
];

export const ABOUT_ME = {
    content: ``,
    socialLinks: [
        {id: "01", label: "Facebook", icon: FaFacebook, link: "#"},
        {id: "02", label: "Instagram", icon: FaInstagram, link: "#"},
        {id: "03", label: "Twitter", icon: FaXTwitter, link: "#"},
        {id: "04", label: "LinkedIn", icon: FaLinkedin, link: "#"},
        {id: "05", label: "Dribble", icon: FaDribbble, link: "#"},
    ],
    email: "janindumaleesha99@gmail.com",
    phone: "+94 77 856 7109",
    website: "#",
};

export const PROJECTS = [
    {
        id: 1,
        title: "",
        image: PROJECT_IMG_1,
        tags: ["React", "Express.js", "MongoDB", "Node.js"],
    },
    {
        id: 2,
        title: "",
        image: PROJECT_IMG_2,
        tags: ["React", "Express.js", "MongoDB", "Node.js"],
    },
    {
        id: 3,
        title: "",
        image: PROJECT_IMG_3,
        tags: ["React", "Express.js", "MongoDB", "Node.js"],
    },
    {
        id: 4,
        title: "",
        image: PROJECT_IMG_4,
        tags: ["React", "Express.js", "MongoDB", "Node.js"],
    },
    {
        id: 5,
        title: "",
        image: PROJECT_IMG_5,
        tags: ["React", "Express.js", "MongoDB", "Node.js"],
    },
    {
        id: 6,
        title: "",
        image: PROJECT_IMG_6,
        tags: ["React", "Express.js", "MongoDB", "Node.js"],
    },
];