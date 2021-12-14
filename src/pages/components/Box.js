import React from 'react'

export default function Box({color,colorSetter}) {
    return (
        <div
         onClick={()=>colorSetter(color)}
        className={'color-container-box'}
          style={{
           
            backgroundColor: color,
            
          }}
        ></div>
    )
}


/*
#B2DB70
#706EE9
#BACA00
#A5001E
"A5001E
*/