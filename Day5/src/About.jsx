import React from 'react';
import CustomNavbar from '../components/custom_navbar';
import '../assets/css/about.css'
import about_img from '../assets/images/about1.png'
const About = () => {
    return (
        <div className='about_container'> 
            <header>
            <CustomNavbar/>
            </header>
                <div className='about__text1'>
                About Our Chess Academy!
                </div>
                <div className='about__text2'>
                Welcome to Chess, where we foster a love for chess and strive to empower players of all levels.
                    </div>
                <div className='about__text3'>
                At Chess, we are passionate about chess education. Our team consists of experienced chess coaches and players who are dedicated to helping our students reach their full potential.
                    </div>
            <aside>
            <div className='con'>
                <p>
            TWhether you're a beginner looking to learn the basics or an advanced player aiming to sharpen your skills, we offer a variety of programs and resources tailored to meet your needs.
            Our mission is to provide a supportive and engaging environment where students can develop their strategic thinking, problem-solving abilities, and sportsmanship through the game of chess.
                    you'll find valuable resources and contact information for popular chess academies in the area.
                    Additionally, we provide information about famous chess players like Magnus Carlsen and Garry Kasparov.
                    Enjoy exploring the world of chess with us!
                    </p>
            </div>
            </aside>
        </div>
    );
}

export default About;
