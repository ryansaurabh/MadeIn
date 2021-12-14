import React from 'react'


export default function Rating({image,content}) {
    return (
        <div style={{width:'200px',marginLeft:'10px',marginRight:'10px'}}>
            <div style={{display:'flex',justifyContent:'center'}}>
            <img src ={image} style={{height:'50px'}}/>
            </div>
            <div>
                <p>{content}</p>
            </div>
        </div>
    )
}
