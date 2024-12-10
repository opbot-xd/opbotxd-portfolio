import {
    SiFlask,
    SiFramer,
    SiDjango,SiRedis,SiPostgresql,SiFlutter,SiPython,SiCelery,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "VidTrust",
        description:
            "This project addresses the challenge of verifying video authenticity and detecting tampering to build trust in digital media. With the rise of misinformation, especially through video content, ensuring integrity is essential. Our solution focuses on three key objectives: User Authentication, Metadata Signing and Tampering Detection.",
        technologies: [SiTypescript, SiReact, SiFlask, SiPython, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Flask", "Python", "Tailwind CSS", "Firebase"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://flask.palletsprojects.com/","https://www.python.org/", "https://tailwindcss.com/", "https://firebase.google.com/docs/firestore"],
        github: "https://github.com/DeenankSharma/b27_project",
        demo: "https://devfolio.co/projects/vidtrust-46fd",
        image: "",
        available: true,
    },
    {
        id: 1,
        name: "Security App IIT-R",
        description:
            "Contributed to the development of a security application for streamlined campus entry and exit, implementing a student ID card scanning system.",
        technologies: [SiTypescript, SiReact, SiDjango, SiTailwindcss, SiRedis, SiPostgresql ],
        techNames: ["TypeScript", "React", "Django", "Tailwind CSS", "Redis", "Postgress"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://flask.palletsprojects.com/", "https://tailwindcss.com/", "https://redis.io/", "https://www.postgresql.org/"],
        github: "https://github.com/karthikmudunuri/VRMALL",
        demo: "https://play.google.com/store/apps/details?id=in.ac.iitr.mdg.securityapp&hl=en_IN",
        image: "",
        available: true,
    },
    {
        id: 2,
        name: "Video Summarizer for Blind",
        description:
            "The app features a straightforward, one-page UI to ensure ease of use for blind users. Each step includes voice audio instructions, allowing users to record videos independently.",
        technologies: [SiFlutter, SiDjango, SiPython , SiCelery, SiPostgresql],
        techNames: ["Flutter", "Django", "Python", "Celery", "Postgress"],
        techLinks: ["https://flutter.dev/", "https://www.djangoproject.com/", "https://www.python.org/", "https://docs.celeryq.dev/", "https://www.postgresql.org/"],
        github: "https://github.com/opbot-xd/Video-Summary-for-blind",
        demo: "",
        image: "",
        available: true,
    },

];
