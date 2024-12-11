import { useState } from "react";
import img1 from "../imeges/1.jpg";
import img2 from "../imeges/2.jpg";
import img3 from "../imeges/3.jpg";
import img4 from "../imeges/4.jpg";
import img5 from "../imeges/5.jpg";
import img6 from "../imeges/6.jpg";
export default function Picture()
{
    const[imgs,setImg]=useState([img1,img2,img3,img4,img5,img6]);
    const[index,setindex]= useState(0);
    function moovleft(){
        if (index>0)
           setindex(index-1);
        else 
           setindex(5);
    }
    function moovright(){
        if (index<5)
           setindex(index+1);
        else 
        setindex(0);


    }
    return(
        <div>
        <h1><button onClick={() => moovleft()} id="l" > ⬅️</button> <img src={imgs[index]} alt="description of image" ></img><button onClick={() =>moovright()} id="r" > ➡️</button></h1>
       <p><img src={img1} alt="description of image"></img>,<img src={img2} alt="description of image"></img>,<img src={img3} alt="description of image"></img>,<img src={img4} alt="description of image"></img>,<img src={img5} alt="description of image"></img>,<img src={img6} alt="description of image"></img></p>

       </div>
    )
}