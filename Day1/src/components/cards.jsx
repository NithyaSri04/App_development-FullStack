import React from 'react';
import { Panel, Placeholder } from 'rsuite';

const Cards = (props1, props2) => {
    return (
        <div>
              <Panel header={props2.name2} shaded style={{width:'300px',marginBottom:'30px'}}>
    {/* <Placeholder.Paragraph /> */}
    {props1.name}


  </Panel>
        </div>
    );
};

export default Cards;