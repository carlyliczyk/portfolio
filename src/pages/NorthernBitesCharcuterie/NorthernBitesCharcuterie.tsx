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

const NorthernBitesCharcuterie = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const ScrollLink = Scroll.ScrollLink
    return (
            <div className="portfolio">
<Helmet>
  <title>Northern Bites Charcuterie | Carly Liczyk Portfolio</title>
  <meta
    name="description"
    content="Portfolio project: Website design and development for Northern Bites Charcuterie. A modern, elegant digital presence showcasing premium catering services and refined brand storytelling."
  />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Northern Bites Charcuterie | Carly Liczyk Portfolio" />
  <meta
    property="og:description"
    content="Website and brand design for Northern Bites Charcuterie highlighting premium catering services through clean UI/UX, elegant visuals, and responsive development."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://carlyliczyk.com/northern-bites-charcuterie" />
  <meta
    property="og:image"
    content="https://carlyliczyk.com/assets/images/northernbites/intro.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Northern Bites Charcuterie | Carly Liczyk Portfolio" />
  <meta
    name="twitter:description"
    content="Portfolio project: Northern Bites Charcuterie website design — merging hospitality expertise with refined digital branding."
  />
  <meta
    name="twitter:image"
    content="https://carlyliczyk.com/assets/images/northernbites/intro.webp"
  />

  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://carlyliczyk.com/northern-bites-charcuterie" />
</Helmet>                

<div className="overflow">
    <HomeButton/>                       
    <ProjectMenu />  
              
                    <section className="spacer grid-bkg">
                    <div className='project-grid'>
                    <div className='project-img'>
                            <img src="/assets/images/northernbites/intro.webp"></img>                            
                        </div>    
                    <div id="client" className='port-header'>
                            <div className='port-title'>
                            <div className='h-full'>
                                <div className='port-title'>
                                    <div className='project-logo card'>
                                    <Tooltip content="Northern Bites Charcuterie">    
                                       <img src="/assets/images/northernbites/logo.png"></img>
                                    </Tooltip>
                                    </div>                                    
                                    <h1>Northern Bites Charcuterie</h1>
                                        <div>                                        
                                        <p>Northern Bites Charcuterie specializes in turning any event, big or small, into a polished culinary experience. They combine elegant visual presentation, personalized serving styles, and hospitality expertise to make gatherings both memorable and hassle-free.  </p>
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
                                       Design and develop a modern, visually appealing, and user-friendly website that showcases Northern Bites Charcuterie’s premium catering services and elevates its brand presence online. The site needed to communicate the company’s focus on quality, presentation, and service, while also making it easy for potential clients to explore offerings and make inquiries.
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
                                       <span>UI/UX Design</span> <span>Web Development</span>
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
                                    
                                    <ul className='tech'>
                                    <li>
                                    <Tooltip content="Figma">  
                                    <img src="/assets/images/assets/Figma_icon.svg"></img>                           
                                    </Tooltip>                                
                                    </li>
                                    <li>
                                    <Tooltip content="WordPress">  
                                    <img src="/assets/images/assets/WordPress_icon.svg"></img>                           
                                    </Tooltip>                                
                                    </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="website wrapper">
                                    <div>
                                    <h2 className="heading">
                                        Website
                                    </h2>
                                    </div>
                                    <div>
                                    <p className="description link dark:text-gray-dark">
                                       <a className='outbound' href="https://northernbitescharcuterie.com/" target='_blank'>Northernbitescharcuterie.com</a>
                                    </p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </section>
                    <section id="brief" className="container bg-white dark:bg-dark border relative text-black spacer">
                        <div className='grid-bkg'>
                        <div className="project-grid margins-b">
                            <div className='sec-title'>
                                <div className='col-span-2'>                          
                                    <h2 className='title'>Project</h2> 
                                </div>                            
                                <div className='details col-span-4'>                           
                                   
                                </div>
                            </div>
                            <div className="tech margins spacer-md">
                            <h3 className="sec-subtitle">Technologies Used</h3>
                            <div className="">    
                                <Fade triggerOnce direction='up' cascade damping={0.1}>                     
                                <ul>   
                                    <li>
                                                <Tooltip content="Figma"> 
                                                    <div>    
                                                        <img src="/assets/images/assets/Figma_icon.svg" alt="Figma Icon"></img>
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
                                        
                                </ul>
                                </Fade>
                            </div>
                            </div>
                            <div className="margins">
                            <h2 className="sec-subtitle">Scope of Work</h2>
                            <div className="grid grid-cols-12 gap-5">
                            
                                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <h3 className="card-title mb-3">Brand Discovery & Positioning</h3> 
                                        <p>Researched the catering and hospitality market to position Northern Bites as a premium, experience-driven brand.</p>                                    
                                    </div>
                                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <h3 className="card-title mb-3">UI/UX Design</h3> 
                                        <p>Created a clean, elegant interface that highlights product photography, service packages, and the unique mobile charcuterie cart concept.
                                        </p>                             
                                    </div>                          
                                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <h3 className="card-title mb-3">Content Strategy</h3> 
                                        <p>Structured content to emphasize the brand story, service offerings, and booking process while maintaining a refined and approachable tone.
                                        </p>                             
                                    </div>
                                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <h3 className="card-title mb-3">Development</h3> 
                                        <p>Built a responsive website optimized for desktop and mobile, ensuring seamless performance and accessibility.
                                        </p>                             
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
                                    <p className="eyebrow">UI Design</p>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h4 className="title">Visual Design</h4>
                                    </Fade>    
                                </div>                                                           
                            </div>
                            <div className='project-img grid grid-cols-12 gap margins-sm margins-b-sm'>
                                <div className='col-span-12 lg:col-span-6'>                                   
                                <img src="/assets/images/northernbites/visual design-1.webp" alt="Laptop View"></img>    
                                </div>
                                <div className='col-span-12 lg:col-span-6'>                                   
                                <img src="/assets/images/northernbites/visual design-2.webp"  alt="Mobile View"></img>    
                                </div>
                                <div className='col-span-12 lg:col-span-12'>                                   
                                <img src="/assets/images/northernbites/visual design.webp"  alt="Mobile View"></img>    
                                </div>
                                
                            </div>

                        </div>
                        </div>
                    </section>
                    
                    
                </div>
            </div>
    );
};


export default NorthernBitesCharcuterie;
