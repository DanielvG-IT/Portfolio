import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedin />,
    path: "https://linkedin.com/in/daniel-v-ginneken/",
    hidden: false,
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/DanielvG-IT",
    hidden: false,
  },
  {
    icon: <FaYoutube />,
    path: "https://youtube.com/@danielvanginneken",
    hidden: true,
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/GinnekenDaniel",
    hidden: true,
  },
  {
    icon: <FaInstagram />,
    path: "https://instagram.com/daniel.van.ginneken/",
    hidden: true,
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        if (item.hidden) return null;
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
