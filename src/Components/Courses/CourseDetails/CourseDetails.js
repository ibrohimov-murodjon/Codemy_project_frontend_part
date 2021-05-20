import { Fade, Modal } from "@material-ui/core";
import React from "react";
import "./CourseDetailsCss.css";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

const CoursesModal = ({ card_text, setShow, show, img, title }) => {
  const onclose = () => {
    setShow(false);
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="course-modal"
        open={show}
        style={{ border: "none", outline: "none" }}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={show}>
          <div className="modalContainer">
            <div className="courseDetails">
              <div className="Coursesadminimg">
                <img src={img} className="mediaImage" alt="" />
              </div>

              <div className="CoursesaddHeaderTit1">
                <h1 className="CoursesMtitle">{title} </h1> <br />
                <br />
                <span className="MaddTit">{card_text}</span>
                <br />
                <br />
                <ul className="Mul-check">
                  <li className="MaddFlex">
                    <CheckIcon className="McheckIcon" />
                    <p className="checkTitleCourse">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </li>
                  <li className="MaddFlex">
                    <CheckIcon className="McheckIcon" />
                    <p className="checkTitleCourse">consectetur adipisicing</p>
                  </li>
                  <li className="MaddFlex">
                    <CheckIcon className="McheckIcon" />
                    <p className="checkTitleCourse">Sit dolor repellat esse</p>
                  </li>
                  <li className="MaddFlex">
                    <CheckIcon className="McheckIcon" />
                    <p className="checkTitleCourse">Necessitatibus</p>
                  </li>
                  <li className="MaddFlex">
                    <CheckIcon className="McheckIcon" />
                    <p className="checkTitleCourse">
                      Sed necessitatibus itaque
                    </p>
                  </li>
                </ul>
                <p className="enrollButton">
                  <a href="#" className="enrollPrimary">
                    Enroll Now
                  </a>
                </p>
              </div>
            </div>
            <div className="Cres" onClick={onclose}>
              <CloseIcon />
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default CoursesModal;
