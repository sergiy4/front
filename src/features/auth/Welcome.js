import { Link } from "react-router-dom";

const Welcome = () =>{
    return(
        <section className="welcome">

        <h1>Welcome!</h1>

        <p><Link to="/dash/notes">View techNotes</Link></p>

        <p><Link to="/dash/users">View User Settings</Link></p>

    </section>
    )
}

export default Welcome