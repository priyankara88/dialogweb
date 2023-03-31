import Style from "./Footer.module.css";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import ShowerIcon from "@mui/icons-material/Shower";
import NightShelterIcon from "@mui/icons-material/NightShelter";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { IconButton } from "@mui/material";
import { useRef } from "react";

const Footer = () => {
  console.log("Footer re render");
  return (
    <>
      <div className={Style.footer__container}>
        <FooterComponant Icon={HomeIcon} title="Home" />
        <FooterComponant Icon={BuildIcon} title="Support" />
        <FooterComponant Icon={ShowerIcon} title="My Offers" />
        <FooterComponant Icon={NightShelterIcon} title="Notification" />
        <FooterComponant Icon={LocalFireDepartmentIcon} title="Menue" />
      </div>
    </>
  );
};
export default Footer;

const FooterComponant = ({ Icon, title }) => {
  const iconbtnRef = useRef();
  return (
    <IconButton
      ref={iconbtnRef}
      onClick={() => (iconbtnRef.current.style.color = "green")}
      sx={{ color: "red" }}
    >
      <div className={Style.footer__icon}>
        <Icon />
        <p>{title}</p>
      </div>
    </IconButton>
  );
};
