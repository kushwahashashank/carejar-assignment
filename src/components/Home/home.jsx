import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="conatiner-1">
        <p className="heading">
          Book an appoinment for an in-clinic consultation
        </p>
        <p className="subhead">
          Find experienced doctors across all specialities.
        </p>
        <div className="wrapper">
          <div className="post">
            <img
              onClick={() => navigate("dentists")}
              src="https://media.istockphoto.com/id/1349328691/photo/young-happy-woman-during-dental-procedure-at-dentists-office.jpg?s=612x612&w=0&k=20&c=H0WBvMhyspSX10Xq65AFhF4DoMLzg8wOpqjjupwTWDE="
              alt="Dentist"
            />
            <p className="post-head">Dentist</p>
            <p className="post-subhead">
              Teething troubles? Schedule a dental checkup
            </p>
          </div>

          <div className="post">
            <img
              src="http://www.saraswatihospitals.com/wp-content/uploads/2019/08/obstetrics-and-gynecology-inner.jpg"
              alt="Dentist"
            />
            <p className="post-head">Gynecologist/Obstetrician</p>
            <p className="post-subhead">
              Explore for women's health, pregnancy and infertility treatments
            </p>
          </div>
          <div className="post">
            <img
              src="https://cdn.dietitiandirectory.com/wp-content/uploads/2022/05/Dietitian-vs.-Dietician-768x512.webp"
              alt="Dentist"
            />
            <p className="post-head">Dietitian/Nutrition</p>
            <p className="post-subhead">
              Get guidance on eating right, weight management and sports
              nutrition
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
