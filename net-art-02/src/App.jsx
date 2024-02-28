import "./App.css";

function App() {
  return (
    <>
      <div className="hero">
        <div className="hero_image">
          <img src="/public/images/1.png" alt="" />
        </div>
        <div className="hero_content">
          <img id="logo" src="/public/images/logo.png" alt="" />
          <h2>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
          <ul>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
          </ul>
          <img src="/public/images/2.png" alt="" />
          <p>
            Government of India has awarded the <span className="heading">"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <p className="middle-paragraph">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
      </p>
      <img className="motors" src="/public/images/3.png" alt="" />
      <p className="middle-one">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
<div className="footer-line"></div>
<h2 style={{textAlign:"center"}}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h2>
<p style={{textAlign:"center",padding:"5px 40px"}}> CHEMICALS <span style={{color:"red"}}>|</span> PROCESS POWER WATER <span style={{color:"red"}}>|</span> WASTE WATER OILS & GAS <span style={{color:"red"}}>|</span> PHARMA SUGARS & DISTILLERIES <span style={{color:"red"}}>|</span> PAPER & PULP <span style={{color:"red"}}>|</span> MARINE & DEFENCE <span style={{color:"red"}}>|</span> METAL & MINING <span style={{color:"red"}}>|</span> FOOD & BEVERAGE <span style={{color:"red"}}>|</span> PETROCHEMICAL & REFINERIES <span style={{color:"red"}}>|</span> SOLAR <span style={{color:"red"}}>|</span> BUILDING <span style={{color:"red"}}>|</span> HVAC <span style={{color:"red"}}>|</span> FIRE <span style={{color:"red"}}>|</span> FIGHTING <span style={{color:"red"}}>|</span> AGRICULTURE & RESIDENTIAL</p>
      <footer>
        <div className="footer-imag">
          <img src="/public/images/phone-call.png" alt="" />
          <p>7752248622</p>
        </div>
        <div className="footer-imag">
          <img src="/public/images/facebook.png" alt="" />
          <p>7752248622</p>
        </div>
        <div className="footer-imag">
          <img src="/public/images/world-wide-web.png" alt="" />
          <p>7752248622</p>
        </div>
      </footer>
    </>
  );
}

export default App;
