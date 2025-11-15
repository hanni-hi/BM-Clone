'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";
import { PanelPickup } from "./PanelPickup";

export const MainContents1=()=>
{
const [activeTab,setActiveTab]=useState<string>("pickup");
const router=useRouter();

return(
<section className="main-contents1">
{/* 상단 탭 */}
<div className="contents1-category">
{tabs.map(tab=>(
<button
key={tab.id}
className={'tab ${tab.id===activeTab ? "active":""}'}
onClick={()=>setActiveTab(tab.id)}
>
{tab.label}
</button>
))}
</div>
{/* 탭 */}
<div className="contents1-category-panel">
    {activeTab==="pickup"&&<PanelPickup/>}
  {/*      {activeTab==="delivery"&&<PanelDelivery/>}
    {activeTab==="delivery"&&<PanelShopping/>}
        {activeTab==="delivery"&&<PanelEvent/>}
                {activeTab==="delivery"&&<PanelGift/>}
                                {activeTab==="delivery"&&<PanelBenefit/>}  */}
</div>

{/* 하단 더보기 버튼 */}
<button
type="button"
className="contents1-plus-button"
onClick={()=>router.push("이동할 페이지 넣기")}
>
<img
src="BTN3.png"
alt="더보기"
className="contents1-plus-buttonimage"

/>
</button>

</section>
)
}

const tabs=[
{id:"delivery",label:"음식배달"},
{id:"pickup",label:"픽업"},
{id:"shopping",label:"장보기,쇼핑"},
{id:"event",label:"배민푸드페스타"},
{id:"gift",label:"선물하기"},
{id:"benefit",label:"혜택모아보기"}

];