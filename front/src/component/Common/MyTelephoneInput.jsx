import React from 'react';
import { Form, Col } from 'react-bootstrap';
import InputMask from 'react-input-mask';

const CustomInput = (props) => (
  <InputMask {...props}>
    {(inputProps) => <Form.Control required {...inputProps} />}
  </InputMask>
);

const MyTelephoneInput = (props) => {
  return (
    <>
      <Form.Group as={Col}>
        <Form.Label>Phone</Form.Label>
        <CustomInput
          mask="+38 (099) 999-99-99"
          name="phone"
          alwaysShowMask="true"
          value={props.value}
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

export default MyTelephoneInput;
