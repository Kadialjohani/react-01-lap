interface detils {
    servicesType: string,
    expextedPrices: number,  
}

export default function Services(props:detils) {
  return (
    <div>
        <h3 style={{border: "2px solid yellow"}}>services Type: {props.servicesType}{props.expextedPrices}</h3>
        <h3 style={{border: "2px solid yellow"}}>expexted Prices: {props.expextedPrices}</h3>
    </div>
  )
}
