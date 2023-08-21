
import './App.css'
import Programers from './component/Programers'
import Companies from './component/Companies'
import Services from './component/Services'


function App() {

  return (
    <>

      <Programers name= "ahmad" languages= "C++" exYears= {5} company= "C1"></Programers>
      <Programers name= "greg" languages= "C#" exYears= {2.5} company= "C2"></Programers>
      <Programers name= "sofia" languages= "bash" exYears= {10} company= "C3"></Programers>
      <Companies companyName= "C1" employeesCount= {70} foundDay= {9/8} servicesType= "cleaning" expextedPrices={700}></Companies>
      <Companies companyName= "C2" employeesCount= {32} foundDay= {6/7} servicesType= "resturant" expextedPrices={250}></Companies>
      <Companies companyName= "C3" employeesCount= {500} foundDay= {10/12} servicesType= "carSales" expextedPrices={500000}></Companies>
      


      
      
    </>
  )
}

export default App
