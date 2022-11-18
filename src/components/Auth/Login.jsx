import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/slices/authSlice";
import { Button, Form } from "react-bootstrap";

import styles from "./styles.module.css";
import CustomInput from "../Customs/CustomInput";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth._id) {
    }
  }, [auth._id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(user));

    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className={styles.centered}>
      {auth.loginStatus === "rejected" && (
        <div className={styles.errors}>{auth.loginError}</div>
      )}
      <Form onSubmit={handleSubmit}>
        <h1 className={styles.title}>Log in</h1>

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
          required
        />

        <Button className={styles.btn} variant="primary" type="submit">
          {auth.loginStatus === "pending" ? "Submitting..." : "Login "}
          {auth.loginStatus === "success" ? navigate("/categories") : null}
        </Button>
      </Form>
    </div>
  );
};

export default Login;
