
import styled from "./layout.module.css"
function Layout({children}){
    return(
        
        <>
        <header>
            <h1 className={styled.header}> Crypto-App</h1>
        </header>
        {children}
        </>
    )
}
export default Layout;