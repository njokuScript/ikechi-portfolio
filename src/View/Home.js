import React from "react";
import "./Home.css";
import logo from "../assets/logo.png";
import ikechi from "../assets/ikechi.png";
class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <header className="header">
            <img src={logo} alt="logo" />
          </header>
        </div>
        <div className="textcontainer">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="605"
              height="133"
              viewBox="0 0 605 133"
            >
              <text
                id="HELLO_I_M_IKECHI._USER_EXPERIENCE_DESIGNER."
                data-name="HELLO, I'M IKECHI.
USER EXPERIENCE DESIGNER."
                transform="translate(605 50)"
                fill="#e9e9e9"
                font-size="38"
                font-family="Roboto-Bold, Roboto"
                font-weight="700"
                letter-spacing="-0.05em"
              >
                <tspan x="-365.02" y="0">
                  HELLO, I&apos;M IKECHI.
                </tspan>
                <tspan x="-540.275" y="70">
                  USER EXPERIENCE DESIGNER.
                </tspan>
              </text>
            </svg>
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="639"
            height="216"
            viewBox="0 0 639 216"
          >
            <text
              id="I_m_a_goal-driven_team_player_interested_in_creating_seamless_user-friendly_products._I_integrate_well_in_challenging_and_innovative_environments."
              data-name="I’m a goal-driven team player interested in
creating seamless, user-friendly products.
I integrate well in challenging and innovative
environments."
              transform="translate(679 38)"
              fill="#e9e9e9"
              font-size="30"
              font-family="Roboto-Light, Roboto"
              font-weight="300"
              letter-spacing="-0.031em"
              opacity="0.66"
            >
              <tspan x="-607.896" y="0">
                I’m a goal-driven team player interested in
              </tspan>
              <tspan x="-609.697" y="56">
                creating seamless, user-friendly products.
              </tspan>
              <tspan x="-638.772" y="112">
                I integrate well in challenging and innovative
              </tspan>
              <tspan x="-275.729" y="168">
                environments.
              </tspan>
            </text>
          </svg>
        </div>
        <div className="imgcontainer">
          <img src={ikechi} alt="ikechi" width="300px" height="300px" />
        </div>
      </div>
    );
  }
}
export default Home;
