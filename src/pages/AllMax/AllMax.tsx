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

const AllMax = () => {
    document.title = 'Carly Liczyk - AllMax Mechanical';
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const ScrollLink = Scroll.ScrollLink
    return (
            <div className="portfolio">
<Helmet>
  <title>Allmax Logo & Branding | Carly Liczyk Portfolio</title>
  <meta
    name="description"
    content="Logo design and branding project for Allmax, showcasing the creation of a bold visual identity and cohesive brand presence."
  />
  <meta property="og:title" content="Allmax Logo & Branding | Carly Liczyk Portfolio" />
  <meta
    property="og:description"
    content="Logo design and branding project for Allmax, highlighting the process of building a strong visual identity and brand presence."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://carlyliczyk.com/allmax" />
  <meta property="og:image" content="https://carlyliczyk.com/assets/images/allmax/preview-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Allmax Logo & Branding | Carly Liczyk Portfolio" />
  <meta
    name="twitter:description"
    content="Logo design and branding project for Allmax, showcasing expertise in design, branding, and visual identity."
  />
  <meta name="twitter:image" content="https://carlyliczyk.com/assets/images/allmax/preview-image.jpg" />
</Helmet>

 <div className="overflow">

<HomeButton/>                         
<ProjectMenu /> 
           
                    <section className="container bg-white grid-bkg">
                    <div className='project-grid'>
                        <div className='project-img'>
                            <img src="/assets/images/allmax/Intro.webp" className='w-full rounded'></img>                            
                        </div>    
                    <div id="client" className='port-header'>
                            <div className='port-title'>
                            <div className='h-full'>
                                <div className='port-title'>
                                    <div className='project-logo card'>
                                    <Tooltip content="AllMax Mechanical">    
                                        <svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 279.4 92.6" overflow="visible" className='h-5'>
                                        <g>
                                            <g>
                                                <path d="M209.3,0l9.5,55.1L229.4,0h49.9v92.5h-30.2V26.1l-14,66.3h-32.9l-14-66.3v66.3h-30.2V0H209.3L209.3,0z"/>
                                                <path fill="#E1251B" d="M142.5,0v92.6h-30.3V78.3H57.1L42.4,92.1H0L94.8,0H142.5L142.5,0z M112.2,25L77.3,57.8h34.9V25L112.2,25z"
                                                    />
                                            </g>
                                        </g>
                                    </svg>
                                    </Tooltip>
                                    </div>                                    
                                    <h1>AllMax Mechanical</h1>
                                        <div>                                        
                                        <p>AllMax Mechanical is an HVAC (Heating, Ventilation, and Air Conditioning) company specializing in comprehensive HVAC services, including installation, maintenance, repair, and servicing.</p>
                                    </div>
                                </div>
                                <div>
                                <Accordion collapseAll className="accordion">
                                    <AccordionPanel>
                                        <AccordionTitle>
                                            <span>Project Brief</span>
                                        </AccordionTitle>
                                        <AccordionContent>
                                            <div>                                   
                                                <p>
                                                Designed branding, logo, stationery, merchandise and digital assets.
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
                                       2018
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
                                       <span>Graphic Design</span>
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
                                    <ul className="description p dark:text-gray-dark">    
                                        <li>
                                            <Tooltip content="Illustrator">  
                                                <div>    
                                                    <img src="/assets/images/assets/Illustrator_icon.svg" alt="Illustrator Icon"></img>
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
                                            <Tooltip content="Figma"> 
                                                <div>    
                                                    <img src="/assets/images/assets/Figma_icon.svg" alt="Figma Icon"></img>
                                                </div>                                
                                            </Tooltip>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>

                    <section id="logo" className="container bg-[#10181e] border-none">
                        <div className='grid-bkg none'>
                        <div className="project-grid">
                            <div className='sec-title !bg-dark2 dark:!bg-dark !border-gray-dark !mt-[0px]'>                           
                                <div className='col-span-6 lg:col-span-6'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <h2 className="eyebrow">Graphic Design</h2>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h3 className="title !text-white">Logo Design</h3>
                                    </Fade>     
                                </div>                                                           
                            </div>
                            <div className='project-img grid grid-cols-12 gap margins-sm mb-[5px]'>
                                <div className='col-span-12'>                                   
                                <img src="/assets/images/allmax/Logo-1.webp" className="rounded border-none" alt="Wordmark on dark background"></img>    
                                </div>
                                <div className='col-span-6'>                                   
                                <img src="/assets/images/allmax/Lettertype1-1.webp" className="rounded" alt="Lettermark on blue background"></img>    
                                </div>
                                <div className='col-span-6 '>                                   
                                <img src="/assets/images/allmax/Lettertype1-2.webp" className="rounded" alt="Lettermark on white background"></img>    
                                </div>
                                <div className='col-span-12'>                                   
                                <img src="/assets/images/allmax/Logo-2.webp" className="rounded"  alt="Wordmark 2 on dark background"></img>    
                                </div>
                                <div className='col-span-6 '>                                   
                                <img src="/assets/images/allmax/Lettertype2-1.webp" className="rounded"  alt="Lettermark 2 on blue background"></img>    
                                </div>
                                <div className='col-span-6 '>                                   
                                <img src="/assets/images/allmax/Lettertype2-2.webp" className="rounded"  alt="Lettermark 2 on blue background"></img>    
                                </div>
                                <div className='col-span-12'>                                   
                                <img src="/assets/images/allmax/Logo-3.webp" className="rounded" alt="Logo Outline"></img>    
                                </div>
                                <div className='col-span-12'>                                   
                                <img src="/assets/images/allmax/Logo-size.webp" className="rounded" alt="Logo Outline"></img>    
                                </div>
                               
                            </div>

                        </div>
                        </div> 
                    </section>
                    <section id="assets" className="container bg-[#10181e] border-none">
                        <div className='grid-bkg none'>
                        <div className="project-grid">
                            <div className='sec-title !bg-dark2 dark:!bg-dark !border-gray-dark !mt-[0px]'>                           
                                <div className='col-span-6 lg:col-span-6'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <h2 className="eyebrow">Brand Assets</h2>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h3 className="title !text-white">Stationery & Merchandise</h3>
                                    </Fade>    
                                </div>                                                           
                            </div>
                            <div className='project-img grid grid-cols-12 gap margins-sm mb-[5px]'>
                                <div className='lg:col-span-6 col-span-12'>                                   
                                <img src="/assets/images/allmax/bcard-1.webp" className="rounded " alt="Business Card"></img>    
                                </div>
                                <div className='lg:col-span-6 col-span-12'>                                   
                                <img src="/assets/images/allmax/bcard-2.webp" className="rounded " alt="Business Card"></img>    
                                </div>
                                <div className='lg:col-span-6 col-span-12'>                                   
                                <img src="/assets/images/allmax/Tshirt-1.webp" className="rounded " alt="T-shirt"></img>    
                                </div>
                                <div className='lg:col-span-6 col-span-12'>                                   
                                <img src="/assets/images/allmax/Tshirt-2.webp" className="rounded " alt="T-shirt"></img>    
                                </div>
                                <div className='lg:col-span-6 col-span-12'>                                   
                                <img src="/assets/images/allmax/Hardhat.webp" className="rounded " alt="Hardhat"></img>    
                                </div>
                                <div className='lg:col-span-6 col-span-12'>                                   
                                <img src="/assets/images/allmax/Car.webp" className="rounded " alt="Vehicle Design"></img>    
                                </div>

                               
                            </div>

                        </div>
                        </div>
                    </section>
                    <section id="ui" className="container bg-[#10181e] border-none">
                        <div className='grid-bkg none'>
                        <div className="project-grid">
                            <div className='sec-title !bg-dark2 dark:!bg-dark !border-gray-dark !mt-[0px]'>                           
                                <div className='col-span-6 lg:col-span-6'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <h2 className="eyebrow">Design System</h2>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h3 className="title !text-white">UI Components</h3>
                                    </Fade>   
                                </div>                                                           
                            </div>
                            <div className='project-img grid grid-cols-12 gap margins-sm mb-[5px]'>
                                <div className='col-span-12'>                                   
                                <img src="/assets/images/allmax/Icons.webp" className="rounded " alt="App Icons"></img>    
                                </div>                               
                            </div>

                        </div>
                        </div>
                    </section>

                    
                    
                </div>
            </div>
    );
};


export default AllMax;
