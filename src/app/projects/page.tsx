import Projects from "@/components/Projects";
import Menu from "@/components/Menu";

const projectData = [
  {
    title: "Bloggy",
    subtitle: "Technical blogging platform",
    description: "Full stack blogging platform with user authentication and full CRUD functionality.",
    imageUrl: "/placeholder.jpg",
    liveUrl: "https://bloggy-414621.wl.r.appspot.com/",
    codeUrl: "https://github.com/TaylorMerwin/bloggy",
    tags: ["Node.js", "TypeScript", "Tailwind"],
  },
  {
    title: "HuskyHaze",
    subtitle: "Weather and news application for Android",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    imageUrl: "/placeholder.jpg",
    liveUrl: "",
    codeUrl: "https://github.com/TaylorMerwin/HuskyHaze",
    tags: ["Kotlin", "XML", "Retrofit", "PHP", "SQL"],
  },
  {
    title: "BookStore API",
    subtitle: "RESTful API for a bookstore",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    imageUrl: "/placeholder.jpg",
    liveUrl: "",
    codeUrl: "https://github.com/TaylorMerwin/group3-book-store-api",
    tags: ["Express", "Postgres", "Docker", "Postman"],
  },
  {
    title: "Crafty Companion",
    subtitle: "Desktop application for tracking DIY projects",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    imageUrl: "/placeholder.jpg",
    liveUrl: "",
    codeUrl: "https://github.com/TaylorMerwin/crafty-companion",
    tags: ["Java", "Swing", "JUnit"],
  },
];

export default function Home() {
  return (
    <main>
      <Menu />
      <Projects projects={projectData} />
    </main>
  );
}
