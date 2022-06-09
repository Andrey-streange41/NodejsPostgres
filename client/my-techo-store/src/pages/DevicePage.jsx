import React ,{useEffect, useState}from "react";
import { Container, Col, Image, Row, Card, Button } from "react-bootstrap";
import { useHistory,useParams } from "react-router-dom";
import { fetchDeviceById } from "../api/deviceAPI";

export default function DevicePage() {
  const [device, setDevices] = useState({info:[]});
  const {id} = useParams();
  const hostURL = 'http://localhost:5000/';
  useEffect(()=> {
    fetchDeviceById(id).then(device=>setDevices(device));
   
  },[])

  
  return (
    <Container className="mt-3">
      <Row className="d-flex align-items-center">
        <Col md={4}>
          <h2 className="m-4">{device.name}</h2>
          <Image width={300} height={300} src={hostURL+device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column ">
          <h4 style={{textAlign:"left"}}>Характеристики</h4>
        {device.device_infos?.map((info,index)=><Row style={{background:index%2?'lightgrey':'transparent',width:300,padding:10}} key={info.id}>{info.title}:{info.description}</Row>)}



          
          </Row>
        </Col>
        <Col md={4}>
          <Card className="d-flex flex-column align-items-center justify-content-around"
                style={{width:300, height:300, fontSize:32 ,border:'solid lightgray 2px', borderRadius:'10px'}}
          >
                <h3>₴ {device.price}</h3>
                <Button variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-4">
      <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLuPyLWYn_sS2AeIta3BRFYDCKOdcCRbD2Vg&usqp=CAU) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
      </Row>
    </Container>
  );
}
