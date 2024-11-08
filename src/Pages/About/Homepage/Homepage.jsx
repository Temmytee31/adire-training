import React from 'react';
import './Homepage.css';
import Training1 from './../../../assets/Training1.jpg';
import Training2 from './../../../assets/Training2.jpg';
import Training3 from './../../../assets/Training3.jpg';
import Training4 from './../../../assets/Training4.jpg';
import Training5 from './../../../assets/Training5.jpg';
import Training6 from './../../../assets/Training6.jpg';
import Training7 from './../../../assets/Training7.jpg';
import Adire1 from './../../../assets/Adire1.jpg';
import Adire2 from './../../../assets/Adire2.jpg';
import Adire3 from './../../../assets/Adire3.jpg';
import Adire4 from './../../../assets/Adire4.jpg';
import Adire5 from './../../../assets/Adire5.jpg';
import Adire6 from './../../../assets/Adire6.jpg';
import Adire7 from './../../../assets/Adire7.jpg';
import Batik1 from './../../../assets/Batik1.jpg';
import Batik2 from './../../../assets/Batik2.jpg';
import Batik3 from './../../../assets/Batik3.jpg';
import Batik4 from './../../../assets/Batik4.jpg';
import Printing1 from './../../../assets/Printing1.jpg';
import Printing2 from './../../../assets/Printing2.jpg';
import Printing3 from './../../../assets/Printing3.jpg';
import Printing5 from './../../../assets/Printing5.jpg';
import Printing6 from './../../../assets/Printing6.jpg';
import Printing7 from './../../../assets/Printing7.jpg';
import Printing8 from './../../../assets/Printing8.jpg';
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Homepage() {
  return (
    <div>
        <div>
            <div className='first'>
                <h>What you need to know about the Adire Training</h>
            </div>
            <div className='started'>
                <h3>1. Executive Summary:</h3>
                <p>We started tie-dye training since 2021 and we have done over 5 masterclass tie-dye training so far, in our past trainings, 
                    we have been able to successfully brought out the creativity among youths and students who are interested in making tie-dye 
                    a huge business till the end that Most of them have become master trainer on their own.  Our targeted audience have been youth 
                    and students but now, we are extending our audience to matured men and women who are solely interested in making tie-dye a business 
                </p>
            </div>
            <div className='training'>
                <img src={Training1} alt=''></img> 
                <img src={Training2} alt=''></img>
                <img src={Training4} alt=''></img>
                <img src={Training5} alt=''></img>
                <img src={Training6} alt=''></img>
                <img src={Training7} alt=''></img>
            </div>
            <div className='business'>
                <h3>2. Business Description:</h3>
                <p>Tie-dye is also known as Adire, it is one of the oldest form of creativity which is still in existence till date. 
                    It is a act of knotting, folding, tying fabrics and dipping it into dye to bring out a creative design. The process 
                    of Tie-dye is Multifaceted and it doesn't focus on a particular style, meaning, the more you expand your creativity, 
                    the more style of making tie-dye you get.
                </p>
                <div className='adire'>
                    <img src={Adire1} alt=''></img>
                    <img src={Adire3} alt=''></img>
                    <img src={Adire4} alt=''></img>
                    <img src={Adire5} alt=''></img>
                    <img src={Adire6} alt=''></img>
                    <img src={Adire7} alt=''></img>
                </div>
                <h5>Batik is also a creative and artistic work relating to tie-dye. It is the act and process of 
                    using candle wax to create stunning designs on fabric before dye to bring out aesthetic in the fabric.
                </h5>
                <div className='adire'>
                    <img src={Batik1} alt=''></img>
                    <img src={Batik2} alt=''></img>
                    <img src={Batik3} alt=''></img>
                    <img src={Batik4} alt=''></img>
                </div>
                <h5>Printing is the method of creating imaginary designs 
                    on fabrics through the use of mesh.
                </h5>
                <div className='adire'>
                    <img src={Printing1} alt=''></img>
                    <img src={Printing2} alt=''></img>
                    <img src={Printing3} alt=''></img>
                    <img src={Printing5} alt=''></img>
                    <img src={Printing6} alt=''></img>
                    <img src={Printing7} alt=''></img>
                    <img src={Printing8} alt=''></img>
                </div>
                <h5>All these are the service we offer in our training workshop.</h5>
            </div>
            <div class="youth">
                <h3>3. A detailed analysis of our target audience:</h3>
                <h5>Youth and women interested in learning tie-dye.</h5>
                <h5>In the past four years we have been focusing on youths and students that are creative but now, 
                    we are including men and women who love tie-dye and are interested in making tie-dye a business.
                </h5>
                <img className='train' src={Training3} alt=''></img>
                <h5>The most interesting thing about tie-dye is the uniqueness! No matter the amount of people doing tie-dye, yours will 
                    always be unique, and this will allow you to make more sales and avoid competitive market! Emphasis on the UNIQUENESS
                </h5>
                <img className='adire2' src={Adire2} alt=''></img>
                <div className='icon'>
                    <a href="https://api.whatsapp.com/send/?phone=23409025333957&text=Hello!+adire-kingz+from+your+website+I'm+your+name+____" className='what'><FaWhatsapp /></a>
                    <a href="https://www.instagram.com/amoscul_ture_adirekingz?igsh=MTlzbG9waHA3YW9jOQ==" className='inst'><FaInstagramSquare /></a>
                    <a href="https://www.facebook.com/amos.culture.7" className='Face'><FaFacebookF /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage