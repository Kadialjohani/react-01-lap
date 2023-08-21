interface detils {
    name: string,
    languages: string,
    exYears: number,
    company: string,
}

export default function Programers(props:detils) {
  return (
    <div>
        
        <h3 style={{border: "2px solid blue"}}>Name: {props.name}</h3>
        <h3 style={{border: "2px solid blue"}}>ProgrammingLanguages: {props.languages}</h3>
        <h3 style={{border: "2px solid blue"}}>ExperinceYears: {props.exYears}</h3>
        <h3 style={{border: "2px solid blue"}}>Company: {props.company}</h3>
        <hr></hr>
    </div>
  )
}
