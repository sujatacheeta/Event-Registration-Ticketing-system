import React, { useEffect, useState } from "react";

const MyRegistrations = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/registrations", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setRegistrations(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      className="min-vh-100 p-5"
      style={{
        background: "linear-gradient(135deg, #4B0082, #6A0DAD)",
        position: "relative",
        overflow: "hidden",
      }}
    >

     {/* Optional abstract shapes */}
  <div
    style={{
      position: "absolute",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.05)",
      top: "-50px",
      left: "-50px",
    }}
  ></div>
  <div
    style={{
      position: "absolute",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.05)",
      bottom: "-100px",
      right: "-100px",
    }}
  ></div>


      <h2
        className="text-center mb-4"
        style={{
          color: "#F1EFFF",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
        }}
      >
        My Registrations
      </h2>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {registrations.length === 0 ? (
          <p style={{ color: "#F1EFFF" }}>You have not registered for any events yet.</p>
        ) : (
          registrations.map((reg) => (
            <div
              key={reg.id}
              className="card p-3 shadow-lg"
              style={{
                width: "250px",
                borderRadius: "15px",
                backgroundColor: "rgba(255,255,255,0.95)",
              }}
            >
              <h5 className="mb-2" style={{ color: "#4B0082" }}>
                {reg.eventName}
              </h5>
              <p style={{ color: "#333", fontSize: "0.9rem" }}>
                Registered on: {new Date(reg.date).toLocaleDateString()}
              </p>
              <button
                className="btn w-100 mt-2"
                style={{
                  backgroundColor: "#6A0DAD",
                  color: "#fff",
                  borderRadius: "10px",
                  fontWeight: 500,
                }}
              >
                Download Ticket
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyRegistrations;
