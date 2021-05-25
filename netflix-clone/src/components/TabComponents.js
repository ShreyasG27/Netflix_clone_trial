import React, {Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import TabDevices from './tabs_nav/TabDevices';
import TabPrice from './tabs_nav/TabPrice';
import '../css/tabsnav.css'
import Tabcontent1 from './TabContentOne'
import Tabcontent2 from './TabContentTwo'
import Tabcontent3 from './TabContentThree'

class TabComponents extends Component{
    state=
    {
        tabIndex:0
    };
    render()
    {
        return(
        <div>
            <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex})}>
                <TabList className="tab-nav-container tab-icon">
                    <Tab className={ `${this.state.tabIndex === 0 ? 'tab-selected active' : null }` }><TabDoor className="lgScreen"/>
                    <p>
                        <strong>
                            No Commitments<br/>
                            Cancel online at anytime.</strong></p><br />
                            <span className="mdScreen" style={{marginTop: '0.4rem'}}>Cancel</span></Tab>
                    <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null }`}><TabDevices className="lgScreen" />
                    <p style={{marginTop:'-4.7375rem'}}><strong>Watch anywhere</strong></p>
                    <span className="mdScreen" style={{marginTop: '-5.3125rem'}}>Devices</span></Tab>
                    <Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null }`}><TabPrice className="lgScreen"/>
                    <p><strong>Pick your price</strong></p><br /><span className="mdScreen" sty>Price</span></Tab>
                </TabList>
                <TabPanel>
                    <Tabcontent1/>
                </TabPanel>
                <TabPanel>
                    <Tabcontent2/>
                </TabPanel>
                <TabPanel>
                    <Tabcontent3/>
                </TabPanel>
            </Tabs>
        </div>

        );
    }
}

export default TabComponents;