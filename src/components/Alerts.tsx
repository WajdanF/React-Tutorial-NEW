import { ReactNode } from "react"

interface Props{
    text:String 
    onClick: () => void
}
const Alerts = ({text, onClick}: Props) => {

  return (  
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" className="btn-close" onClick={onClick}data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  )
}

export default Alerts