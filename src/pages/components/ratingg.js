import React from 'react';


export default function Ratings({image,content,additional}) {
    return (
        <div style={{marginLeft:'10px',marginRight:'10px',width:'300px'}}>
            <div style={{display:'flex',justifyContent:'center',marginTop:'15vh'}}>
            <img src ={image} style={{height:'70px'}}/>
            </div>
            <div>
                <h1>{content}</h1>
        
            <p>{additional}</p>
    
            </div>
        </div>
    )
}
