'use client'

import { FooterButtonType } from "@/types/buttonType"
import { FooterButton } from "../buttons"
import { useState } from "react"

export const MainTopFixedBar=()=>
{
        const [activeButton, setActiveButton]=useState<number>(0);
        
return(
<div className="main-topfixedbar">
    <div className="top-left">
        <div style={{fontSize: "20px",fontWeight: "bold",alignItems: "center", justifyContent:"center", marginLeft:"20px"}}>집</div>
<FooterButton
data={leftbuttonData}
active={activeButton===0}
clickButton={()=> setActiveButton(0) }
/>
</div>

<div className="top-right">
{rightbuttonData.map((data, index)=>(
<FooterButton
key={index}
data={data}
active={activeButton === index + 1}
clickButton={()=> setActiveButton(index+1) }
/>
))}
</div>
</div>

)
}

const leftbuttonData:FooterButtonType=
  {
buttonText: '',
buttonImg:'https://cdn-icons-png.freepik.com/512/5800/5800621.png'
  }

const rightbuttonData:FooterButtonType[]=
[
  {
buttonText: '',
buttonImg:'https://cdn-icons-png.flaticon.com/512/879/879757.png'
  },
  {
buttonText: '',
buttonImg:'https://cdn-icons-png.flaticon.com/512/2088/2088595.png'
  },
  {
buttonText: '',
buttonImg:'https://cdn-icons-png.flaticon.com/512/15/15050.png'
  }
]