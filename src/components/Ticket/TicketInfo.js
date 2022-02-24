import styles from "./ticketInfo.module.css"


const Ticket = ({id, summary, description, assignee, priority, estimate, type}) => {

    const project = 'OHR';

    return (
        <div>
            <ul>
                <li>{ project }-{ id }</li>
                <li>{ summary }</li>
                <li>{ description }</li>
                <li>Assignee: { assignee }</li>
                <li>Priority: { priority }</li>
                <li>Estimate: { estimate }</li>
                <li>Type: { type }</li>
            </ul>
        </div>
    )
}






export default Ticket;
