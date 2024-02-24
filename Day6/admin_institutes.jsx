import React from 'react';
import CustomSidenav from '../components/custom_sidenav';
import Cards from '../components/cards';

const Admininstitutes = () => {
    return (
        <div style={{display:"flex"}}>
            <div>
                <CustomSidenav/>
            </div>
            <div style={{display:'flex', gap:30, marginTop: 40, marginLeft: 40}}>
            <div className='admin__institute' style={{display:'block'}}>
                <Cards name={"Institute 1"}/>
                <Cards name={"Institute 2"}/>
                <Cards name={"Institute 3"}/>
                <Cards name={"Institute 4"}/>
                
            </div>
            <div className='admin__institute' style={{display:'block'}}>
                <Cards name={"Institute 5"}/>
                <Cards name={"Institute 6"}/>
                <Cards name={"Institute 7"}/>
                <Cards name={"Institute 8"}/>

            </div>
            </div>
        </div>
    );
};

export default Admininstitutes;