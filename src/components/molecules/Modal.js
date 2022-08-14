import React, { useEffect, useRef } from "react";

const Modal = ({ actModal, videoTrailer, modalActive }) => {
  const iframeRef = useRef(null);
  useEffect(() => {
    if (videoTrailer) {
      console.log(iframeRef);
      const videoSrc = "https://www.youtube.com/embed/" + videoTrailer.key;
      iframeRef.current.setAttribute("src", videoSrc);
    } else {
      iframeRef.current.innerHTML = "No trailer";
    }
  }, [videoTrailer]);

  const onClose = () => {
    modalActive(null, null);
    iframeRef.current.setAttribute("src", "");
  };
  return (
    <div id={`modal`} className={`modal ${actModal ? "active" : ""}`}>
      <div className="modal__content">
        <div className="modal__content__close">
          <i className="bx bx-x" onClick={onClose}></i>
        </div>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
