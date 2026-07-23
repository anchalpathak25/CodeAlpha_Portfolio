import { motion } from "framer-motion";
import food from "../assets/food.jpeg";
import ticTacToe from "../assets/tic-tac-toe.jpeg";
import calculator from "../assets/calculator.jpeg";
import weather from "../assets/weather.jpeg";
import coffee from "../assets/coffee.jpeg";
import chatapp from "../assets/chatapp.jpeg";
import zomato from "../assets/zomato.jpeg";
import "./Projects.css";
const projects = [
  {
    title: "Food Website",
    desc: "Responsive food website.",
    tech: ["HTML", "CSS"],
    image: food,
  },
  {
    title: "Tic Tac Toe",
    desc: "Interactive game.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: ticTacToe,
  },
  {
    title: "Calculator",
    desc: "Simple calculator application.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: calculator,
  },
  {
    title: "Weather App",
    desc: "Weather forecasting application.",
    tech: ["React", "API"],
    image: weather,
  },
  {
    title: "Coffee Website",
    desc: "Responsive coffee website.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: coffee,
  },
  {
    title: "Chat App",
    desc: "Real-time chat application.",
    tech: ["React", "Node.js", "Socket.io"],
    image: chatapp,
  },
  {
    title: "Zomato Reels",
    desc: "Food delivery application.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: zomato,
  },

];
function Projects() {
  return (
    <>
      <h2 className="project-title">
 <span>Projects</span>
</h2>
    <motion.section
  id="projects"
  className="projects"
  initial={{ opacity: 0, x: 120 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false }}
>
        {projects.map((project, index) => (
         <motion.div
  key={index}
  className="project-card"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
          <motion.img
  src={project.image}
  alt={project.title}
  width="300"
  whileHover={{ scale: 1.1 }}
  transition={{ duration: 0.3 }}
/>
            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div>
              {project.tech.map((tech, i) => (
                <span key={i}>{tech} </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.section>
    </>
  );
}

export default Projects;