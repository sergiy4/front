import { useState, useRef } from "react";
import { PrintEntry } from "./PrintEntry";
import React from "react";
import '../styles/style.css'
const Shop = () =>{

    const [prints,setPrints] = useState([])
    

    const loadUser = async (event) =>{
        try{
            const {value} = event.target;

            const searchParams = new URLSearchParams()
            
            if(value){
                searchParams.set("printname", value)
            }
            else if(!value){
                setPrints([])
            }

            await fetch(`http://localhost:8080/print?${searchParams.toString()}`)

            .then((response) =>{
                return response.json()
            })
            .then((data) =>{
                setPrints(data)
               
            })
        }catch(err){
            console.log(err)
        }
    }

    return(
        
        <div>
            <header className="header_shop">
                
                <h1>Print</h1>
                <input className="search" onChange={loadUser}></input>

            </header>
            <div className="product_place">
                <div className="products_grid">
                   
                {prints && Array.isArray(prints) && prints.map((pr) => {
                        return(
                            
                            <PrintEntry  print={pr} key={pr.id}/>
                        
                        )
                    })
                }
                </div>
            </div>
            
            
        </div>
        

    )
}

export default Shop