import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import "../styles/department-module.css"
import { Link } from "gatsby";


export default function Department() {

  const [departmentCard1, setDepartmetnCard1] = useState();
  const [departmentCard, setDepartmetnCard] = useState();


  const getDepartmetnData1 = async () => {
 
  };
  getDepartmetnData1();



  const getDepartmetnData = async () => {
    let fetchData = await fetch('http://localhost:1337/api/department-cards?populate=*');
    let jsonData = await fetchData.json();
    let finalData = jsonData.data
    console.log("finalData", finalData);
    setDepartmetnCard(finalData);

    let fetchData1 = await fetch('http://localhost:1337/api/departments?populate=*');
    let jsonData1 = await fetchData1.json();
    let finaldata1 = jsonData1.data[0]
    console.log("finaldata1", finaldata1);
    setDepartmetnCard1(finaldata1);
  };
  useEffect(() => {
    getDepartmetnData();
  }, []);


  return (
    <Layout>
      <div className="department_frame ">
        <div className="department_module">
          <div className="department">
            <h1>Our Services</h1>
          </div>
        </div>

        <div className="our_department">
          <h2> {departmentCard1?.attributes.title} </h2>
          <p> {departmentCard1?.attributes.body} </p>
        </div>

        <div className="main_card ">
          {departmentCard?.map(ele => (
            <div className="card " key={ele.id}>
              <div className="department_card_image">
                <img alt="loading" className="card_image" src={`http://localhost:1337${ele.attributes.image.data[0].attributes.url}`} />
              </div>
              <div className="card-body">
                <h5 className="card-title"> {ele.attributes.title} </h5>
                <p className="card-text"> {ele.attributes.body} </p>
                <Link to="/" className="btn btn_primary">Go somewhere</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}




