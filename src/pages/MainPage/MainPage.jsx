import { DailyCaloriesForm } from "components/Daily/DailyCaloriesForm";
import ImgDesctop from '../../assets/images/destop.png';
import ImgTab from '../../assets/images/tablet.png';
import { DesctopImg, TabletImg } from "./MainPage.styled";

const MainPage = () => {
    return (
        <>
        <DailyCaloriesForm/>  
        <DesctopImg src={ImgDesctop}/>
        <TabletImg src={ImgTab}/>
        </>
    )
}

export default MainPage;
