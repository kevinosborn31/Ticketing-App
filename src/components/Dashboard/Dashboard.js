import styles from "./dashboard.module.css"
import { ticketData } from '../../services/ticketApiService'


const Dashboard = () => {

    return (
        <div>
            <div className="tickets">
                <ul>
                {ticketData.map(ticket => (
                    <div key={ticket.id}>{ticket.summary}</div>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default Dashboard;
