import { title } from "process";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

const projectData = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    imageUrl: "/placeholder.jpg",
    liveUrl: "https://www.google.com",
    codeUrl: "...",
    tags: ["React", "Tailwind CSS"],
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    imageUrl: "/placeholder.jpg",
    liveUrl: "",
    codeUrl: "...",
    tags: ["PHP", "JQuery"],
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    imageUrl: "/placeholder.jpg",
    liveUrl: "https://www.bing.com",
    codeUrl: "...",
    tags: ["Python", "Django", "Tailwind CSS", "React"]
  },
  {
    title: "Project 4",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    imageUrl: "/placeholder.jpg",
    liveUrl: "https://www.duckduckgo.com",
    codeUrl: "...",
    tags: ["HTML", "CSS"],
  }
];




export default function Home() {
  return (
    <>
    <Header/>
    <Intro/>
    <Projects projects={projectData}/>
    </>
  );
}
