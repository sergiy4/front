export function PrintEntry({print}){
    return(
        <div className="one_card">
            <img className="img_shirt" src={print.imgurl}></img>
            <div className="down_part">
                <h3 className="name_print">{print.printname}</h3>
                <h3 className="price"> {print.price}$</h3>
                <button className="buy_btn">Buy</button>
            </div>
        </div>
    )
}