import React from "react";
import IframeResizer from "iframe-resizer-react";

const RegistrationInfo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg">
          <IframeResizer
            log
            src="https://docs.google.com/forms/d/e/1FAIpQLSeWuOurNvfhIn3c6i59xzFaevwVjGMMzoOYtdrcoVC7GE0y0g/viewform?embedded=true"
            style={{
              minWidth: "100%",
              height: "500px",
              frameborder: "0",
              marginheight: "0",
              marginwidth: "0",
            }}
            scrolling={"yes"}
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationInfo;
