import { useRef, useState } from "react";
import Style from "./HomeBody.module.css";
import BuildIcon from "@mui/icons-material/Build";

import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase/firebase";

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

const datatype = [
  { type: "Internet card", mb: "604 MB", price: "Rs 119", status: "Active" },
  { type: "Internet card", mb: "1.31 GB", price: "Rs 239", status: "Active" },
  { type: "Any Time", mb: "0.7 GB", price: "Rs 77", status: "Active" },
  { type: "Any Time", mb: "1 GB", price: "Rs 105", status: "Active" },
  { type: "Any Time", mb: "1.7 GB", price: "Rs 155", status: "Active" },
  // { type: "Data Add On", mb: "1 GB", price: "Rs 96 + Tax", status: "Active" },
  // { type: "Data Add On", mb: "2 GB", price: "Rs 168 + tax", status: "Active" },
];

const FireBase = () => {
  addDoc(collection(db, "money"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  })
    .then((docRef) => {
      console.log(123);
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.log(123);
      console.error("Error adding document: ", error);
    });
};

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
        <div className={Style.main_info}>
          Hear's info as at 11:02 AM Today pull of refersh
        </div>
      </div>

      {/* refresh */}
      <div className={Style.home__body__refresh}></div>

      {/* main contant */}

      <MainContent />

      <button onClick={FireBase}>click</button>
    </div>
  );
};

export default HomeBody;

const MainContent = () => {
  const [selectedTab, setSelectedTab] = useState("money");
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

        {/* riging tones */}
        <Rigingtones />

        {/* All pakeges */}
        <Allpakages />
        {/* Other Services */}
        <Otherservices />
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
      <div className={Style.TONES_title}>Quick Reload</div>
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
      <div className={Style.TONES_title}>Recommended Data Pakages</div>
      <div className={Style.Recomendeddatapakage_maincontainer}>
        {datatype.map((obj) => (
          <div className={Style.Recomendeddatapakage_pakeges_container}>
            <div className={Style.Recomendeddatapakage_validDate}>
              <p className={Style.valid}>valid for 21 days</p>
            </div>
            <div className={Style.Recomendeddatapakage_other_detais}>
              <p className={Style.valid}>{obj.type}</p>
              <p className={Style.mb}>{obj.mb}</p>
              <p className={Style.rs}>{obj.price}</p>
              <p className={Style.active}>{obj.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Rigingtones = () => {
  return (
    <div>
      <div className={Style.TONES_title}> Ringing Tones</div>
      <div className={Style.riging_tones_main_container}>
        <p className={Style.RingIN}>RingIN</p>
        <p className={Style.TONES}>TONES</p>
      </div>
    </div>
  );
};

const Allpakages = () => {
  return (
    <div>
      <div className={Style.TONES_title}>All Pakages</div>
      <div className={Style.allpakages_main_container}>
        <div className={Style.allpakages_sub_container}>
          <BuildIcon sx={{ color: "#54014c" }} />
          <p className={Style.TONES}>Data pakages</p>
        </div>
        <div className={Style.allpakages_sub_container}>
          <BuildIcon sx={{ color: "#54014c" }} />
          <p className={Style.TONES}>Combo Pakages</p>
        </div>
        <div className={Style.allpakages_sub_container}>
          <BuildIcon sx={{ color: "#54014c" }} />
          <p className={Style.TONES}>Voice Pakages</p>
        </div>
      </div>
    </div>
  );
};

const Otherservices = () => {
  return (
    <div>
      <div className={Style.TONES_title}>Other Services</div>
      <div className={Style.allpakages_main_container}>
        <div className={Style.allpakages_sub_container}>
          <BuildIcon sx={{ color: "#54014c" }} />
          <p className={Style.TONES}>
            Get Your New
            <br /> Conection
          </p>
        </div>
        <div className={Style.allpakages_sub_container}>
          <BuildIcon sx={{ color: "#54014c" }} />
          <p className={Style.TONES}>My Plan</p>
        </div>
        <div className={Style.allpakages_sub_container}>
          <BuildIcon sx={{ color: "#54014c" }} />
          <p className={Style.TONES}>Share credit</p>
        </div>
        <div className={Style.allpakages_sub_container}>
          <BuildIcon sx={{ color: "#54014c" }} />
          <p className={Style.TONES}>Upgrade to postpaid</p>
        </div>
      </div>
    </div>
  );
};
