import React, { useEffect } from 'react';
import { Col,Row,Container } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import TypeBar from '../components/TypeBar';
import DeviceList from '../components/DeviceList/index';
import { useDispatch } from 'react-redux';
import {fetchBrandsAsyncThunk, fetchDevicesAsyncThunk, fetchTypesAsyncThunk} from '../app/deviceSlice'

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(fetchTypesAsyncThunk());
      dispatch(fetchBrandsAsyncThunk());
      dispatch(fetchDevicesAsyncThunk());
  },[])

  return (
    <Container>
      <Row className='mt-4'>
        <Col md={3}>
          <TypeBar/>
          </Col>
        <Col md={9}>
          <BrandBar/>
          <DeviceList/>
        </Col>
        
      </Row>
    </Container>
  )
}
