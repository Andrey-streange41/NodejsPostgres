import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row } from "react-bootstrap";
import { selectBrand } from "../../app/deviceSlice";
export default function BrandBar() {
  const device = useSelector((state) => state.device);
  const dispatch = useDispatch();
  return (
    <Row style={{display:'flex',width:'100%'}} >
      {device.brands.map((brand) => (
        <Card
          style={{cursor:'pointer',width:'20%',textAlign:'center'}}
          className="p-3"
          onClick={() => dispatch(selectBrand(brand.id))}
          key={brand.id}
          border={brand.id === device.selectedBrand.id ?'danger':'light'}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
}
