import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

// 使用react-bootstrap 和CSS
import './index.css';
import {Container,Row,Col,Stack,
 Form,
 FormControl,
 Button } from 'react-bootstrap';
//使用圖片
import FMemberIcon from '../MemberPage/conponents/MemberIcon';

//FShowBooking
import FShowBooking from './conponents/ShowBooking';

// -----------------------Import End----------------

function FBookingRecordPage(){
  return (
      <Container>
    {/* grid >>9 */}
    <Row > 
      <Col md={9} className="mx-auto">
        <Stack gap={3} >
          {/* 大頭貼 */}
          <div className="w-50 mx-auto bigHead d-flex justify-content-center">
            <FMemberIcon />
          </div>
          {/* 評論資料 */}
          <div className="">
              <Stack gap={3}  className=" mx-auto ">
                {/* 標題 */}
                <div className=" mx-auto my-3">
                  <h1>我的訂單</h1>
                </div>
                {/* 一條線 */}
                <div className=" mx-auto iAmLine w-75"></div>
                {/* 訂單 */}
                <div className=" w-75 mx-auto">
                  <FShowBooking/>
                  <FShowBooking/>
                  <FShowBooking/>
                </div>
              </Stack>
          </div>
        </Stack>
      </Col>
    </Row>
  </Container>

  );
}

export default FBookingRecordPage;

