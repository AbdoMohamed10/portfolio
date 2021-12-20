import React, { useState } from "react";
import Separator from "./Separator";

import deceta_dashboard from "../assets/works/deceta_dashboard.jpeg";
import deceta_form from "../assets/works/deceta_form.jpeg";
import deceta_input from "../assets/works/deceta_input.jpeg";
import deceta_code from "../assets/works/deceta_code.jpeg";
import weservio from "../assets/works/weservio.PNG";
import weservio_services from "../assets/works/weservio_services.PNG";

import "./Work.css";
import MyModal from "./Modal";

const Work = () => {
  const [show, setShow] = useState(false);
  const [img, setImg] = useState("");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const showModal = (img) => {
    handleShow();
    setImg(img);
  };

  return (
    <>
      <Separator color="#fff" background="#ececec" />
      <div className="work" id="work">
        <div className="container">
          <MyModal img={img} show={show} handleClose={handleClose} />
          <h1>Work</h1>
          <div className="row">
            <div className="col-md-4 img-box">
              <div
                className="thumbnail"
                onClick={() => showModal(deceta_dashboard)}
              >
                <img
                  className="img-fluid img-thumbnail"
                  src={deceta_dashboard}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-4 img-box">
              <div className="thumbnail" onClick={() => showModal(deceta_form)}>
                <img
                  className="img-fluid img-thumbnail"
                  src={deceta_form}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-4 img-box">
              <div
                className="thumbnail"
                onClick={() => showModal(deceta_input)}
              >
                <img
                  className="img-fluid img-thumbnail"
                  src={deceta_input}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-4 img-box">
              <div className="thumbnail" onClick={() => showModal(deceta_code)}>
                <img
                  className="img-fluid img-thumbnail"
                  src={deceta_code}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-4 img-box">
              <div className="thumbnail" onClick={() => showModal(weservio)}>
                <img
                  className="img-fluid img-thumbnail"
                  src={weservio}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-4 img-box">
              <div
                className="thumbnail"
                onClick={() => showModal(weservio_services)}
              >
                <img
                  className="img-fluid img-thumbnail"
                  src={weservio_services}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
