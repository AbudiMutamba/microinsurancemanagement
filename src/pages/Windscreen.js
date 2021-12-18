import {useEffect} from 'react'
import generatedData from '../helpers/generatedClients';

function Windscreen() {

    useEffect(() => {
        document.title = 'Britam - Windscreen'
    }, [])

    return (
        <div className='components'>
            <div>
                <h1 className='title'>Windscreen Policy</h1>
                <p className="subtitle">MANAGING WINDSCREEN POLICIES</p>
            </div>
            <div id="add_client_group">
                <div></div>
                <button className="btn btn-primary cta">Add MTP</button>
            </div>

            <div className="table-card">   
                <div id="search">
                <input type="text" placeholder='filter by Dates..' id='searchInput' />
                    <input type="text" placeholder='Search for client...' id='searchInput' />
                </div>

                <table class="table table-striped" style={{border: "1px solid black"}}>
                    <thead>
                        <tr><th>Notification Ref No.</th><th>Claimant Details</th><th>Date of Incident</th><th>Number Plate</th><th>Sticker No.</th><th>Claim Estimate</th><th>Status</th><th></th></tr>
                    </thead>

                    <tbody>
                        
                            
                                {generatedData[0].map((generatedClient, index) => (
                                    <tr>
                                        <td>{generatedClient.refNumber}</td>
                                        <td>{generatedClient.email}</td>
                                        <td>{generatedClient.date}</td>
                                        <td>{generatedClient.plateNumber}</td>
                                        <td>{generatedClient.stickerNumber}</td>
                                        <td>{generatedClient.estimate}</td>
                                        <td>{generatedClient.status}</td>
                                        <td><div id="action"><div></div><div></div><div></div></div></td>
                                    </tr>
                                ))}
                    </tbody>

                    <tfoot>
                    <tr><th>Notification Ref No.</th><th>Claimant Details</th><th>Date of Incident</th><th>Number Plate</th><th>Sticker No.</th><th>Claim Estimate</th><th>Status</th><th></th></tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default Windscreen
