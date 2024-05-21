import { useState } from 'react';
import pageBanner from '../../../assets/shop/banner2.jpg'
import SectionBanner from '../../../Shared/SectionBanner/SectionBanner'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './shop.css'
import useMenu from '../../../hooks/useMenu';
import MenuTab from './MenuTab';

const Shop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu()
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')


    return (
        <div>
            <SectionBanner img={pageBanner} title={'Our shops'} message={'Would you like to try a dish?'} />
            <div className='py-10'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soup</Tab>
                        <Tab>dessert</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <MenuTab items={salad} />
                    </TabPanel>
                    <TabPanel>
                        <MenuTab items={pizza} />
                    </TabPanel>
                    <TabPanel>
                        <MenuTab items={soup} />
                    </TabPanel>
                    <TabPanel>
                        <MenuTab items={dessert} />
                    </TabPanel>
                    <TabPanel>
                        <MenuTab items={drinks} />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;