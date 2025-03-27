import logo from "../assets/logo.svg"
import { Rocket } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

import FlyingSaucer from '../assets/icons/FlyingSaucer.svg'
import MagicWand from '../assets/icons/MagicWand.svg'
import BoundingBox from '../assets/icons/BoundingBox.svg'
import Package from '../assets/icons/Package.svg'

import user1 from "../assets/images/photo1.png";
import user2 from "../assets/images/photo2.png";

import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";

import LoomLogo from "../assets/icons/LoomLogo.svg";
import StackLogo from "../assets/icons/StackLogo.svg";
import SpotifyLogo from "../assets/icons/SpotifyLogo.svg";
import DiscordLogo from "../assets/icons/DiscordLogo.svg";
import KickstarterLogo from "../assets/icons/KickstarterLogo.svg";
import DropboxLogo from "../assets/icons/DropboxLogo.svg";

import YoutubeLogo from "../assets/icons/YoutubeLogo.svg";
import InstagramLogo from '../assets/icons/InstagramLogo.svg';
import GithubLogo from '../assets/icons/GithubLogo.svg';
import LinkedinLogo from '../assets/icons/LinkedinLogo.svg';

export const CTAs = [
  { text: "Get Started", link: "#", icons: [<Rocket size={20} />, <ArrowRight size={20} />] },
  { text: "How it works", link: "#" },
];

export const testimonials = [
  {
    name: "Lauren M.",
    role: "UI Designer @Boo",
    image: user1,
    text: "“Anima’s Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently.”",
  },
  {
    name: "David B.",
    role: "Lead Designer @Creative",
    image: user2,
    text: "“The Landing Page UI Kit has been a game changer. The pre-designed components and templates have helped us deliver projects faster!”",
  },
];

export const features = [
  {
    icon: FlyingSaucer,
    text: "Fast building",
  },
  {
    icon: MagicWand,
    text: "Easy to edit",
  },
  {
    icon: BoundingBox,
    text: "Responsiveness",
  },
  {
    icon: Package,
    text: "No code needed",
  },
];

export const teamMembers = [
  {
    image: team1,
    name: "Sarah K.",
    role: "Lead Designer",
    description: "With a passion for color and a love for clean lines, Sarah brings all our wildest design dreams to life.",
    social: [{ name: "Twitter", link: "#" }, { name: "Dribbble", link: "#" }, { name: "Linkedin", link: "#" }],
  },
  {
    image: team2,
    name: "Michael L.",
    role: "Product Designer",
    description: "Michael got a sharp eye for detail and the ability to turn any boring interface into a work of art.",
    social: [{ name: "Twitter", link: "#" }, { name: "Dribbble", link: "#" }, { name: "Linkedin", link: "#" }],
  },
  {
    image: team3,
    name: "Lauren M.",
    role: "UX Designer",
    description: "Lauren is the mastermind behind all the seamless user experiences you love. She's a wizard at making things intuitive.",
    social: [{ name: "Twitter", link: "#" }, { name: "Dribbble", link: "#" }, { name: "Linkedin", link: "#" }],
  },
];

export const logos = [
  { name: "Loom", image: LoomLogo, link: "#" },
  { name: "Stack", image: StackLogo, link: "#" },
  { name: "Spotify", image: SpotifyLogo, link: "#" },
  { name: "Discord", image: DiscordLogo, link: "#" },
  { name: "Kickstarter", image: KickstarterLogo, link: "#" },
  { name: "Dropbox", image: DropboxLogo, link: "#" },
];

export const footerSocialLinks = [
  { name: "Youtube", link: "#", icon: YoutubeLogo },
  { name: "Instagram", link: "#", icon: InstagramLogo },
  { name: "Github", link: "#", icon: GithubLogo },
  { name: "Linkedin", link: "#", icon: LinkedinLogo },
];
