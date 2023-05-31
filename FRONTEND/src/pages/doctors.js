import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import "../styles/doctors-module.css"

export default function Doctors({ data }) {

  const [doctorsCard, setDoctorCard] = useState();
  const [doctorText, setDoctorText] = useState();

  const getDoctorsCard = async () => {
    let fetchData = await fetch('http://localhost:1337/api/doctors-cards?populate=*');
    let jsonData = await fetchData.json();
    let finaldata = jsonData.data;
    console.log("finaldata", finaldata);
    setDoctorCard(finaldata);

    let fetchText = await fetch("http://localhost:1337/api/doctor-texts");
    let jsonText = await fetchText.json();
    let finalText = jsonText.data[0];
    console.log("finalText", finalText);
    setDoctorText(finalText)

  };
  useEffect(() => {
    getDoctorsCard();
  }, []);


  return (
    <Layout>
      <div className="doctors_page">
        <div className="doctors_frame">
          <div className="doctors">
            <h1> {doctorText?.attributes.title} </h1>
          </div>
        </div>

        <div className="doctor_page" >
          <h1> {doctorText?.attributes.title2} </h1>

          <div className="doctor_list">
            {doctorsCard?.map(ele => (
              <div className="doctor_card" key={ele.id}>
                <div className="doctor_card_image">
                  <img className="doctors_image" src={`http://localhost:1337${ele.attributes.image.data[0].attributes.url}`} alt="loading.." />
                </div>
                <div className="card-body">
                  <h3>Doctor Name</h3>
                  <p>Neurologist</p>
                </div>
              </div>
            ))};
          </div>
        </div>
      </div>
    </Layout>
  )
}

