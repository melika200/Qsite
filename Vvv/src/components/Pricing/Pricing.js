import { Col, Container, Row } from "react-bootstrap"
import './Pricing.css'

function Pricing(){
    return(
        <>
        <Container>
            <Row>
            <h5 style={{display:'block',margin:'auto',fontSize:'30px',textAlign:'center',padding:'15px',position:'relative'}} className="headerPricing">Pricing</h5>
            <span style={{textAlign:'center',padding:'15px 0px'}}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</span>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
        </>
    )
}
export default Pricing