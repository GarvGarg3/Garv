import Cardview from "./Cardview.jsx"
import React from 'react'
import { Container, Row, Col } from 'reactstrap';



function Achievements() {
  return (
    <div>
      <Container>
        <Row>
          <Col md="10" lg="6" xl="4">
            <Cardview />
          </Col>
          <Col md="10" lg="6" xl="4">
            <Cardview />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Achievements