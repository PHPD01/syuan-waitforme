import React, { useState,useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import "./index.css";

function Table() {
  const addTable = () => {
    axios.post("http://localhost:3001/create", {//對應到後端接收請求
      // date: date,//要post給後端的資料({屬性名key：屬性值value}(將body傳給後端)(後端收到後再轉json)
      number: number,
    }).then(() => {//
      settableList([...tableList, { number: number }]);
    });
  };
  const showTable = () => {
    axios.get("http://localhost:3001/employee").then((response) => {
      settableList(response.data);
    });
  };

  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [time, setTime] = useState("");
  const [tableList, settableList] = useState([]);
  return (
    <>
      <Alert>新增訂位 1.補更改刪除2.radio表單送出怎麼跟狀態同步？</Alert>

      <Container className="md">
        <h1>小鮮肉赤肉羹</h1>
        <Row>
          <Col>電話：04-22330704</Col>
          <Col>地址：北區五常街153號</Col>
        </Row>
        <Form>
          <FormControl
            type="date"
            name="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></FormControl>
          <FormControl
            style={{ marginTop: "5px" }}
            type="number"
            value={number}
            placeholder="請輸入人數"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          ></FormControl>
          <Row>
            <Col>
              <input type="radio" name="time" value="11:00" id="t11" />
              <label for="t11">11:00</label>
              <input type="radio" name="time" value="12:00" id="t12" />
              <label for="t12">12:00</label>
              <input type="radio" name="time" value="17:00" id="t17" />
              <label for="t17">17:00</label>
              <input type="radio" name="time" value="18:00" id="t18" />
              <label for="t18">18:00</label>
            </Col>
          </Row>

          <Button
            style={{ width: "100%", marginTop: "5px" }}
            variant="secondary"
            // type="submit"
            onClick={addTable}
          >
            確認
          </Button>
        </Form>
        <Button
          style={{ width: "100%", marginTop: "5px" }}
          variant="secondary"
          // type="submit"
          onClick={showTable}
        >
          show
        </Button>
        {tableList.map((a) => {
          return <div>{a.number}</div>;
        })}
      </Container>
      <Alert>search component 要改成按鈕確認</Alert>
    </>
  );
}

export default Table;
