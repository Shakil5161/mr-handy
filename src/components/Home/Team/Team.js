import React from 'react';
import './Team.css'
import Team1 from '../../../img/team-1.jpg'
import Team2 from '../../../img/team1.png'
import Team3 from '../../../img/team-3.jpg'
const Team = () => {
    return (
        <section class="team">
            <div class="container">
                <div class="row">
                    <div class="title-section">
                        <h2>meet <span>our Trained</span> people</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="team-item">
                        <img src={Team1} alt="" />
                        <h3>Shakil Ahmed <span>frontend developer</span></h3>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>

                        </div>
                    </div>
                    <div class="team-item">
                        <img src={Team2} alt="" />
                        <h3>Fariha Zakir <span>business consultant</span></h3>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="team-item">
                        <img src={Team3} alt="" />
                        <h3>Mamikho <span>frontend developer</span></h3>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;