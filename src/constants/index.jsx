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

export const CTAs = [
  { text: "Get Started", link: "#", 
    icons:[<Rocket size={20}/>,<ArrowRight size={20}/>] },
  { text: "How it works", link: "#"},
]

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
    social: [{name: "Twitter", link: "#" }, {name: "Dribbble", link: "#" }, {name: "Linkedin", link: "#" }],
  },
  {
    image: team2,
    name: "Michael L.",
    role: "Product Designer",
    description: "Michael got a sharp eye for detail and the ability to turn any boring interface into a work of art.",
    social: [{name: "Twitter", link: "#" }, {name: "Dribbble", link: "#" }, {name: "Linkedin", link: "#" }],
  },
  {
    image: team3,
    name: "Lauren M.",
    role: "UX Designer",
    description: "Lauren is the mastermind behind all the seamless user experiences you love. She's a wizard at making things intuitive.",
    social: [{name: "Twitter", link: "#" }, {name: "Dribbble", link: "#" }, {name: "Linkedin", link: "#" }],
  },
];

export const logos = [
  { name: "Loom", image: LoomLogo, link:"#"},
  { name: "Stack", image: StackLogo, link:"#"},
  { name: "Spotify", image: SpotifyLogo, link:"#"},
  { name: "Discord", image: DiscordLogo, link:"#"},
  { name: "Kickstarter", image: KickstarterLogo, link:"#"},
  { name: "Dropbox", image: DropboxLogo, link:"#"},
];

/*  
import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";


export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
*/