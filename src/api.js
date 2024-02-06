import React , { useEffect, useState } from 'react';


export default function ApiCall(){
    const [abc,setAbc] = useState([]);

    useEffect(()=>{
        const data=fetch("https://jsonplaceholder.typicode.com/posts");
      
        const value=data.then((item)=> item.json());
      
        value.then((apiData) => setAbc(apiData));
    },[]);

    console.log(abc, "apiData");
    
    return(
        
        <>
         
         {abc.map((items,i) =>{
        return(
            <>
            <div className="boxes">
            <p>title : {items.title}</p>
            <p>body : {items.body}</p>
            </div>
            </>
        )
    })
}
        </>
    )
}