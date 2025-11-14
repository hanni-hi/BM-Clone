import { MainContents, MainFooter, MainHeader } from "."

export const MainLayout = () => {
    return(
        <div className="main-layout">
            <MainHeader />
            <MainContents />
            <MainFooter />
        </div>

    )
}