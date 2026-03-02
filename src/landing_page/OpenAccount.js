import React from "react";
function OpenAccount() {
  return (
    <section>
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-12">
            <h2
              className="mb-3 "
              style={{ fontSize: "1.75rem", fontWeight: "500" }}
            >
              Open a Zerodha account
            </h2>
            <p className="fs-5 mb-4 text-muted">
              Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
              and F&O trades.
            </p>

            <button
              className="btn btn-primary btn-lg mt-4 px-5 fs-5 py-2 fw-bold singup"
              style={{
                backgroundColor: "#387ed1",
                border: "none",
                borderRadius: "3px",
              }}
            >
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenAccount;

