import React, { useState } from 'react';
import moment from 'moment';
import * as formik from 'formik';
import { Button, Modal, Form, Col } from 'react-bootstrap';

import MyFormGroup from './MyFormGroup';
import Thump from '../../Common/Thumb';
import { schema } from '../../../helpers/schema';

const { Formik } = formik;

const NewProduct = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [productData, setProductData] = useState({
    _id: '',
    productName: '',
    price: '',
    count: '',
    manufactureDate: '',
    bestBefore: '',
    productImage: '',
  });

  const setIncomeData = () => {
    if (props.product) {
      const data = props.product;
      setProductData(data);
    }
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          setIncomeData();
          handleShow();
        }}
      >
        {props.btnName}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik validationSchema={schema} initialValues={productData}>
            {({
              handleSubmit,
              handleChange,
              setFieldValue,
              values,
              touched,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row>
                  <MyFormGroup
                    label="Product name"
                    placeholder="Enter product name"
                    type="text"
                    value={values.productName}
                    name="productName"
                    onChange={handleChange}
                    errors={errors.productName}
                    touched={touched.productName}
                  />
                </Form.Row>
                <Form.Row>
                  <MyFormGroup
                    label="Price"
                    placeholder="Enter Price"
                    type="number"
                    value={values.price}
                    name="price"
                    onChange={handleChange}
                    errors={errors.price}
                  />
                  <MyFormGroup
                    label="Count"
                    placeholder="Enter product count"
                    type="number"
                    value={values.count}
                    name="count"
                    onChange={handleChange}
                    errors={errors.count}
                  />
                </Form.Row>
                <Form.Row>
                  <MyFormGroup
                    label="Manufacture date"
                    placeholder="Enter manufacture date"
                    type="date"
                    value={moment(values.manufactureDate).format('YYYY-MM-DD')}
                    name="manufactureDate"
                    onChange={handleChange}
                    errors={errors.manufactureDate}
                  />
                  <MyFormGroup
                    label="Best before"
                    placeholder="Enter best before date"
                    type="date"
                    value={moment(values.bestBefore).format('YYYY-MM-DD')}
                    name="bestBefore"
                    onChange={handleChange}
                    errors={errors.bestBefore}
                  />
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.File
                      className="position-relative"
                      required
                      name="productImage"
                      label="Product image"
                      onChange={(event) => {
                        setFieldValue(
                          'productImage',
                          event.currentTarget.files[0]
                        );
                      }}
                      isInvalid={!!errors.productImage}
                      feedback={errors.productImage}
                      feedbackTooltip
                    />
                    <Thump
                      file={values.productImage}
                      src={values.productImage}
                    />
                  </Form.Group>
                </Form.Row>

                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>

                  <Button
                    type="submit"
                    onClick={() => {
                      if (
                        errors &&
                        Object.keys(errors).length === 0 &&
                        errors.constructor === Object
                      ) {
                        props.getBase64(values.productImage, (result) => {
                          productData._id === ''
                            ? props.productAction({
                                productName: values.productName,
                                price: values.price,
                                count: values.count,
                                manufactureDate: values.manufactureDate,
                                bestBefore: values.bestBefore,
                                productImage: result,
                              })
                            : props.productAction(productData._id, {
                                _id: productData._id,
                                productName: values.productName,
                                price: values.price,
                                count: values.count,
                                manufactureDate: values.manufactureDate,
                                bestBefore: values.bestBefore,
                                productImage: result,
                              });
                        });
                        handleClose();
                      }
                    }}
                  >
                    {props.btmSubmitName}
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewProduct;
