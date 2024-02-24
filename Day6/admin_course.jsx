import React from 'react';
import Cards from '../components/cards';
import CustomSidenav from '../components/custom_sidenav';
const Admincourse = () => {
    return (
        <div style={{display:'flex', marginRight:900}}>
            <div className='bar'>
                <CustomSidenav/>
            </div>
            <div className='course'>
                <div>
                    <h1>Beginner</h1><br/>
                <a href='https://www.chess.com/lessons/opening-principles'><Cards name={"Opening Principles"} ></Cards></a>
                <a href='https://www.chess.com/lessons/winning-the-game'><Cards name={"Winning the game"}></Cards></a>
                <a href='https://www.chess.com/lessons/capturing-pieces'><Cards name={"Capturing Pieces"}></Cards></a>
                <a href='https://www.chess.com/lessons/finding-checkmate'><Cards name={"Finding checkmate"}></Cards></a>
                </div>
                <div>
                    <h1>
                        Intermediate
                    </h1><br/>
                <a href='https://www.chess.com/lessons/make-the-most-of-your-pieces'><Cards name={"Make the most of your pieces"}></Cards></a>
                <a href='https://www.chess.com/lessons/understanding-endgames'><Cards name={"Understanding endgames"}></Cards></a>
                <a href='https://www.chess.com/lessons/winning-with-tactics'><Cards name={"Winning tactics"}></Cards></a>
                <a href='https://www.chess.com/lessons/forcing-moves'><Cards name={"Forcing moves"}></Cards></a>
                </div>
                <div>
                    <h1>
                        Advanced
                    </h1><br/>
                <a href='https://www.chess.com/lessons/key-openings'><Cards name={"Key openings"}></Cards></a>
                <a href='https://www.chess.com/lessons/choosing-the-best-move'><Cards name={"Choosing the best moves"}></Cards></a>
                <a href='https://www.chess.com/lessons/activating-your-pieces'><Cards name={"Activating your pieces"}></Cards></a>
                <a href='https://www.chess.com/lessons/attacking-the-king-1'><Cards name={"Attacking the King"}></Cards></a>
                </div>
            </div>
        </div>
    );
};

export default Admincourse;