import React from 'react';
import { Col,Card,Image } from 'react-bootstrap';
import star from '../../assets/emptyStar.png';
import { useHistory } from 'react-router-dom';
import { DEVICE_ROUT } from '../../utils/constants';

export default function DeviceItem({device}) {
    const history = useHistory();
   
  return (
    <Col md={3} className='mt-5' onClick={()=>history.push(DEVICE_ROUT + '/' + device.id)}>
       <Card border={'ligth'} style={{width:150,cursor:'pointer'}}>
           <Image width={150} height={150} src={'http://localhost:5000/'+device.img}/>
           <section style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
                    <h6 className='text-black-50'>Samsung</h6>
                    <section style={{display:'flex'}}>
                        {device.rating}
                        <Image src={star}/>
                    </section>
           </section>
            <h5>{device.name}</h5>           
       </Card>
    </Col>
  )
}
