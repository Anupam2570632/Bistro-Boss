import SectionBanner from "../../../../Shared/SectionBanner/SectionBanner";
import menuBanner from '../../../../assets/menu/banner3.jpg'
import TodayOffer from "../TodayOffer/TodayOffer";

const Menu = () => {
  return (
    <div>
      <SectionBanner img={menuBanner} title={'our menu'} message={'Would you like to try a dish?'} />
      <TodayOffer />
    </div>
  );
};

export default Menu;