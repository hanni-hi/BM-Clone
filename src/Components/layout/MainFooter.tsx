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
buttonText: '장보기,쇼핑'

  },
  {
buttonText: '찜'
  },
  {
buttonText: '주문내역'
  },
    {
buttonText: '마이배민'
  }

]