import React from "react";

const Certificates = () => {
  const handelRWD = () => {
    window.open(
      "https://www.freecodecamp.org/certification/Khamais-Maaroufi/responsive-web-design"
    );
  };
  const handelJS = () => {
    window.open(
      "https://www.freecodecamp.org/certification/Khamais-Maaroufi/javascript-algorithms-and-data-structures"
    );
  };
  const handelFE = () => {
    window.open(
      "https://www.freecodecamp.org/certification/Khamais-Maaroufi/front-end-development-libraries"
    );
  };

  return (
    <section id="CERTIFICATIONS" className="content-sections">
      <div className="Field-for-certificate">
        <div
          className="certificate"
          id="rwd-certif"
          name="certificate-responsive-web-design"
          onClick={handelRWD}
        >
          <div className="redirection-button">
            Show credential
            <img
              src="https://cdn-icons-png.flaticon.com/512/2901/2901214.png"
              className="icon-redirection"
            ></img>
          </div>
        </div>
        {/*break*/}
        <div
          className="certificate"
          id="js-certif"
          name="certificate-responsive-web-design"
          onClick={handelJS}
        >
          <div className="redirection-button">
            Show credential
            <img
              src="https://cdn-icons-png.flaticon.com/512/2901/2901214.png"
              className="icon-redirection"
            ></img>
          </div>
        </div>
        {/*break*/}
        {/*break*/}
        <div
          className="certificate"
          id="fe-certif"
          name="certificate-responsive-web-design"
          onClick={handelFE}
        >
          <div className="redirection-button">
            Show credential
            <img
              src="https://cdn-icons-png.flaticon.com/512/2901/2901214.png"
              className="icon-redirection"
            ></img>
          </div>
        </div>
        {/*break*/}
      </div>
    </section>
  );
};

export default Certificates;
