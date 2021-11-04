import React from 'react';
import { Form, Col } from 'react-bootstrap';

const MyFormGroup = (props) => {
  return (
    <>
      <Form.Group as={Col}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          placeholder={props.placeholder}
          type={props.type}
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          isInvalid={!!props.errors}
        />
        <Form.Control.Feedback type="invalid">
          {props.errors}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

export default MyFormGroup;
