'use client'

import { useRouter } from "next/navigation"

export const MainHeader=()=>
{
const router = useRouter();

return(
<div className="main-header">
<button
type="button"
className="header-search-button"
onClick={()=>router.push("이동할 페이지 넣기")}
>
<img
src='https://static.vecteezy.com/system/resources/previews/029/750/895/non_2x/search-bar-design-free-png.png'
alt="검색"
className="header-search-image"

/>
</button>
</div>
)
}
