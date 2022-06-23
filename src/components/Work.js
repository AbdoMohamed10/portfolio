import React, { useState } from "react";
import Separator from "./Separator";

import deceta_dashboard from "../assets/works/deceta/deceta_dashboard.jpeg";
import deceta_form from "../assets/works/deceta/deceta_form.jpeg";
import deceta_input from "../assets/works/deceta/deceta_input.jpeg";
import deceta_code from "../assets/works/deceta/deceta_code.jpeg";
// import weservio from "../assets/works/weservio.PNG";
// import weservio_services from "../assets/works/weservio_services.PNG";
import dietlys_login from "../assets/works/dietlys-vendor/dietlys_login.png";
import dietlys_attrs from "../assets/works/dietlys-vendor/dietlys_attrs.png";
import dietlys_home from "../assets/works/dietlys-vendor/dietlys_home.png";
import dietlys_live_orders from "../assets/works/dietlys-vendor/dietlys_live_orders.png";
import dietlys_order_details from "../assets/works/dietlys-vendor/dietlys_order_details.png";
import dietlys_orders from "../assets/works/dietlys-vendor/dietlys_orders.png";
import dietlys_product_edit from "../assets/works/dietlys-vendor/dietlys_product_edit.png";

import dietlys_client_register from "../assets/works/dietlys-client/register.png";
import dietlys_client_home from "../assets/works/dietlys-client/home.png";
import dietlys_client_home1 from "../assets/works/dietlys-client/home1.png";
import dietlys_client_category_branches from "../assets/works/dietlys-client/categoryBranches.png";
import dietlys_client_branch from "../assets/works/dietlys-client/branch.png";
import dietlys_client_branch1 from "../assets/works/dietlys-client/branch1.png";
import dietlys_client_branch2 from "../assets/works/dietlys-client/branch2.png";
import dietlys_client_branch_details from "../assets/works/dietlys-client/branchDetails.png";
import dietlys_client_cart from "../assets/works/dietlys-client/cart.png";
import dietlys_client_consultation from "../assets/works/dietlys-client/consultation.png";
import dietlys_client_consultation1 from "../assets/works/dietlys-client/consultation1.png";
import dietlys_client_product from "../assets/works/dietlys-client/product.png";

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
							onClick={() => showModal(dietlys_client_home)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_client_home}
							alt=""
							/>
						</div>
					</div>

					<div className="col-md-4 img-box">
						<div
							className="thumbnail"
							onClick={() => showModal(dietlys_client_home1)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_client_home1}
							alt=""
							/>
						</div>
					</div>

					<div className="col-md-4 img-box">
						<div
							className="thumbnail"
							onClick={() => showModal(dietlys_client_category_branches)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_client_category_branches}
							alt=""
							/>
						</div>
					</div>

					<div className="col-md-4 img-box">
						<div
							className="thumbnail"
							onClick={() => showModal(dietlys_client_branch)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_client_branch}
							alt=""
							/>
						</div>
					</div>

					<div className="col-md-4 img-box">
						<div
							className="thumbnail"
							onClick={() => showModal(dietlys_client_branch1)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_client_branch1}
							alt=""
							/>
						</div>
					</div>

					<div className="col-md-4 img-box">
						<div
							className="thumbnail"
							onClick={() => showModal(dietlys_client_branch2)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_client_branch2}
							alt=""
							/>
						</div>
					</div>

					<div className="col-md-4 img-box">
						<div
							className="thumbnail"
							onClick={() => showModal(dietlys_client_branch_details)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_client_branch_details}
							alt=""
							/>
						</div>
					</div>

					<div className="col-md-4 img-box">
						<div
							className="thumbnail"
							onClick={() => showModal(dietlys_client_cart)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_client_cart}
							alt=""
							/>
						</div>
					</div>

					<div className="col-md-4 img-box">
						<div
							className="thumbnail"
							onClick={() => showModal(dietlys_client_consultation)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_client_consultation}
							alt=""
							/>
						</div>
					</div>

					<div className="col-md-4 img-box">
						<div
							className="thumbnail"
							onClick={() => showModal(dietlys_client_consultation1)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_client_consultation1}
							alt=""
							/>
						</div>
					</div>

					<div className="col-md-4 img-box">
						<div
							className="thumbnail"
							onClick={() => showModal(dietlys_client_product)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_client_product}
							alt=""
							/>
						</div>
					</div>

					<div className="col-md-4 img-box">
						<div
							className="thumbnail"
							onClick={() => showModal(dietlys_client_register)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_client_register}
							alt=""
							/>
						</div>
					</div>

					{/* Dietlys Vendor */}
					<div className="col-md-4 img-box">
						<div
							className="thumbnail"
							onClick={() => showModal(dietlys_login)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_login}
							alt=""
							/>
						</div>
					</div>

					<div className="col-md-4 img-box">
						<div
							className="thumbnail"
							onClick={() => showModal(dietlys_attrs)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_attrs}
							alt=""
							/>
						</div>
					</div>

					<div className="col-md-4 img-box">
						<div
							className="thumbnail"
							onClick={() => showModal(dietlys_home)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_home}
							alt=""
							/>
						</div>
					</div>

					<div className="col-md-4 img-box">
						<div
							className="thumbnail"
							onClick={() => showModal(dietlys_live_orders)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_live_orders}
							alt=""
							/>
						</div>
					</div>

					<div className="col-md-4 img-box">
						<div
							className="thumbnail"
							onClick={() => showModal(dietlys_order_details)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_order_details}
							alt=""
							/>
						</div>
					</div>

					<div className="col-md-4 img-box">
						<div
							className="thumbnail"
							onClick={() => showModal(dietlys_orders)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_orders}
							alt=""
							/>
						</div>
					</div>

					<div className="col-md-4 img-box">
						<div
							className="thumbnail"
							onClick={() => showModal(dietlys_product_edit)}
						>
							<img
							className="img-fluid img-thumbnail"
							src={dietlys_product_edit}
							alt=""
							/>
						</div>
					</div>

					{/* Deceta */}
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
          		</div>
        	</div>
      	</div>
    </>
  );
};

export default Work;
