// import { aim1, aim2, aim3 } from "../assets";
// import { progress1, progress2, progress3, progress4 } from "../assets";
import aim1 from "../assets/aim1.png";
import aim2 from "../assets/aim2.png";
import aim3 from "../assets/aim3.png";

import progress from "../assets/progress.png";
import progress1 from "../assets/progress1.png";
import progress2 from "../assets/progress2.png";
import progress3 from "../assets/progress3.png";
import progress4 from "../assets/progress4.png";

// import service1 from "../assets/service1.svg";
// import service2 from "../assets/service2.svg";
// import service3 from "../assets/service3.svg";
// import service4 from "../assets/service4.svg";
// import service5 from "../assets/service5.svg";
// import service6 from "../assets/service6.svg";
import { ReactComponent as Service1 } from "../assets/service1.svg";
import { ReactComponent as Service2 } from "../assets/service2.svg";
import { ReactComponent as Service3 } from "../assets/service3.svg";
import { ReactComponent as Service4 } from "../assets/service4.svg";
import { ReactComponent as Service5 } from "../assets/service5.svg";
import { ReactComponent as Service6 } from "../assets/service6.svg";

import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import testiIcon from "../assets/testiIcon.png";
// import { BeakerIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "aboutus",
    title: "About Us",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "progress",
    title: "Progress",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

export const AimsData = [
  { content: "Bring together people, process, and technology", icon: aim1 },
  { content: "Custom solutions designed to meet your needs", icon: aim2 },
  { content: "Software built with the user’s experience in mind", icon: aim3 },
];
export const Abouts = [
  { content: "We always focus on technical excellence" },
  { content: "Wherever you’re going, we bring ideas and excitement" },
  { content: "We’re consultants, guides, and partners for brands" },
];
export const ServicesData = [
  {
    service: "Information Systems Strategy",
    icon: <Service1 className="w-10 text-lightgrey" />,
  },
  {
    service: "Custom Software",
    icon: <Service2 className="w-10  text-lightgrey" />,
  },
  {
    service: "Integration Services",
    icon: <Service3 className="w-10 text-lightgrey" />,
  },
  {
    service: "Web, Ecommerce & Mobile Apps",
    icon: <Service4 className="w-10 text-lightgrey" />,
  },
  {
    service: "Business Automation",
    icon: <Service5 className="w-10 text-lightgrey" />,
  },
  { service: "Creativity", icon: <Service6 className="w-10 text-lightgrey" /> },
];
export const ProgressData = [
  {
    heading: "Experience the Power of Process.",
    content:
      "Instead of focusing just on the problem, we take the holistic approach so we can build a solution that works end to end. ",
    icon: progress,
  },
  {
    heading: "Discover",
    content:
      "Every project starts with understanding the challenge and the landscape...",
    icon: progress1,
  },
  {
    heading: "Design",
    content: "...allowing us to design a solution that meets your needs...",
    icon: progress2,
  },
  {
    heading: "Develop",
    content: "...keeping development quality high and costs low...",
    icon: progress3,
  },
  {
    heading: "Deliver",
    content: "...resulting in a tailored solution that provides you value.",
    icon: progress4,
  },
];

export const TestimonialsData = [
  {
    img: person1,
    icon: testiIcon,
    heading: "I couldn't be any happier. Highly recommended!",
    name: "Marcus W.",
    job: "Developer",
  },
  {
    img: person2,
    icon: testiIcon,
    heading: "Great service and custom service! Perfect!",
    name: "Jessy K.",
    job: "Front-End Developer",
  },
  {
    img: person3,
    icon: testiIcon,
    heading: "Perfect. Just perfect!I can’t say anything.",
    name: "Marina J.",
    job: "HR Officer",
  },
];
export const FooterData = [
  {
    heading: "COMPANY INFO",
    first:
      "Reach out to us anytime and lets create a better future for all technology users together, forever. We are open to all types of collab offers and tons more.",
    second: "Office Hours Monday-Friday 9 AM-5 PM PST",
    third: "Support Hours 24/7 365",
  },
  {
    heading: "CONTACT INFO",
    first: "info@techyessolutions.com",
    second: "858-227-4878",
  },
  {
    heading: "OUR SERVICES",
    first: "Information Systems Strategy",
    second: "Custom Software",
    third: "Integration Services",
    fifth: "Business Automation",
    six: "Web, Ecommerce & Mobiel Apps",
    sevens: "Creative",
  },
];
