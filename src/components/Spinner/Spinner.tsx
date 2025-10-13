import style from "./Spinner.module.css"

const Spinner = () => {
    return (
      <div className={style.spinnerContainer}>
        <div className={style.spinner}></div>
        <p className={style.spinnerText}>Loading...</p>
      </div>
    );
}

export default Spinner