import { useState } from 'react';
import pageBanner from '../../../assets/shop/banner2.jpg'
import SectionBanner from '../../../Shared/SectionBanner/SectionBanner'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './shop.css'
import useMenu from '../../../hooks/useMenu';
import MenuTab from './MenuTab';
import { useParams } from 'react-router-dom';

const Shop = () => {
    let initialIndex;
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { title } = useParams();
    if (!title) {
        initialIndex = 0;
    }
    else {
        initialIndex = categories.indexOf(title);
    }
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu,refetch, isLoading] = useMenu()
    if (isLoading) {
        return <>loading...</>
    }
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')


    return (
        <div>
            <SectionBanner img={pageBanner} title={'Our shops'} message={'Would you like to try a dish?'} />
            <div className='py-10 '>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className='overflow-x-auto scrollbar-hide'>
                        <TabList>
                            <Tab>salad</Tab>
                            <Tab>pizza</Tab>
                            <Tab>soup</Tab>
                            <Tab>dessert</Tab>
                            <Tab>drinks</Tab>
                        </TabList>
                    </div>
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