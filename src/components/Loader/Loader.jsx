import { ProgressBar } from "react-loader-spinner";
import s from "./Loader.module.css";

export default function BtnUp() {
  return (
    <div className={s.progressBar}>
      <ProgressBar
        visible={true}
        height="80"
        width="120"
        color="#06f42c"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progressar"
      />
    </div>
  );
}
