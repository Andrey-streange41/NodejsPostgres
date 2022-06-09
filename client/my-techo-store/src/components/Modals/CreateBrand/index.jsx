import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createBrand } from '../../../api/deviceAPI';

export default function CreateBrand({show,onHide}) {
  const [value, setValue] = useState();
  const addBrand = () =>{
      createBrand({name:value}).then(()=>setValue(''));
      onHide();
  }
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
       <Form>
           <Form.Control onChange={(e)=>setValue(e.target.value)} value={value} placeholder='Наименование типа товара...'/>
               
           
       </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Выйти</Button>
        <Button variant='outline-success' onClick={addBrand}>Добавить бренд</Button>
      </Modal.Footer>
    </Modal>
  )
}
