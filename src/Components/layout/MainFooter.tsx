'use client'

import { FooterButtonType } from "@/types/buttonType"
import { FooterButton } from "../buttons"
import { useState } from "react"

export const MainFooter=()=>
{
    const [activeButton, setActiveButton]=useState<number>(0);

return(
<div className="main-footer">

{buttonData.map((data, index)=>
<FooterButton
key={index}
data={data}
active={index===activeButton}
clickButton={()=> setActiveButton(index) }
/>)}

</div>
)
}

const buttonData:FooterButtonType[]=
[
{
buttonText:'홈',
buttonImg:'https://cdn-icons-png.flaticon.com/512/25/25694.png'

  },

  {
buttonText: '장보기,쇼핑',
buttonImg:'https://cdn-icons-png.flaticon.com/512/126/126515.png'
  },
  {
buttonText: '찜',
buttonImg:'https://cdn-icons-png.flaticon.com/512/25/25424.png'
  },
  {
buttonText: '주문내역',
buttonImg:'https://cdn-icons-png.flaticon.com/512/876/876193.png'
  },
    {
buttonText: '마이배민',
buttonImg:'https://cdn.iconscout.com/icon/premium/png-256-thumb/-emoji-icon-svg-download-png-2729877.png?f=webp&w=256'
    }
]