import Style from "./Header.module.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Header = () => {
  console.log("Header re render");
  return (
    <div>
      <div className={Style.main__header__container}>
        <div className={Style.main__header}>
          <div className={Style.main__icon}>
            <LocalPhoneIcon />
          </div>{" "}
          <div className={Style.main__connection}>
            <h3> 0776010342 </h3>{" "}
            <div className={Style.connection__ststus}>
              <p> Connected </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className={Style.main__rating}> </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Header;
