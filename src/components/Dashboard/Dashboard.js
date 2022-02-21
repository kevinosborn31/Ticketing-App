import styles from "./dashboard.module.css"
import { ticketData } from '../../services/ticketApiService'
import TicketInfo from '../Ticket/TicketInfo'


const Dashboard = () => {

    return (
        <div>
            <div className="tickets">
                {ticketData.map(ticket => (
                    <TicketInfo
                        key={ticket.id}
                        id={ticket.id}
                        summary={ticket.summary}
                        description={ticket.description}
                        assignee={ticket.assignee}
                        priority={ticket.priority}
                        estimate={ticket.estimate}
                        type={ticket.type}
                    />
                ))}
            </div>
        </div>
    )
}

export default Dashboard;
