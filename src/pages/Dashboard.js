import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/Auth'
import { Card, Container, Row, Col, Table } from 'react-bootstrap'
// import BarChart from '../figures/BarChart'
import '../styles/dashboard.css'
import BarChart from '../figures/BarChart'

  

function Dashboard() {
    const [claims, setClaims] = useState(0)
    const [stickers, setStickers] = useState(13)
    const [policies, setPolicies] = useState(2)
    const [claimNotifications, setClaimNotifications] = useState(27)

    

    useEffect(() => {
        document.title = 'Britam - Welcome'
    }, [])

    return (
            <div className='components'>
                <header className='heading'>
                    <h1 className='title'>Welcome to Britam</h1>
                    <p className="subtitle">WITH YOU EVERY STEP OF THE WAY</p>
                </header>

                <div className="componentsData" >
                    <div className='mb-5 first-row' style={{display:"flex", gap:"6vh", width: "100%", justifyContent: "space-between"}}>
                        <div className="shadow-sm p-3 bg-body rounded" className="first-container">
                            <Container className="row-container">
                                    <div className="col">
                                        <div className="custom-card" style={{"background-color":"#804C75"}}>
                                            <Card.Body className="card-body">
                                                <div className="statistics">{`${claims}`}</div>
                                                <div className="card-text">Claim Settlement</div>
                                            </Card.Body>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="custom-card" style={{"background-color":"#FFB848"}}>
                                            <Card.Body className="card-body">
                                                <div className="statistics">{`${policies}`}</div>
                                                <div className="card-text">Policies</div>
                                            </Card.Body>
                                        </div>
                                    </div>
                            </Container>
                            <Container className="row-container">
                                    <div className="col">
                                        <div className="custom-card" style={{"background-color":"#C82E29"}}>
                                            <Card.Body className="card-body">
                                                <div className="statistics">{`${stickers}`}</div>
                                                <div className="card-text">Stickers</div>
                                            </Card.Body>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="custom-card" style={{"background-color":"#1FBBA6"}}>
                                            <Card.Body className="card-body">
                                                <div className="statistics">{`${claimNotifications}`}</div>
                                                <div className="card-text">Claim Notifications</div>
                                            </Card.Body>
                                        </div>
                                    </div>
                            </Container>
                        </div>

                        <div className="shadow-sm p-3 bg-body rounded summaries " className="first-container" >
                            {/* Are these supposed to be links or just mere words? */}
                            <div id="short_stats">
                                <h3 className="heading">Agent issued reports</h3>
                                <Table responsive borderless>
                                    <thead><th></th><th>Grand totals</th></thead>
                                    <tbody>
                                        <tr>
                                            <td>Daily</td><td>UGX 10,000,001</td>
                                        </tr>
                                        <tr>
                                            <td>Weekly</td><td>UGX 13,000,001</td>
                                        </tr>
                                        <tr>
                                            <td>Monthly</td><td>UGX 21,000,001</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                
                        </div>
                    </div>

                    {/* Graph div  */}
                    <div className="shadow-sm p-3 mb-5 bg-body rounded graph-container" >
                        <h5 style={{"display":"flex", "gap": "10px"}}><span>
                            <div style={{"width": "20px", "height": "20px", "background-color": "#E0E7EC"}}></div>
                        </span>Monthly Stickers Issued</h5>
                        <Row id="graph" style={{paddingTop:"3vh", paddingBottom:"2vh", paddingRight:"3vh"}}>
                            {/* <Col xs="1" id="vertical-scale-name" style={{display:"flex", justifyContent:"center", writingMode:"tb-rl", transform:"rotate(-180deg)", alignItems:"End"}}>
                                <span>Sticker sales</span>    
                            </Col> */}
                            <Col style={{height:"35vh"}}>
                                    <BarChart />
                            </Col>
                        </Row>
                        <Row style={{diplay:"flex", justifyContent:"center"}}>
                            <Col>Months</Col>
                        </Row>
                    </div>
                </div>  
            </div>
        )
}

export default Dashboard
