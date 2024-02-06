import React, {useEffect, useState} from 'react';

export default function Apitwo(){
   const [abc,setAbc] = useState([]);
    useEffect(()=>{
         const data=fetch("https://jsonplaceholder.typicode.com/posts");
         const value=data.then((item)=> item.json());
         value.then((apiData)=> setAbc(apiData));
    },[]);
    console.log(abc);

    return(
        <>
         {
            abc.map((items)=>{
                return(
                    <> 
                    <div>
                        {items.title}
                    </div>
                  
                    </>
                )
            })
         }
        </>
    )
}