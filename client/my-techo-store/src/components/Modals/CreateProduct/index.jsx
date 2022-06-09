import React, { useState,useEffect } from "react";
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {fetchTypesAsyncThunk, fetchBrandsAsyncThunk, selectBrand, selectType } from "../../../app/deviceSlice";
import { fetchTypes,fetchBrands } from "../../../api/deviceAPI";

export const CreateProduct = ({ show, onHide }) => {
  const device = useSelector((state) => state.device);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  
 

  const [info, setInfo] = useState([]);
 
  useEffect(()=>{
    dispatch(fetchBrandsAsyncThunk());
    dispatch(fetchTypesAsyncThunk())
  },[])

  const addInfo = () => {
    setInfo([...info, { id: "", title: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((item) => item.number !== number));
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex flex-wrap">
          <Dropdown className="m-2">
            <Dropdown.Toggle >{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types?.map((type) => (
                <Dropdown.Item
                  onClick={() => dispatch(selectType(type))}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="m-2">
            <Dropdown.Toggle>{device.selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands?.map((brand) => (
                <Dropdown.Item
                  onClick={() => dispatch(selectBrand(brand))}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="mt-4"
            placeholder={"Наименование устройства"}
          />
          <Form.Control
            onChange={selectFile}
            className="mt-4"
            type="file"
            placeholder={"Изображение"}
          />
          <Form.Control
            onChange={(e) => setPrice(Number(e.target.value))}
            value={price}
            className="mt-4"
            type="number"
            placeholder={"Стоимость"}
          />
          <hr />
          <Button className="mt-4" onClick={addInfo}>
            Добавить новое сойство
          </Button>
          {info.map((item) => (
            <Row key={item.number} className="d-flex align-items-center mt-4">
              <Col md={4}>
                <Form.Control placeholder="Наименование свойства" />
              </Col>
              <Col md={4}>
                <Form.Control placeholder="Описание свойства" />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(item.number)}
                  variant="outline-danger"
                >
                  Удалить свойство
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Выйти
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить тип
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
