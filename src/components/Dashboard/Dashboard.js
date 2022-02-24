import { useState, useEffect } from "react";
import styles from "./dashboard.module.css"
import { ticketData } from '../../services/ticketApiService'
import TicketInfo from '../Ticket/TicketInfo'
import { fetchData as fetchApiData } from "../../services/ticketApiService";


const Dashboard = () => {


    const [tickets, setTickets] = useState([]);


    const fetchData = async () => {
        const response = await fetchApiData();

        setTickets(response);
    }

    useEffect(() => {
        if(!tickets.length) {
            fetchData();
        }
    });

    

    return (
        <div>
            <div className="tickets">
                {tickets.map(({ id, summary, description, assignee, priority, estimate, type}) => {
                        <TicketInfo
                        key={id}
                        id={id}
                        summary={summary}
                        description={description}
                        assignee={assignee}
                        priority={priority}
                        estimate={estimate}
                        type={type}
                    />
                })}
            </div>
        </div>
    )
}

export default Dashboard;
