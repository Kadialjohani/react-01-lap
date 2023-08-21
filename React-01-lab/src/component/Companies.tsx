import Services from "./Services"

interface detils {
    companyName: string,
    employeesCount: number,
    foundDay: number,
    servicesType: string,
    expextedPrices: number,
   
}

export default function Companies(props:detils) {
  return (
    <div>
        <h3 style={{border: "2px solid red"}}>Company Name: {props.companyName}</h3>
        <h3 style={{border: "2px solid red"}}>Employees Count: {props.employeesCount}</h3>
        <h3 style={{border: "2px solid red"}}>Found Day: {props.foundDay}</h3>
        <Services servicesType={props.servicesType} expextedPrices={props.expextedPrices}></Services>
        <hr></hr>
    </div>
    
    
  )
}