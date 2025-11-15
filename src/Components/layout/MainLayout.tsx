import { MainContents1, MainFooter, MainHeader, MainHeaderBanner, MainTopFixedBar } from "."

export const MainLayout = () => {
    return(
        <div className="main-layout">
            <MainTopFixedBar/>
            <MainHeader />
            <MainHeaderBanner />
            <MainContents1 />
            <MainFooter />
        </div>

    )
}