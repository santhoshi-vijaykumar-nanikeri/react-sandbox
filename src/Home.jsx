import ReduxCounter from "./redux/hooks/ReduxCounter";
import { useForm } from "react-hook-form";
import styles from "./App.module.css";

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "Santhoshi",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Submitted Successfully", data);
  };
  return (
    <>
      <h1>Welcome home!</h1>
      <ReduxCounter />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username: </label>
          <input
            placeholder="username"
            className={styles.input}
            type="text"
            {...register("username", { required: "username is mandatory" })}
          />
          {errors.username && (
            <p className={styles.error}>{errors.username.message}</p>
          )}
        </div>
        <br />
        <div>
          <label>Password: </label>
          <input
            placeholder="password"
            className={styles.input}
            type="password"
            {...register("password", { required: "password is mandatory" })}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>
        <br />

        <div>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Home;
