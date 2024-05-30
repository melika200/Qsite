import Creative from "../../components/Creative/Creative"
import Feature from "../../components/Feature/Feature"
import Learn from "../../components/Learn/Learn"
import Mynavbar from "../../components/Navbar/Mynavbar"
import Pricing from "../../components/Pricing/Pricing"
import Provident from "../../components/Provident/Provident"
import Services from "../../components/Services/Services"
import Tool from "../../components/Tool/Tool"
import Welcom from "../../components/Welcom/Welcom"

function Home(){
    return(
        <>
        <Mynavbar />
        <Welcom />
        <Creative />
        <Provident />
        <Learn />
        <Services />
        <Tool/>
        <Pricing/>
        </>
    )
}
export default Home