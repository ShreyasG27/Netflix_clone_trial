import React from 'react'
import Img from '../images/tab-1-pic.png';
import styled from 'styled-components';
import {Button} from './Button'
import ImgTv from '../images/tab-tv.png';
import Tablet from '../images/tab-tablet.png';
import Macbk from '../images/tab-macbook.png';
import { generateMedia } from 'styled-media-query';

function TabContentTwo(){
    return(
        <TabContainer>
            <div className="container">
                <div className="tab-content">
                    <span style={{fontSize: '1.5rem'}}>
                        
                        Watch TV shows and movies anytime, anywhere - personalized for you.
                    </span>
                    <Button className="btn">Try it now</Button>
                    
                </div>
                <div className="tab-bottom-content">
                    <div>
                        <img src={ImgTv} style={{width: '18.75rem'}} />
                        <h3>Watch on your TV</h3>
                        <p>smart Tvs, Playstation, Xbox, Chromecast, Apple TV, Blu-Ray players and
                             more.</p>
                    </div>
                    <div>
                        <img src={Tablet}style={{width: '18.75rem'}} />
                        <h3>Watch instantly or download later</h3>
                        <p>Available on phone and tablet, wherever you go.</p>
                    </div>
                    <div>
                        <img src={Macbk} style={{width: '18.75rem', paddingBottom: '0.625rem', paddingTop: '0.625rem'}}/>
                        <h3>Use on any Computer</h3>
                        <p>Watch right on Netflix.com</p>
                    </div>

                </div>
            </div>
        </TabContainer>



    );


    
}

export default TabContentTwo;

const customMedia= generateMedia
({
    smDesktop: '1440px',
    tablet: ' 900px'
})

const TabContainer= styled.div`
background: var(--main-deep-dark);

.tab-content
{
    margin: 0 15%;
}

.tab-top-content
{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
    ${customMedia.lessThan('smDesktop')`
    grid-template-columns: repeat(2, 1fr);   
     `}

    ${customMedia.lessThan('tablet')`
    grid-template-columns: 1fr;
    text-align: center;
    row-gap: 1.5rem; 
       `}

}

span{
    grid-column: 1/8;
    ${customMedia.lessThan('tablet')`
    grid-column: 1 / -1;
    font-size: 1.5rem;
    `}
}

.btn{
    margin: 0 1.25rem 1.25rem;
    grid: 10/12;
    ${customMedia.lessThan('tablet')`
    grid-column: 1 / -1;
    margin-left: 30%;
    margin-right:30%;
    `}
}

img{
    width:100%;
}

//Tab bottom content

.tab-bottom-content
{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
    ${customMedia.lessThan('tablet')`
    grid-template-columns: 1fr;

    `}
}

h3{
    margin: 0.5rem;
}
p
{
    color: var(--main-grey);
}`;