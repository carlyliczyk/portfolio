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

const NovadaqSpecSheet = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const ScrollLink = Scroll.ScrollLink
    return (
            <div className="portfolio fluent">
<Helmet>
  {/* Standard SEO */}
  <title>NOVADAQ Spec Sheet | Carly Liczyk Portfolio</title>
  <meta
    name="description"
    content="Graphic design work focused on refining AutoCAD drawings, integrating precise specifications, and producing clear, professional layouts to support sales and customer engagement."
  />

  {/* Open Graph (Facebook / LinkedIn) */}
  <meta property="og:title" content="NOVADAQ Spec Sheet | Carly Liczyk Portfolio" />
  <meta
    property="og:description"
    content="Professional spec sheet design for NOVADAQ Technologies. Graphic design and AutoCAD refinements created to present technical details clearly and effectively for medical technology products."
  />
  <meta property="og:image" content="https://carlyliczyk.com/assets/images/nvdq-spec/intro.webp" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://carlyliczyk.com/novadaq-spec-sheet" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="NOVADAQ Spec Sheet | Carly Liczyk Portfolio" />
  <meta
    name="twitter:description"
    content="Portfolio highlight: NOVADAQ Spec Sheets. Designed to showcase precise technical specifications and enhance clarity for sales teams and customers."
  />
  <meta name="twitter:image" content="https://carlyliczyk.com/assets/images/nvdq-spec/intro.webp" />
</Helmet>
    <div className="overflow">
        <HomeButton/>                           
        <ProjectMenu /> 
               
                    <section className="container bg-white dark:bg-dark border border-gray spacer shadow grid-bkg">
                    <div className='project-grid'>
                    <div className='project-img'>
                            <img src="/assets/images/nvdq-spec/intro.webp" className='w-full rounded border'></img>                            
                        </div>    
                    <div id="client"  className='port-header'>
                            <div className='port-title'>
                            <div className='h-full'>
                                <div className='port-title'>
                                    <div className='project-logo card'>
                                    <Tooltip content="NOVADAQ">    
                                        <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 70 70" overflow="visible" className='h-8'>
                                                                                <g>
                                            <g>
                                                <polygon fill="#54B948" points="0,0 0,70 50.3,70 26.4,0 		"/>
                                            </g>
                                            <g>
                                                <polygon fill="#54B948" points="70,0 26.6,0 62.2,70 70,70 		"/>
                                            </g>
                                        </g>
                                    </svg>
                                    </Tooltip>
                                    </div>                                    
                                    <h1>NOVADAQ Technologies</h1>
                                        <div>                                        
                                        <p>NOVADAQ Technologies Inc. develops and commercializes medical imaging and therapeutic devices for use in the operating room. The Company's imaging platform can be used to visualize blood vessels, nerves and the lymphatic system during surgical procedures. </p>
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
                                        At NOVADAQ, I was responsible for designing spec sheets for our top four products. I fine-tuned AutoCAD drawings by incorporating specific dimensions and other crucial details, ensuring that relevant information was presented in a clear and concise manner. This made it easier for our sales team and customers to understand and accurately apply our products. 
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
                                       2017
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
                                    
                                    <ul>
                                    <li>
                                    <Tooltip content="Illustrator">  
                                                                  
                                        <img src="/assets/images/assets/Illustrator_icon.svg"></img>                          
                                    </Tooltip>                                
                                    </li>
                                
                                    <li>
                                    <Tooltip content="InDesign">
                                        <img src="/assets/images/assets/Adobe_Indesign_icon.svg"></img>  
                                        </Tooltip>                               
                                    </li>
                                    </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </section>

                    <section id="visual" className="container">
                        <div className='grid-bkg none'>
                        <div className="project-grid">
                            <div className='sec-title'>                           
                                <div className='col-span-6 lg:col-span-6'> 
                                <Fade triggerOnce direction='down' >                         
                                    <p className="eyebrow">Graphic Design</p>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h4 className="title">Spec Sheets</h4>
                                    </Fade>    
                                </div>                                                           
                            </div>
                            <div className='project-img grid grid-cols-12 gap margins-sm margins-b-sm'>
                                <div className='col-span-12 lg:col-span-6'>                                   
                                <img src="/assets/images/nvdq-spec/spec-1.webp" className='rounded' alt="Novadaq Spy-Phi Machine"></img>    
                                </div>
                                <div className='col-span-12 lg:col-span-6'>                                   
                                <img src="/assets/images/nvdq-spec/spec-2.webp" className='rounded' alt="Novadaq LunaMachine"></img>    
                                </div>
                                <div className='col-span-12 lg:col-span-6 '>                                   
                                <img src="/assets/images/nvdq-spec/spec-3.webp" className='rounded' alt="Novadaq Spy Elite Machine"></img>    
                                </div>
                                <div className='col-span-12 lg:col-span-6'>                                   
                                <img src="/assets/images/nvdq-spec/spec-4.webp" className='rounded' alt="Novadaq Pinpoint Machine"></img>    
                                </div>
                            </div>

                        </div>
                        </div>
                    </section>
                    
                    
                </div>
            </div>
    );
};


export default NovadaqSpecSheet;
