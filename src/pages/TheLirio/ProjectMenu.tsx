import { Navbar, NavbarToggle, NavbarCollapse, Tooltip } from "flowbite-react";
import { Link as LinkRoll } from "react-scroll";
import LottieHoverIcon from "../../components/lottie/LottieHoverIcon";
import "../../assets/css/ProjectMenu.css";

// Lottie animations (project-specific)
import briefAnim from "../../lotties/brief.json";
import clientAnim from "../../lotties/client.json";

export default function ProjectMenu() {
  return (
    <div className="menu-dock">
      <div className="liquid-menu">
        <div className="liquid-wrapper">
          <div className="liquidGlass-wrapper dock">
            <div className="liquidGlass-text">
              <div className="dock">
                <div className="menu-float-inner">
                  <div className="menu-float-wrap">
                    <Navbar className="bg-transparent">
                      <NavbarToggle />

                     <NavbarCollapse>
                        {/* ---------- sweetie b ---------- */}
               <div className='button-section intro'>
                        <div className='button-container'>
                        <Tooltip content="Client">
                            <LinkRoll activeClass="active" to="client" spy={true} smooth={true}  offset={-70} duration={500}>
                                <img src="\assets\images\system\client.svg" className="menu-icon"></img>
                            </LinkRoll>
                        </Tooltip> 
                        <Tooltip content="Brief">
                            <LinkRoll activeClass="active" to="brief"  spy={true} smooth={true}  offset={-70} duration={500}>
                                <img src="\assets\images\system\brief.svg" className="menu-icon"></img>
                            </LinkRoll>
                        </Tooltip> 
                        </div>
                    <div className='title-container'>
                        <p>Project Info</p>
                    </div>
                </div>
                <div className='button-section design-system'>
                    <div className="button-container">  
                      <Tooltip content="User Experience">
                        <LinkRoll activeClass="active" to="UX" spy={true} smooth={true}  offset={-70} duration={500}>
                        <img src="\assets\images\system\design-process.svg" className="menu-icon"></img>   
                        </LinkRoll>
                        </Tooltip>        
                     <Tooltip content="UI Styles">
                        <LinkRoll activeClass="active" to="style" spy={true} smooth={true}  offset={-70} duration={500}>
                        <img src="\assets\images\system\design-system.svg" className="menu-icon"></img>   
                        </LinkRoll>
                    </Tooltip>       
                    <Tooltip content="UI Components">
                        <LinkRoll activeClass="active" to="components" spy={true} smooth={true}  offset={-70} duration={500}>
                        <img src="\assets\images\system\components.svg" className="menu-icon"></img>   
                        </LinkRoll>
                    </Tooltip>
                                    
                    </div>
                    <div className='title-container'>
                        <p>Design System</p>
                    </div>
                </div>
                <div className='button-section visual-design'>
                    <div className="button-container">      
                    <Tooltip content="UI Design">
                        <LinkRoll activeClass="active" to="visual" className='visual' spy={true} smooth={true}  offset={-70} duration={500}>
                        <img src="\assets\images\system\visual-design.svg" className="menu-icon"></img>   
                        </LinkRoll>
                    </Tooltip>                 
                    </div>
                    <div className='title-container'>
                        <p>Visual Design</p>
                    </div>
                </div>
                      </NavbarCollapse>
                    </Navbar>
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

