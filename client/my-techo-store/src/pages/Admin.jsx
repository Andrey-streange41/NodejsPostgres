import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateBrand from '../components/Modals/CreateBrand'
import { CreateType } from '../components/Modals/CreateType'
import {CreateProduct}from '../components/Modals/CreateProduct'

export default function Admin() {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);
  return (
    <Container className='d-flex flex-column'>
      <Button onClick={()=>setTypeVisible(true)} variant='outline-dark' className='mt-3 p2'>Добавить тип</Button>
      <Button onClick={()=>setBrandVisible(true)} variant='outline-dark' className='mt-3 p2'>Добавить бренд</Button>
      <Button onClick={()=>setProductVisible(true)} variant='outline-dark' className='mt-3 p2'>Добавить Устройтво</Button>
      <CreateType show={typeVisible } onHide={()=> setTypeVisible(false)}/>
      <CreateBrand show={brandVisible} onHide={()=>setBrandVisible(false)} />
      <CreateProduct show={productVisible} onHide={()=>setProductVisible(false)} />
    </Container>
  )
}
