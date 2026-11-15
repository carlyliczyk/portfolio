import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import { Link as LinkRoll } from "react-scroll";
import { Accordion, AccordionContent, AccordionTitle, AccordionPanel, Tooltip, Navbar, NavbarToggle, NavbarCollapse } from 'flowbite-react';
import { Fade, Slide} from "react-awesome-reveal";
import { Helmet } from 'react-helmet-async';
import HomeButton from "../../components/HomeButton";
import ProjectMenu from "./ProjectMenu";

const Trackman = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const ScrollLink = Scroll.ScrollLink
    return (
            <div className="portfolio">
<Helmet>
  <title>Trackman | Carly Liczyk Portfolio</title>
  <meta
    name="description"
    content="Website design project for Trackman Golf Simulator, featuring intuitive UI/UX, responsive layout, and a polished visual identity tailored for golf technology."
  />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Trackman | Carly Liczyk Portfolio" />
  <meta
    property="og:description"
    content="Trackman Golf Simulator website — emphasizing seamless user experience, performance, and modern design aesthetics."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://carlyliczyk.com/trackman" />
  <meta
    property="og:image"
    content="https://carlyliczyk.com/assets/images/trackman/intro.webp"
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Trackman | Carly Liczyk Portfolio" />
  <meta
    name="twitter:description"
    content="Website design for Trackman Golf Simulator — a portfolio piece showcasing expertise in golf-tech UI/UX and brand identity."
  />
  <meta
    name="twitter:image"
    content="https://carlyliczyk.com/assets/images/trackman/intro.webp"
  />

  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://carlyliczyk.com/trackman" />
</Helmet>
    <div className="overflow">
  <HomeButton/>                                
  <ProjectMenu />                   
               
                    <section className="container grid-bkg">
                    <div className='project-grid'>
                    <div className='project-img'>
                            <img src="/assets/images/trackman/intro.webp" className='w-full'></img>                            
                        </div>    
                    <div id="client" className='port-header'>
                            <div className='port-title'> 
                            <div className='h-full'>
                                <div className='port-title'>
                                    <div className='project-logo card'>
                                    <Tooltip content="Trackman Logo">    
                                       <img src="/assets/images/trackman/Trackman.svg" alt="logo" className="h-10"></img>
                                    </Tooltip>
                                    </div>                                    
                                    <h1>Trackman Golf Simulator</h1>
                                    <div>                                        
                                        <p>Indoor golf facility offering a state-of-the-art golf simulator, the world's most trusted and accurate ball tracking system.                                        </p>
                                    </div>
                                </div>
                                <div>
                                <Accordion collapseAll className="accordion border-none hover:bg-transparent py-0">
                                <AccordionPanel className='bg-transparent border-none text-black py-0'>
                                    <AccordionTitle className='font-semibold uppercase text-black bg-transparent'>
                                    <span className='p !text-black dark:!text-white '>Project Brief</span>
                                    </AccordionTitle>
                                    <AccordionContent className='!border-b !border-t-0 !border-gray !rounded-none dark:bg-dark'>
                                    <div>                                   
                                        <p className='dark:text-gray-dark'>
                                        Design a cutting-edge website offering in-depth insights into Trackman while presenting their product in a sleek, modern manner. This platform will serve as a comprehensive resource hub, delivering detailed information about Trackman's offerings. Additionally, it will feature a user-friendly membership login section and a secure payment gateway for hassle-free membership purchases.
                                        </p>
                                    </div>
                                    </AccordionContent>
                                </AccordionPanel>
                                </Accordion>
                                </div>
                            </div>
                            </div>                            
                            <div className='port-details'>
                            <div className="date wrapper">
                                    <div>
                                    <h2 className="heading">
                                        Date
                                    </h2>
                                    </div>
                                    <div>
                                    <p className="description p dark:text-gray-dark">
                                       2024
                                    </p>
                                    </div>
                                </div>
                                <div className="services wrapper">
                                    <div>
                                    <h2 className="heading">
                                        Services
                                    </h2>
                                    </div>
                                
                                    <div>
                                    <p className="description">
                                        <span>UI Design</span> <span>Web Dev</span>
                                    </p>
                                    </div>
                                </div>
                                <div className="tech wrapper">
                                    <div>
                                    <h2 className="heading">
                                        Tech
                                    </h2>
                                    </div>
                                    <div>
                                    <p className="description p dark:text-gray-dark">
                                    <ul>
                                    <li>
                                        <Tooltip content="Figma"> 
                                            <div>    
                                                <img src="/assets/images/assets/Figma_icon.svg" alt="Figma Icon"></img>
                                            </div>                                
                                        </Tooltip>
                                    </li>        
                                    <li>
                                        <Tooltip content="Photoshop">  
                                        <div>    
                                        <img src="/assets/images/assets/Photoshop_icon.svg" alt="Photoshop Icon"></img>                                                         
                                        </div>  
                                        </Tooltip>                              
                                    </li>
                                    <li>
                                        <Tooltip content="WordPress"> 
                                            <div>    
                                                <img src="/assets/images/assets/WordPress_icon.svg" alt="WordPress Icon"></img>                                                         
                                            </div>                                
                                        </Tooltip>
                                    </li>
                                </ul>
                                    </p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </section>

                    <section id="styles" className="container">
                        <div className='grid-bkg'>
                        <div className="project-grid">
                            <div className='sec-title'>                           
                                <div className='col-span-6 lg:col-span-6'> 
                                <Fade triggerOnce direction='down' >                         
                                    <h2 className="eyebrow">Design System</h2>
                                </Fade>
                                <Fade triggerOnce direction='up'>                            
                                    <h3 className="title">Styles</h3>
                                </Fade>    
                                </div>                                                           
                            </div>
                            <div className='project-img grid grid-cols-12'>
                                <div className='col-span-12' id='styles'>                                   
                                <img src="/assets/images/trackman/styles.webp" alt="Grid System" className='rounded' ></img>    
                                </div>
                            </div>

                        </div>
                        </div>
                    </section>
                    <section id="visual" className="container">
                        <div className='grid-bkg'>
                        <div className="project-grid">
                            <div className='sec-title'>
                                <div className='col-span-2'>  
                                <Fade triggerOnce direction='down' >                         
                                    <h2 className="eyebrow">Visual Design</h2>
                                </Fade>
                                <Fade triggerOnce direction='up'>                            
                                    <h3 className="title">UI Design</h3>
                                </Fade> 
                                </div>                            
                                <div className='details col-span-4'>                           
                                </div>
                            </div>
                            <div className='project-img grid grid-cols-12'>
                                <div className='col-span-12'>                                   
                                <img src="/assets/images/trackman/display.webp" alt="WordPress Site" className='rounded'></img>    
                                </div>
                            </div>

                        </div>
                        </div>
                    </section>

                </div>
            </div>
    );
};


export default Trackman;
