import coursesIcon from "/src/images/icons/courses.svg";
import tutorialsIcon from "/src/images/icons/tutorials.svg";
import pricingIcon from "/src/images/icons/certificates.svg";
import accountIcon from "/src/images/icons/account.svg";
import profileIcon from "/src/images/icons/profile.svg";
import settingsIcon from "/src/images/icons/settings.svg";
import signoutIcon from "/src/images/icons/signout.svg";

export const menuData = [
  { title: "Skills", icon: coursesIcon, link: "#Skills" },
  { title: "Projects", icon: tutorialsIcon, link: "#Projects" },
  { title: "Bio", icon: pricingIcon, link: "#Bio" },
  { title: "", icon: accountIcon, link: "/account" },
];

export const tooltipData = [
  { title: "Skills", icon: profileIcon, link: "#Skills" },
  { title: "Projects", icon: settingsIcon, link: "#Projects" },
  { title: "Bio", icon: signoutIcon, link: "#Bio" },
];