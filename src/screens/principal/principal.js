import './principal.css'
import Navbar from "../../components/navbar/navbar";
import Search from "../../components/search/search";
import Slider from "../../components/slider/slider";
import Nouv from "../../components/nouv/nouv";
import ListNouvCard from "../../components/list-nouv-card/list-nouv-card";


const Principal = () => {
    return (
        <>
            <div className={['principal-all']}>
                <Navbar/>
                <Search/>
                <Slider/>
                <Nouv/>
                <ListNouvCard/>
            </div>
        </>
    )
}
export default Principal;
