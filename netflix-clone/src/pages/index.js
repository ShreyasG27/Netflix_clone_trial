import React, {Component} from 'react'
import Header from '../components/Header';
import TabComponents from '../components/TabComponents';
import Footer from '../components/Footer';
class Main extends Component{
    render()
    {
        return(
            <div>
                <Header />
                <TabComponents/>
                <Footer/>
            </div>

        )
    }
}

export default Main;