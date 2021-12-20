import React from "react";
import Separator from "./Separator";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ScheduleIcon from "@material-ui/icons/Schedule";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

import "./Experience.css";

const Experience = () => {
  return (
    <>
      <Separator color="#ececec" />
      <div className="experience" id="experience">
        <div className="container">
          <h1>Experience</h1>
          <ul className="exp-list">
            <li>
              <div>
                <h3>Optimal Solutions</h3>
                <p className="duration">
                  <ScheduleIcon /> November 2018 – November 2019
                </p>
                <p className="location">
                  <LocationOnOutlinedIcon />
                  Beirut, Lebanon ( Remotly )
                </p>
                <p className="job-title">
                  <WorkOutlineIcon /> Full-Stack Developer
                </p>
                <h4>Roles</h4>
                <ul>
                  <li>Participated in more than 10 Projects.</li>
                  <li>
                    Updated existing web apps, added new features and fixed
                    bugs.
                  </li>
                  <li>
                    Refactored the admin panel of a famous university in Lebanon
                    (Ouzai University).
                  </li>
                  <li>
                    Added new Feature in the official newspaper in Lebanon.
                  </li>
                  <li>Worked with agile methodology.</li>
                </ul>
              </div>
            </li>
            <hr />
            <li>
              <div>
                <h3>Freelancer</h3>
                <p className="duration">
                  <ScheduleIcon /> January 2018 – Present
                </p>
                <ul className="freelance-list">
                  <li>
                    Developed a desktop application to a Marble Factory and it’s
                    a system to serve the internal operations of the factory
                    from registering the raw materials of stones when entering
                    the factory, passing to manufacturing then sales.
                  </li>
                  <li>
                    Developed a system for a medical center to serve the
                    internal operations of the medical center from registering
                    of the patients and their visits, saving the bills of the
                    purchases, bills of repair devices, lab statements,
                    calculating the salaries, calculating the revenue and
                    expenses for any period of time.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
