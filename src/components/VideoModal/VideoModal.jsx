import { useEffect, useState } from "react";
import s from "./VideoModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { requestVideo } from "../../requests-API";

export default function VideoModal({ videoId, isOpen, onRequestClose }) {
  const [errorMessage, setErrorMessage] = useState(false);
  const [video, setVideo] = useState("");
  const [videoButton, setVideoButton] = useState(false);

  useEffect(() => {
    async function movieVideo() {
      try {
        const data = await requestVideo(videoId);
        const videos = data.results;
        console.log(videos);
        const src = videos.find((video) => video.type === "Trailer");
        if (src.key !== "") {
          setVideoButton(true);
          setVideo(src.key);
        }
      } catch (error) {
        error;
        setErrorMessage(true);
      }
    }

    movieVideo();
  }, [videoId]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      backgroundColor: "",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <>
      {/* {errorMessage && <ErrorMessage />} */}
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {videoButton ? (
          <iframe
            src={`//www.youtube.com/embed/${video}?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=ru&modestbranding=1&fs=1&autohide=1`}
            width="1052"
            height="591"
            title="youtube"
          ></iframe>
        ) : (
          <h1 className={s.modalH}>Sorry! No trailer.</h1>
        )}
      </Modal>
    </>
  );
}
