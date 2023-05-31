import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import "../styles/homepage-module.css"



export default function Home() {

  const [homepageText, setHomepageText] = useState();
  const [homepageContent, setHomepagecontent] = useState();
  const [welcomeBox, setWelcomeBox] = useState();
  const [leadingBox, setLeadingBox] = useState();
  const [framebox, setFrameBox] = useState();


  //----------hometext----------//
  const getHometext = async () => {
    let fetchText = await fetch('http://localhost:1337/api/homepage-texts');
    let jsonText = await fetchText.json();
    let finalText = jsonText.data[0];
    setHomepageText(finalText);


    //--------------homecontent---------//
    let fetchContent = await fetch('http://localhost:1337/api/homepage-contents?populate=*');
    let jsonContent = await fetchContent.json();
    let finalcontent = jsonContent.data;
    console.log("finalcontent",finalcontent);
    setHomepagecontent(finalcontent);


    //-----------welcome-box-------------//
    let fetchWelcomeBox = await fetch('http://localhost:1337/api/homepage-welcomes?populate=*');
    let jsonWelcomeBox = await fetchWelcomeBox.json();
    console.log("jsonWelcomeBox", jsonWelcomeBox);

    let welcomeBox = jsonWelcomeBox.data[0];
    setWelcomeBox(welcomeBox);

    let leadingBoxData = jsonWelcomeBox.data[1];
    setLeadingBox(leadingBoxData);

    let frameData = jsonWelcomeBox.data[2];
    console.log("frameData", frameData);
    setFrameBox(frameData);
  };

  useEffect(() => {
    getHometext();
  }, []);


  return (
    <Layout>
      <div className="main_page">
        <div className="frame">
          <div className="frame_heading">
            <h1> {homepageText?.attributes.titleMain} </h1>
            <h2> {homepageText?.attributes.titleSub} </h2>
            <p> {homepageText?.attributes.body} </p>
            <div className="frame_button">
              <Link to="/department">Check Our Services</Link>
            </div>
          </div>
        </div>


        <div className="content_block">
          <div className="matter">

            {homepageContent?.map(ele => (
              <div className="hospitality" key={ele.id}>
                <img className="content_icon" src={`http://localhost:1337${ele?.attributes.image.data[0].attributes.url}`} alt="loading.." />
                <h2> {ele?.attributes.title} </h2>
                <p> {ele?.attributes.body} </p>

                <div className="xyz">
                  <Link className="content_link" to="/"> {ele?.attributes.link} </Link>
                </div>
              </div>
            ))};
          </div>
        </div>


        <div className="welcome_box">
          <div className="welcome_image">
            <img className="image" src={"http://localhost:1337/uploads/large_welcome_image_f8437d67d9.jpg"} alt="loading.." />
          </div>
          <div className="welcome_details">
            <h4> {welcomeBox?.attributes.titleMain} </h4>
            <h1> {welcomeBox?.attributes.titleSub} </h1>
            <p> {welcomeBox?.attributes.body} </p>
            <div className="welcome_button">
              <Link to="/">Learn More</Link>
            </div>
          </div>
        </div>


        <div className="leading_edge">
          <div className="leading_edge_details">
            <img src={"http://localhost:1337/uploads/first_aid_kit_85e25160da.png"} alt="loading.." />
            <h3> {leadingBox?.attributes.title} </h3>
            <p> {leadingBox?.attributes.body} </p>
          </div>
          <div className="leading_edge_image">
            <img className="lead_img" src={'http://localhost:1337/uploads/thumbnail_leading_image_1d2b77b85b.jpg'} alt="loading.." />
          </div>
        </div>

        <div className="frame_2">
          <div className="frame_2_details">
            <p> {framebox?.attributes.body} </p>
          </div>

        </div>
      </div>
    </Layout>


  )
}