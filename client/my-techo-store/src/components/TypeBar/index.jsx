import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { selectType } from "../../app/deviceSlice";

export default function TypeBar() {
  const deviceStore = useSelector((state) => state.device);
  const deviceSelected = useSelector((state) => state.device.selectedType);
  const dispatch = useDispatch();
  return (
    <ListGroup>
      {deviceStore.types.map((type) => (
        <ListGroup.Item
          style={{cursor:'pointer'}}
          active={type.id === deviceSelected.id}
          onClick={() => {
            dispatch(selectType(type.id));
          }}
          key={type.name}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
