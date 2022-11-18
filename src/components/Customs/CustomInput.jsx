import React from "react";

import { Form } from "react-bootstrap";

import styles from "./styles.module.css";
const CustomInput = (props) => {
  return (
    <Form.Group className="mb-3" controlId={props.controlId}>
      <Form.Control
        className={styles.input}
        type={props.type}
        placeholder={props.placeholder}
        name={props.type}
        onChange={props.onChange}
        value={props.value}
        required
      />
    </Form.Group>
  );
};

export default CustomInput;