import { title } from "process";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import { Rubik, Ubuntu} from "next/font/google";
import Menu from "@/components/Menu";


//const rubik = Rubik({ subsets: ['latin']})
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '700']})


export default function Home() {
  return (
    <main className={ubuntu.className}>
    <Menu/>
    <Intro/>
    </main>
  );
}
