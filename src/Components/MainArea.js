import React from "react";
import cardico1 from "../images/icon-brand-recognition.svg";
import cardico2 from "../images/icon-detailed-records.svg";
import cardico3 from "../images/icon-fully-customizable.svg";
import { useState } from "react";
import List from "../Components/Links";

export default function MainArea() {
  const [itemList, updateItemList] = useState([]);
  const [inputLink, setCurrentinputLink] = useState(""); // Input
  const [orgLink, updateOrg] = useState([]);
  const [shortenLinkFinal, copyShortLink] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    setCurrentinputLink(e.target.value);
    shortenLink(e.target.value);
    e.preventDefault();
  };
  const addLinks = (e) => {
    e.preventDefault();
    if (!inputLink) return;
    if (inputLink === Number) {
      setCurrentinputLink("");
      return alert("Invalid link");
    }
    setCurrentinputLink("");
    updateItemList([...itemList, { input_link: orgLink, short_link: shortenLinkFinal, key: Date.now() }]);
  };
  const shortenLink = async (query) => {
    setLoading(true);
    if (!query) return;
    const shorten = async function () {
      try {
        const resp = await fetch(`https://api.shrtco.de/v2/shorten?url=${query}`);
        if (!resp.ok) throw new Error(resp.status);
        const data = await resp.json();
        updateOrg(data.result.original_link);
        copyShortLink(data.result.short_link3);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    shorten();
  };

  return (
    <section className="main-container">
      <div className="wrapper  ">
        <div className="input-container">
          <div className="input">
            <input value={inputLink} onChange={onChangeHandler} placeholder="Shorten a link here..." />
          </div>
          <div className="shorten-btn-container">
            <button className={!loading ? "shortenLink" : "shortenLinkLoading"} onClick={addLinks}>
              {loading && <p>Please wait</p>} {!loading && <p>Shorten it!</p>}
            </button>
          </div>
        </div>
      </div>
      {loading && <p className="Loading">Please wait. Refresh if I am taking more time</p>}
      <List itemList={itemList} />
      <div className="caption-container">
        <h2 className="mg-sm-bottom">Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced Statistics dashboard</p>
      </div>
      <section className="card-container">
        <span className="fat-line"></span>
        <div className="card card--1">
          <div className="icon">
            <img src={cardico1} alt="Brand Recognition" />
          </div>
          <h4 className="mg-sm-bottom">Brand Recognition</h4>
          <p>
            Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence
            in your content.
          </p>
        </div>
        <div className="card card--2">
          <div className="icon">
            <img src={cardico2} alt="Detailed Records" />
          </div>
          <h4 className="mg-sm-bottom">Detailed Records</h4>
          <p>
            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform
            better decisions.
          </p>
        </div>
        <div className="card card--3">
          <div className="icon">
            <img src={cardico3} alt="Fully Customizable" />
          </div>
          <h4 className="mg-sm-bottom">Fully Customizable</h4>
          <p>
            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
          </p>
        </div>
      </section>
    </section>
  );
}
