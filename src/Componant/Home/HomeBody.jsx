import { useRef, useState } from "react";
import Style from "./HomeBody.module.css";

const homebodybutton = ["money", "data", "voice", "sms"];
const reloadtype = [
  { price: 100, name: "Buy" },
  { price: 200, name: "Buy" },
  { price: 300, name: "Buy" },
  { price: 400, name: "Buy" },
  { price: 500, name: "Buy" },
  { price: 600, name: "Buy" },
  { price: 700, name: "Buy" },
];
// const maincontenttopbutton=useRef([]);

const HomeBody = () => {
  return (
    <div className={Style.home__body__container}>
      {/* Ads */}
      <div
        onClick={() => {
          // arr[0] = { ...arr[0], age: 25 };
        }}
      >
        test Data 2023-01-25
      </div>

      {/* refresh */}
      <div className={Style.home__body__refresh}></div>

      {/* main contant */}

      <MainContent />
    </div>
  );
};

export default HomeBody;

const MainContent = () => {
  const [selectedTab, setSelectedTab] = useState("amila");
  const homebody__maincontenttop_buttonref = useRef([]);
  return (
    <div>
      {/* Main content top */}
      <div>
        <div className={Style.homebody__maincontentcontainer}>
          <div className={Style.homebody__maincontenttop}>
            {homebodybutton.map((ele, index) => (
              <div
                key={index}
                ref={(ele) =>
                  (homebody__maincontenttop_buttonref.current[index] = ele)
                }
                style={{
                  fontWeight: index === 0 ? "700" : "300",
                  color: index === 0 ? "#54014c" : "black",
                  borderBottom:
                    index === 0 ? "2px solid #50414c" : "2px solid inherit",
                }}
                onClick={() => {
                  setSelectedTab(ele);
                  homebody__maincontenttop_buttonref.current[index].style =
                    "font-weight: 700; color:#54014c; border-bottom:2px solid #50414c";

                  for (let a = 0; a < homebodybutton.length; a++) {
                    if (a !== index) {
                      homebody__maincontenttop_buttonref.current[a].style =
                        "font-weight: 300; color:#000; border-bottom:2px solid inherit";
                    }
                  }
                }}
                className={Style.homebody__maincontenttop_button}
              >
                {ele}
              </div>
            ))}
          </div>
        </div>
        <div className={Style.MainContentBottom_background}>
          {/* main content bottom */}
          <MainContentBottom selTab={selectedTab} />
        </div>
        {/* quick reload */}
        <Quickreload />
        {/* recomended pakage */}
        <Recomendeddatapakage />
      </div>
    </div>
  );
};

const MainContentBottom = ({ selTab }) => {
  if (selTab === "money") {
    return (
      <div>
        <div className={Style.money_layout}>
          <label>Prepaid Balance</label>
          <br />
          <label className={Style.price}>Rs. 0.00</label>
          <br />
          <label>Valid till 16 March 2024 </label>
        </div>
        <div className={Style.usage_history}>
          <div className={Style.usage_button1}>TRANSACTION</div>
          <div className={Style.usage_button2}>RELOAD</div>
        </div>
      </div>
    );
  } else if (selTab === "data") {
    return (
      <div>
        <div className={Style.money_layout}>
          <label>Anytime</label>
          <br />
          <label className={Style.price}>8.52 GB</label>
          <br />
          <label>Valid till 16 March 2024 </label>
        </div>
        <div className={Style.nighttime_data}>
          <div className={Style.money_one}>
            <label>Night time</label>
            <br />
            <label className={Style.price}>173.03 MB</label>
            <br />
            <label>remaining</label>
          </div>
          <div className={Style.money_one}>
            <label>Social Media</label>
            <br />
            <label className={Style.price}>Unlimited</label>
          </div>
        </div>
        <div className={Style.usage_history}>
          <div className={Style.usage_button1}>Usage History</div>
          <div className={Style.usage_button2}>Data ADD ON</div>
        </div>
      </div>
    );
  } else if (selTab === "voice") {
    return (
      <div>
        <div className={Style.money_layout}>
          <label>Any Net Unlimited</label>
          <br />
          <label className={Style.price}>Unlimited</label>
          <br />
          <label>Valid till 16 March 2024 </label>
        </div>
        <div className={Style.usage_historySingle}>
          <div className={Style.usage_button1Single}>USAGE HISTORY</div>
        </div>
      </div>
    );
  } else if (selTab === "sms") {
    return (
      <div>
        <div className={Style.money_layout}>
          <label>Any Net Local</label>
          <br />
          <label className={Style.price}>994 SMS</label>
          <br />
          <label>Valid till 16 March 2024 </label>
        </div>
        <div className={Style.usage_historySingle}>
          <div className={Style.usage_button1Single}>USAGE HISTORY</div>
        </div>
      </div>
    );
  }
};

const Quickreload = () => {
  return (
    <div>
      <div className={Style.quick_reload_main_content}>
        {/* <p className={Style.quickpara}>Quick Reload</p> */}

        {reloadtype.map((obj) => (
          <div className={Style.quickreload_sub_container}>
            <p className={Style.qprice}>{obj.price}</p>
            <p className={Style.qbuy}>{obj.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Recomendeddatapakage = () => {
  return (
    <div>
      <div className={Style.Recomendeddatapakage_maincontainer}>
        <div className={Style.Recomendeddatapakage_subcontainer}>
          <div className={Style.Recomendeddatapakage_pakeges_container}>
            <div className={Style.Recomendeddatapakage_validDate}>
              <p>valid for 21 days</p>
            </div>
            <div className={Style.Recomendeddatapakage_other_detais}>
              <p>Internet card</p>
              <p>604 MB</p>
              <p>Rs 119</p>
              <p>Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
