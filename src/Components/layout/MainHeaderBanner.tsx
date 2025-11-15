'use client'

import { useRouter } from "next/navigation"

export const MainHeaderBanner=()=>
{
const router=useRouter();

return(
    // 왼쪽 버튼
<div className="main-headerbanner">
<button className="headerbannerleft" type="button" onClick={()=>router.push("이동할 페이지")}>
<div className="headerbannerlefttext"> 
    님 오늘도
<br />
최대 8,000원 할인!
</div>
<img src="/BTN1.png" alt='쿠폰배너' className="headerbannerleftimage"/>
</button>

    {/*오른쪽 버튼*/}

<button className="headerbannerright" type="button" onClick={()=>router.push("이동할 페이지")}>
<img src="BTN2.png" alt='이벤트배너' className="headerbannerrightimage"/>
</button>


</div>

)
}