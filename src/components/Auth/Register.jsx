import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/slices/authSlice";
import { Button, Form } from "react-bootstrap";
import styles from "./styles.module.css";
import CustomInput from "../Customs/CustomInput";
const Register = () => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth._id) {
      //   navigate("/cart");
    }
  }, [
    auth._id,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUser(user));
  };

  return (
    <div className={styles.centered}>
      {auth.registerStatus === "rejected" && (
        <div className={styles.errors}>{auth.registerError}</div>
      )}

      <Form onSubmit={handleSubmit}>
        <h1 className={styles.title}>Register</h1>

        <CustomInput
          className={styles.input}
          controlId="formBasicUsername"
          placeholder="Your Username"
          type="text"
          name="username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />


        <CustomInput
          className={styles.input}
          controlId="formBasicEmail"
          type="email"
          placeholder="Your Email"
          name="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <CustomInput
          className={styles.input}
          type="password"
          placeholder="Your Email"
          name="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <Button className={styles.btn} variant="primary">
          {auth.registerStatus === "pending" ? "Submitting..." : "Register"}
        </Button>
      </Form>
    </div>
  );
};

export default Register;
