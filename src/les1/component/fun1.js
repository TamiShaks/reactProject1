import img from "../imges/שיר מגיטי ושירה.png"
export default function Wow(props)
{
    return(
        <div>
        <h1>choose your mood!!!</h1>
       <p>😈👽😼💩🤖👹👾</p>
       <h1>this is {props.name}</h1>
       <img src={img}></img>
       </div>
    )
}