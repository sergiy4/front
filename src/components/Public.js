import { Link } from "react-router-dom";

const Public = () =>{

    // const loadUser = async (event) =>{
    //     try{
    //         const {value} = event.target;
    //         const result = await fetch(`http://localhost:8080/user?username=${value}`)
    //         //     method:'GET',
    //         //     headers: {
    //         //         'Content-Type': 'application/json'
    //         //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //         //     }
    //         // })
    //         .then((response) =>{
    //             return response.json()
    //         })
    //         .then((data) =>{
    //             // for(let us of data){
    //             //     if(event)
    //             // }
    //             console.log(data)
    //         })
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

    return(
        <section className="public">
        <header>
            <h1>T-shirt print</h1>
        </header>

        {/* <input onChange={loadUser}></input> */}

        <main className="public__main">
            <p>Located in Beautiful Downtown Foo City, Dan D. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
            <address className="public__addr">
                Dan D. Repairs<br />
                555 Foo Drive<br />
                Foo City, CA 12345<br />
                <a href="tel:+15555555555">(555) 555-5555</a>
            </address>
            <br />
            <p>Owner: Dan Davidson</p>
        </main>
        <footer>
            <Link to="/login">Employee Login</Link>
        </footer>
    </section>
    )
}

export default Public