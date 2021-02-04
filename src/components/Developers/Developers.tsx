import React from 'react';
import styles from './Developers.scss';
import GitHub from '@/assets/images/GitHub-logo.png';
import Torondil from '@/assets/images/torondil.png';
import Gordey from '@/assets/images/nerbet.png';
import KingstonTwelve from '@/assets/images/kingston.png';
import Julia from '@/assets/images/julia.png';

const Developers = (): JSX.Element => {
  return (
    <div className="bg-light theme-container">
      <div className="container">
        <h2 className="developers-title display-4 my-3 text-center">Development team:</h2>
        <div className="row pb-4">
          <div className="col-md-12 blue-box bio-detail">
            <div className="biogrid container">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-5 col-sm-6 col-xs-5 w-75 h-75 d-flex justify-content-center align-items-center">
                  <img alt="Pavel" className="img-responsive w-75" src={Torondil} />
                </div>
                <div className="col-lg-8 col-md-7 col-sm-6 col-xs-7">
                  <div className="bio-info">
                    <h2>Pavel Bulauski</h2>
                    <p className="bio-subtitle"><strong>Developer</strong></p>
                    <p className="bio-quote">Novice frontend-developer with technical education. Confident knowledge of HTML, CSS/SCSS, JavaScript. I make it my goal to create software with the user in mind, creating applications with a useable and intuitive user interface experience. I also understand the importance of creating highly readable and easily maintainable source code. I am constantly striving to learn new technologies and look to ways to better myself in this rapidly changing industry.</p>
                    <a className="d-flex" href="https://github.com/Torondil">
                      <img alt="GitHub" className={styles['close-backex']} src={GitHub} />
                      <h6>GitHub</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-4">
          <div className="col-md-12 blue-box bio-detail">
            <div className="biogrid container">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-5 col-sm-6 col-xs-5 w-75 h-75 d-flex justify-content-center align-items-center">
                  <img alt="KingstonTwelve" className="img-responsive w-75" src={KingstonTwelve} />
                </div>
                <div className="col-lg-8 col-md-7 col-sm-6 col-xs-7">
                  <div className="bio-info">
                    <h2>Maksim Vinnikau</h2>
                    <p className="bio-subtitle"><strong>Developer</strong></p>
                    <p className="bio-quote">I met with IT on programming courses at the IT Class training center (Gomel) in September 2018. I learned the basics HTML / CSS there. Also, I studied programming algorithms (C / C ++), the basics of SQL, and building relational databases. I started my career in a small web studio Medialime. I learned to create sites using cms WordPress (LandigPage, corporate sites and stores). I raised the level of HTML / CSS / JS during the work. I learn JS in my free time. I get skills at online workshops and at educational resources. In general, I am engaged in self-education. I have a great desire to grow in front-end development. About me: responsible, assiduous and easily trained. I am calm and positive about any problems, I think this is my forte.</p>
                    <a className="d-flex" href="https://github.com/KingstonTwelve">
                      <img alt="GitHub" className={styles['close-backex']} src={GitHub} />
                      <h6>GitHub</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-4">
          <div className="col-md-12 blue-box bio-detail">
            <div className="biogrid container">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-5 col-sm-6 col-xs-5 w-75 h-75 d-flex justify-content-center align-items-center">
                  <img alt="Julia Pekhota" className="img-responsive w-75 mb-3" src={Julia} />
                </div>
                <div className="col-lg-8 col-md-7 col-sm-6 col-xs-7">
                  <div className="bio-info">
                    <h2>Julia Pekhota</h2>
                    <p className="bio-subtitle"><strong>Developer</strong></p>
                    <p className="bio-quote">Julia Pekhota is a web developer and worked for a Paragon Software. The company develops software tools, solutions. I’m on maternity leave now, but this does not stop to learn something new. I am an active, purposeful, responsible person and look to ways to better myself.</p>
                    <a className="d-flex" href="https://github.com/IvanPekh">
                      <img alt="GitHub" className={styles['close-backex']} src={GitHub} />
                      <h6>GitHub</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-4">
          <div className="col-md-12 blue-box bio-detail">
            <div className="biogrid container">
              <div className="row  align-items-center">
                <div className="col-lg-4 col-md-5 col-sm-6 col-xs-5 w-75 h-75 d-flex justify-content-center align-items-center">
                  <img alt="Gordey" className="img-responsive w-75" src={Gordey} />
                </div>
                <div className="col-lg-8 col-md-7 col-sm-6 col-xs-7">
                  <div className="bio-info">
                    <h2>Gordey Druzhina</h2>
                    <p className="bio-subtitle"><strong>Developer</strong></p>
                    <p className="bio-quote">Novice frontend developer with C++ knowledge. I learnt C++ at the university. Now I am a second year student at the Faculty of Mechanics and Mathematics of BSU. I want to learn something that will help me to become a professional, who may probably teach someone else one day.</p>
                    <a className="d-flex" href="https://github.com/Nerbet">
                      <img alt="GitHub" className={styles['close-backex']} src={GitHub} />
                      <h6>GitHub</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Developers;
