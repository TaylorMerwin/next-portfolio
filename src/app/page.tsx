import { title } from "process";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

const projectData = [
  {
    title: "Bloggy - Technical blogging platform",
    description: "Full stack blogging platform with user authentication and full CRUD functionality.",
    imageUrl: "/placeholder.jpg",
    liveUrl: "https://www.google.com",
    codeUrl: "...",
    tags: ["Node.js", "TypeScript", "Tailwind", "Postgres", "GCP"],
  },
  {
    title: "HuskyHaze - Weather and news application for Android",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    imageUrl: "/placeholder.jpg",
    liveUrl: "",
    codeUrl: "...",
    tags: ["Kotlin", "XML", "Retrofit", "PHP", "SQL"],
  },
  {
    title: "BookStore API - RESTful API for a bookstore",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    imageUrl: "/placeholder.jpg",
    liveUrl: "https://www.bing.com",
    codeUrl: "...",
    tags: ["Express", "Postgres", "Docker", "Postman"]
  },
  {
    title: "Crafty Companion - DIY Project Tracker",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    imageUrl: "/placeholder.jpg",
    liveUrl: "https://www.duckduckgo.com",
    codeUrl: "...",
    tags: ["Java", "Swing", "JUnit"],
  }
];




export default function Home() {
  return (
    <>
    <Intro/>
    <Projects projects={projectData}/>
    </>
  );
}
