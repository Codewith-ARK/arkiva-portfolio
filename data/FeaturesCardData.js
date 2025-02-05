import { MdDesignServices, MdDevices, MdSupportAgent } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaCode, FaShoppingCart } from "react-icons/fa";
import { RiUserStarLine } from "react-icons/ri";
import { BsCashStack } from "react-icons/bs";
import { GiAchievement } from "react-icons/gi";

const featuresData = [
  {
    title: "Custom & Scalable Solutions",
    desc: "We design and develop websites tailored to your unique business goals, ensuring they grow with your brand.",
    icon: <MdDesignServices />,
  },
  {
    title: "SEO-Optimized for Maximum Visibility",
    desc: "Every website we create is SEO-friendly, helping you rank higher on Google and attract more organic traffic.",
    icon: <SiGoogleanalytics />,
  },
  {
    title: "Speed & Performance Focused",
    desc: "Our websites are optimized for lightning-fast loading times, ensuring a seamless user experience and better search rankings.",
    icon: <AiOutlineThunderbolt />,
  },
  {
    title: "Mobile-First, Fully Responsive Design",
    desc: "We build websites that look and function flawlessly on all devices, from desktops to smartphones.",
    icon: <MdDevices />,
  },
  {
    title: "Cutting-Edge Technologies",
    desc: "We use the latest web development tools and frameworks, including React, Next.js, WordPress, and Shopify, to ensure a modern and future-proof website.",
    icon: <FaCode />,
  },
  {
    title: "User Experience (UX) & Conversion Optimization",
    desc: "We focus on intuitive navigation, compelling design, and high conversion rates to turn visitors into paying customers.",
    icon: <RiUserStarLine />,
  },
];

export default featuresData;
