import  classes  from "./Card.module.css"

export default function Card(props){
//reusable UI component
    return(
        <div className={`${classes.card} ${props.className}`} >{props.children}</div> 
    )

    
}
