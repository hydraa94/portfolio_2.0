import { PiFileCSharp as csharpIcon } from "react-icons/pi";
import { SiCss3 as css3Icon } from "react-icons/si";
import { VscDatabase as databaseIcon } from "react-icons/vsc";
import { FaGamepad as gameSolidIcon } from "react-icons/fa";
import { MdSportsEsports as gameOutlineIcon } from "react-icons/md";
import { SiGit as gitIcon } from "react-icons/si";
import { FaGithub as githubIcon } from "react-icons/fa";
import { SiHtml5 as html5Icon } from "react-icons/si";
import { SiJavascript as javascriptIcon } from "react-icons/si";
import { HiOutlineDesktopComputer as monitorIcon } from "react-icons/hi";
import { FaNodeJs as nodejsIcon } from "react-icons/fa";
import { FaReact as reactIcon } from "react-icons/fa";
import { SiTailwindcss as tailwindcssIcon } from "react-icons/si";
import { FaTerminal as terminalIcon } from "react-icons/fa";
import { FaTools as toolsIcon } from "react-icons/fa";
import { SiUnity as unityIcon } from "react-icons/si";
import { VscVscode as vscodeIcon } from "react-icons/vsc";
import { SiFirebase as firebaseIcon } from "react-icons/si";
import { SiMysql as mysqlIcon } from "react-icons/si";
import { SiMongodb as mongoIcon } from "react-icons/si";
import { SiNextdotjs as nextjsIcon } from "react-icons/si";
import { MdLightMode as lightIcon } from "react-icons/md";
import { MdDarkMode as darkIcon } from "react-icons/md";
import { MdComputer as systemIcon } from "react-icons/md";
import { FaInstagram as instagramIcon } from "react-icons/fa";
import { FaItchIo as itchIoIcon } from "react-icons/fa";
import { FaDiscord as discordIcon } from "react-icons/fa";
import { FaLinkedin as linkedInIcon } from "react-icons/fa";
import { type IconType } from "react-icons";

export interface Icons {
  icon: IconType;
  color?: string;
}

export const Icons = {
  csharpIcon: { icon: csharpIcon, color: "#239120" },
  css3Icon: { icon: css3Icon, color: "#1572B6" },
  databaseIcon: { icon: databaseIcon, color: "#4DB33D" },
  gameSolidIcon: { icon: gameSolidIcon, color: "#FF9800" },
  gameOutlineIcon: { icon: gameOutlineIcon, color: "#FF9800" },
  gitIcon: { icon: gitIcon, color: "#F05032" },
  githubIcon: { icon: githubIcon, color: "#181717" },
  html5Icon: { icon: html5Icon, color: "#E34F26" },
  javascriptIcon: { icon: javascriptIcon, color: "#F0DB4F" },
  monitorIcon: { icon: monitorIcon, color: "#00BFFF" },
  nodejsIcon: { icon: nodejsIcon, color: "#339933" },
  reactIcon: { icon: reactIcon, color: "#61DAFB" },
  tailwindcssIcon: { icon: tailwindcssIcon, color: "#06B6D4" },
  terminalIcon: { icon: terminalIcon, color: "#4E4E4E" },
  toolsIcon: { icon: toolsIcon, color: "#FFC107" },
  unityIcon: { icon: unityIcon, color: "#000000" },
  vscodeIcon: { icon: vscodeIcon, color: "#007ACC" },
  firebaseIcon: { icon: firebaseIcon, color: "#FFCA28" },
  mysqlIcon: { icon: mysqlIcon, color: "#4479A1" },
  mongoIcon: { icon: mongoIcon, color: "#47A248" },
  nextjsIcon: { icon: nextjsIcon, color: "#000000" },
  lightIcon: { icon: lightIcon, color: "#FFD700" },
  darkIcon: { icon: darkIcon, color: "#1E1E1E" },
  systemIcon: { icon: systemIcon, color: "#808080" },
  instagramIcon: { icon: instagramIcon, color: "#8841A6" },
  itchIoIcon: { icon: itchIoIcon, color: "#FA6161" },
  discordIcon: { icon: discordIcon, color: "#7289D9" },
  linkedInIcon: { icon: linkedInIcon, color: "#0077B5" },
} as const;
