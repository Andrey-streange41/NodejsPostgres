import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createType } from '../../../api/deviceAPI';

export  const CreateType = ({show,onHide}) =>{
  const [value, setValue] = useState();
  const addType = () =>{
      createType({name:value}).then(()=>setValue(''));
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
        <Button  variant='outline-success' onClick={addType}>Добавить тип</Button>
      </Modal.Footer>
    </Modal>
  )
}
