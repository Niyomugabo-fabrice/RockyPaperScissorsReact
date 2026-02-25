import {useState, useEffect} from "react"
export default function Timer()
{
    const [count,setCount]=useState(11);
    
    useEffect(()=>{ setTimeout(()=>{ setCount((count)=>count-1);
    },1000);
});
 return(
<h1>{count>0&&count}</h1>
 )   
}