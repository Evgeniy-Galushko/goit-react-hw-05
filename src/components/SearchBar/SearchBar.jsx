import s from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function RequestForm({ handleSubmit }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.elements.message.value.trim().toLowerCase();
    if (text === "") {
      toast.error("Please enter search term!");
      return;
    }
    handleSubmit(text);
    form.reset();
  };
  return (
    <div className={s.div}>
      <form className={s.form} onSubmit={onSubmit}>
        <input
          className={s.input}
          type="text"
          name="message"
          autoComplete="off"
          pattern="^[а-яА-Яa-zA-Z ]{0,100}$"
          title="Введите текст"
          autoFocus
          placeholder="Search for movie"
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
      <div>
        <Toaster
          toastOptions={{
            className: "",
            duration: 3000,
            style: {
              // background: "#0048ff",
              // color: "#fff",
            },
          }}
        />
      </div>
    </div>
  );
}
