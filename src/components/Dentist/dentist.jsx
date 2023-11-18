import React from "react";
import "./dentist.css";
import { IoMdThumbsUp } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const Dentist = () => {
  const navigate = useNavigate();
  let dentists = [
    {
      name: "Dr.Manoj Rastogi",
      experience: "10",
      address: "Tripula, Raebareli",
      clinicname: "Dr.Manoj's clinic",
      fee: "300",
      stars: "100",
      stories: "17",
      image:
        "https://media.istockphoto.com/id/1309489745/photo/portrait-of-young-happy-indian-business-man-executive-looking-at-camera-eastern-male.jpg?s=612x612&w=0&k=20&c=2hQ4Sm9Puyf1otnVwcyvnY0fk4af-XxHyGqq9ozPpgE=",
    },

    {
      name: "Dr.Disha Maurya",
      experience: "8",
      address: "Lexus Mall, Unnao",
      clinicname: "Dr.Disha's clinic",
      fee: "280",
      stars: "97",
      stories: "10",
      image:
        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R123906462&ga=GA1.1.25292318.1699193944&semt=sph",
    },
    {
      name: "Dr.Priyanshu Kumar Singh",
      experience: "8",
      address: "Chapara, Bihar",
      clinicname: "Dr.Priyanshu's clinic",
      fee: "250",
      stars: "100",
      stories: "7",
      image:
        "https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0=",
    },
    {
      name: "Dr.Akansha Singh",
      experience: "5",
      address: "Kannauj, Uttar Pradesh",
      clinicname: "Dr.Akansha's clinic",
      fee: "200",
      stars: "100",
      stories: "8",
      image:
        "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?size=626&ext=jpg&uid=R123906462&ga=GA1.1.25292318.1699193944&semt=sph",
    },
  ];
  return (
    <>
      <div className="back" onClick={() => navigate(-1)}>
        Back
      </div>
      <div className="conatiner">
        <div className="wrapper-dentist">
          {dentists.map((item) => (
            <>
              <div className="doctor-details">
                <div className="imageconatiner">
                  <img src={item.image} alt="" />
                  <CiCircleCheck className="check" />
                </div>
                <div className="information">
                  <h2 className="name">{item.name}</h2>
                  <h2 className="type">Dentist</h2>
                  <p className="experience">
                    {item.experience} years experience overall
                  </p>
                  <div className="loaction">
                    <div className="address"> {item.address} </div>
                    <p
                      style={{
                        paddingRight: "0.6rem",
                        fontWeight: "bold",
                        color: "rgb(92, 92, 92)",
                      }}
                    >
                      •
                    </p>
                    <div className="clinicname"> {item.clinicname} </div>
                  </div>
                  <h2 className="charges">
                    {" "}
                    &#x20B9; {item.fee} Cunsultation fee at clinic
                  </h2>
                  <div className="rating">
                    <p className="stars">
                      <IoMdThumbsUp
                        style={{ margin: "auto", marginRight: "0.2rem" }}
                      />
                      {item.stars}%
                    </p>
                    <p className="stories">{item.stories} Patient stories</p>
                  </div>
                </div>
                <div className="buttons">
                  <div className="avilability">
                    {" "}
                    <FaCalendarAlt
                      style={{ margin: "auto", marginRight: "0.6rem" }}
                    />
                    Avilable Today
                  </div>
                  <button className="btn">
                    <p
                      style={{
                        margin: "0rem",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      }}
                    >
                      Book Appoinment
                    </p>
                    <p
                      style={{
                        margin: "0rem",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      No Booking Fee
                    </p>
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dentist;
