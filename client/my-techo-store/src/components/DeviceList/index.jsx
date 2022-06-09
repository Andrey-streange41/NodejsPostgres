import React from 'react';
import { useSelector } from "react-redux";
import { Row } from 'react-bootstrap';
import DeviceItem from '../DeviceItem';

export default function DeviseList() {
    const devices = useSelector((state) => state.device.devices);
   
  return (
   <Row className='d-flex'>
       {devices.map(device=><DeviceItem key={device.id} device={device}/>)}
   </Row>
  )
}
