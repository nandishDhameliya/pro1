import React from "react";

const Home = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "550px",
          }}
        />
        <div
          style={{
            position: "absolute",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontStyle: "oblique",
                fontSize: "45px",
                fontWeight: 600,
              }}
            >
              Wellcome To WEB<span style={{ color: "red" }}>log</span>
            </div>
            <div>
              <button
                style={{
                  border: "2px solid #04AA6D",
                  margin: " 8px",
                  padding: "8px 20px",
                  borderRadius: "10%",
                  backgroundColor: "black",
                  color: "white",
                  fontWeight: "bold",
                  borderColor: "white",
                }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="column"
          style={{ backgroundColor: "black", width: "200px", height: "200px" }}
        >
          abc
        </div>
        <div
          class="column"
          style={{ backgroundColor: "black", width: "200px", height: "200px" }}
        >
          abc
        </div>
      </div>
    </div>
  );
};

export default Home;
