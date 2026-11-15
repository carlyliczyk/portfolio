import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import { Link as LinkRoll } from "react-scroll";
import { Fade, Slide} from "react-awesome-reveal";
import { Accordion, AccordionContent, AccordionTitle, AccordionPanel, Tooltip, Navbar, NavbarToggle, NavbarCollapse } from 'flowbite-react';
import { Helmet } from 'react-helmet-async';
import HomeButton from "../../components/HomeButton";
import ProjectMenu from "./ProjectMenu";


const AdvincOnepagerLead = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const ScrollLink = Scroll.ScrollLink
    return (
            <div className="portfolio fluent">
<Helmet>
        <title>Advanced Inclusion One Pager Design | Carly Liczyk Portfolio</title>
        <meta
          name="description"
          content="Graphic design project for Advanced Inclusion, featuring a professional one-pager brochure designed for LinkedIn. Showcasing branding, layout design, and DEI-focused communication."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Advanced Inclusion One Pager Design | Carly Liczyk Portfolio" />
        <meta
          property="og:description"
          content="Graphic design for Advanced Inclusion — a polished one-pager brochure created to highlight DEI consulting services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://carlyliczyk.com/advanced-inclusion-onepager" />
        <meta property="og:image" content="https://carlyliczyk.com/assets/images/advinc/advinc-1pg-01-1.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advanced Inclusion One Pager Design | Carly Liczyk Portfolio" />
        <meta
          name="twitter:description"
          content="Graphic design project for Advanced Inclusion, delivering a one-pager brochure for LinkedIn with a focus on DEI branding and professional presentation."
        />
        <meta name="twitter:image" content="https://carlyliczyk.com/assets/images/advinc/advinc-1pg-01-1.webp" />
</Helmet>
    <div className="overflow">
    <HomeButton/>                       
    <ProjectMenu />              
                    <section className="spacer grid-bkg">
                    <div className='project-grid'>
                    <div className='project-img'>
                            <img src="/assets/images/advinc/onepg-01-intro.webp" alt="hero"></img>                            
                        </div>    
                    <div id="client" className='port-header'>
                            <div className='port-title'>
                            <div className='h-full'>
                                <div className='port-title'>
                                    <div className='project-logo card'>
                                    <Tooltip content="Advanced Inclusion">    
                                       <img src="/assets/images/advinc/Logo-RGB_Stacked.svg" alt="Advanced Inclusion Logo"></img>
                                    
                                    </Tooltip>
                                    </div>                                    
                                    <h1>Advanced Inclusion</h1>
                                        <div>                                        
                                        <p>Advanced Inclusion is a consulting firm specializing in Diversity, Equity, and Inclusion (DEI) strategies. The company offers tailored DEI consulting services for corporations and DEI-informed executive coaching for individual professionals.</p>
                                    </div>
                                </div>
                                <div>
                                <Accordion collapseAll className="accordion border-none hover:bg-transparent py-0">
                                <AccordionPanel className='bg-transparent border-none text-black py-0'>
                                    <AccordionTitle className='font-semibold uppercase text-black bg-transparent'>
                                    <span className='p !text-black dark:!text-white '>Project Overview</span>
                                    </AccordionTitle>
                                    <AccordionContent className='!border-b !border-t-0 !border-gray !rounded-none dark:bg-dark'>
                                    <div>                                   
                                        <p className='dark:text-gray-dark'>
                                       Design a polished one-pager created to highlight DEI consulting services.
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
                                       2025
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
                                    <Tooltip content="Figma">  
                                                                  
                                        <img src="/assets/images/assets/Figma_icon.svg"></img>                          
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
                        <div className='grid-bkg'>
                        <div className="project-grid">
                            <div className='sec-title'>                           
                                <div className='col-span-6 lg:col-span-6'> 
                                <Fade triggerOnce direction='down' >                         
                                    <p className="eyebrow">Graphic Design</p>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h4 className="title">Product Broshure</h4>
                                    </Fade>    
                                </div>                                                           
                            </div>
                            <div className='project-img grid grid-cols-12 gap margins-sm margins-b-sm'>
                                <div className='col-span-12 lg:col-span-6'>                                   
                                <img src="/assets/images/advinc/advinc-1pg-01-1.webp" alt="Front"></img>    
                                </div>
                                <div className='col-span-12 lg:col-span-6'>                                   
                                <img src="/assets/images/advinc/advinc-1pg-01-2.webp"  alt="Back"></img>    
                                </div>
                                
                            </div>

                        </div>
                        </div>
                    </section>
                    
                    
                </div>
            </div>
    );
};


export default AdvincOnepagerLead;
