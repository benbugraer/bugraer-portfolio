import Gmail from "@/public/icons/GmailIcon";
import LinkedIn from "@/public/icons/LinkedinIcon";
import X from "@/public/icons/XIcon";
import Github from "@/public/icons/GithubIcon";
import Instagram from "@/public/icons/InstagramIcon";
import Bluesky from "@/public/icons/BlueskyIcon";

const ContactLinks = [
  {
    label: "Email",
    href: "mailto:bugraerdev@gmail.com",
    icon: <Gmail className="w-4 h-4" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/benbugraer",
    icon: <Github className="w-4 h-4" />,
  },

  {
    label: "Instagram",
    href: "https://www.instagram.com/benbugraer/",
    icon: <Instagram className="w-4 h-4" />,
  },

  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bugraer/",
    icon: <LinkedIn className="w-4 h-4" />,
  },
  {
    label: "Twitter X",
    href: "https://twitter.com/benbugraer",
    icon: <X className="w-4 h-4" />,
  },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/bugraer.com",
    icon: <Bluesky className="w-4 h-4" />,
  },
];

export default ContactLinks;
