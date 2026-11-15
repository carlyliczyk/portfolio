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


const FluentTranslations = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const ScrollLink = Scroll.ScrollLink
    return (
            <div className="portfolio fluent">
 <Helmet>
  <title>Fluent Translations | Carly Liczyk Portfolio</title>
  <meta
    name="description"
    content="Fluent Translations website design project, showcasing a multilingual, culturally aware visual identity and user experience."
  />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Fluent Translations | Carly Liczyk" />
  <meta property="og:description" content="Design of the Fluent Translations site to support global communication — highlighting UI/UX, responsive layout, and brand consistency."  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://carlyliczyk.com/fluent-translations" />
  <meta property="og:image" content="https://carlyliczyk.com/assets/images/fluent/preview-image.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Fluent Translations | Carly Liczyk" />
  <meta name="twitter:description" content="Website design for Fluent Translations — a portfolio piece demonstrating multilingual UX, branding, and interface design."  />
  <meta name="twitter:image" content="https://carlyliczyk.com/assets/images/fluent/preview-image.jpg" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://carlyliczyk.com/fluent-translations" />
</Helmet>   
<div className="overflow">

<HomeButton/>                                    
 <ProjectMenu />  
   
               
                    <section  className="container bg-white dark:bg-dark border border-gray spacer shadow grid-bkg">
                    <div className='project-grid wrapper'>
                        <div className='project-img spacer margins'>
                            <img className="w-full" src="/assets/images/fluent/port-fluent-1.webp"></img>
                        </div>    
                    <div id="client" className='port-header'>
                            <div className='port-title'>
                            <div className='h-full'>
                                <div className='port-title'>
                                    <div className='project-logo card'>
                                    <Tooltip content="Fluent Translations">    
                                        <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 506.6 507.6" overflow="visible" className='h-8'>
                                    <g>
                                        <path fill="#262626" d="M183.7,400.1V178h18.6v222.1H183.7z"/>
                                        <path fill="#262626" d="M267.3,400.1c-0.2-2-0.3-4-0.4-5.9c-0.1-2-0.1-4-0.1-6.2c-2.5,4.5-5.8,8-9.9,10.4c-4,2.4-8.7,3.6-13.9,3.6
                                            c-14.4,0-21.6-9.6-21.6-28.9V233.1h18.6v137.1c0,5,0.8,8.5,2.4,10.5c1.6,2,4.2,3,7.8,3c2.9,0,5.6-0.8,8.2-2.3
                                            c2.6-1.5,4.6-4.1,6.1-7.7V233.1h18.6v167.1H267.3z"/>
                                        <path fill="#262626" d="M342.9,332.1h17.5v36.7c0,22.5-10,33.7-30,33.7c-19.2,0-28.9-11.2-28.9-33.7V264.7
                                            c0-11.3,2.5-19.9,7.4-25.6c4.9-5.8,12.1-8.6,21.4-8.6c20,0,30,11.4,30,34.3v53.7h-41.6v50.5c0,9.9,3.9,14.8,11.6,14.8
                                            c8.3,0,12.4-5,12.4-14.8V332.1z M342.9,264.7c0-9.9-4.1-14.8-12.4-14.8c-7.7,0-11.6,5-11.6,14.8v40.2h24V264.7z"/>
                                        <path fill="#262626" d="M422.5,400.1V262.2c0-4.9-0.8-8.3-2.4-10.4c-1.6-2.1-4.4-3.1-8.4-3.1c-2.7,0-5.4,0.8-8.1,2.4
                                            c-2.7,1.6-4.8,4.2-6.2,7.8v141.1h-18.6V233.1h15.7c0.5,4.2,0.8,8.4,0.8,12.7c2.5-4.7,5.9-8.4,10-11.2c4.1-2.8,8.8-4.2,14-4.2
                                            c7.6,0,13.1,2.4,16.6,7.3c3.5,4.9,5.3,12.7,5.3,23.5v139H422.5z"/>
                                        <path fill="#262626" d="M498.9,401.2c-0.9,0.4-2.2,0.7-3.9,0.9c-1.7,0.3-3.3,0.4-4.7,0.4c-9.9,0-17.3-3.1-22.1-9.2
                                            c-4.9-6.1-7.3-14.6-7.3-25.4V249.5H453v-16.5h7.8v-52.9h18.6v52.9h18.9v16.5h-18.9V368c0,6.8,1.2,11.7,3.6,14.4
                                            c2.4,2.8,6.5,4.2,12.3,4.2c0.5,0,1.1,0,1.8,0c0.6,0,1.2-0.1,1.8-0.3V401.2z"/>
                                    </g>
                                    <g>
                                        <path fill="#262626" d="M135.5,138.9c8.6-22.5,10.7-28.9,18.3-45.6c8.3-18.2,18.2-32.9,27.7-44.9c9.5-12,19.5-20.9,29.9-26.5
                                            c10.4-5.6,26.7-10.9,38-10.9c34.3,0,47,9.6,51.3,13.4c4.3,3.8,7,7.9,8.1,12.4c1,4.5,0.5,8.8-1.6,13c-2.1,4.2-5.5,7.1-10.1,8.8
                                            c-4.9,1.8-9.4,2.1-13.6,0.9c-4.2-1.2-7.3-3.3-9.4-6.4c-2.1-3.1-3-6.7-2.6-10.9c0.4-4.2,2.7-8.4,7-12.5c-4.3-1.1-23.4-8.6-51.6,5.8
                                            c-19.2,9.8-30.2,41.3-34.7,54c-4.8,13.5-11.8,31.9-16.2,49h56.5c0,0,5.1,0.1,6.6,1.3c3.9,3.3,4,12.4,0.3,15.4c-2.4,2-6,2-6,2h-61.2
                                            c0,0-80.8,249.6-90.7,272.6c-24.9,57.6-54.3,69-58.7,69.6c-4.5,0.7-11.3-2.9-10.3-7.5c-1.8-2.5,12.7-18.6,29.7-46.3
                                            c24.9-40.7,73.6-222.7,88.3-289.2l-26.3,0.1c-3.1,0-7,0.1-8-1.1c-2.7-3.1-3-10.8-0.5-14.9c1.1-1.9,8.6-1.7,8.6-1.7L135.5,138.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#00AEEF" d="M131.1,133.4c8.6-22.5,10.7-28.9,18.3-45.6c8.3-18.2,18.2-32.9,27.7-44.9c9.5-12,19.5-20.9,29.9-26.5
                                            c10.4-5.6,26.7-10.9,38-10.9c34.3,0,47,9.6,51.3,13.4c4.3,3.8,7,7.9,8.1,12.4c1,4.5,0.5,8.8-1.6,13c-2.1,4.2-5.5,7.1-10.1,8.8
                                            c-4.9,1.8-9.4,2.1-13.6,0.9c-4.2-1.2-7.3-3.3-9.4-6.4c-2.1-3.1-3-6.7-2.6-10.9c0.4-4.2,2.7-8.4,7-12.5c-4.3-1.1-23.4-8.6-51.6,5.8
                                            c-19.2,9.8-30.2,41.3-34.7,54c-4.8,13.5-11.8,31.9-16.2,49h56.5c0,0,5.1,0.1,6.6,1.3c3.9,3.3,4,12.4,0.3,15.4c-2.4,2-6,2-6,2h-61.2
                                            c0,0-80.8,249.6-90.7,272.6c-24.9,57.6-54.3,69-58.7,69.6c-4.5,0.7-11.3-2.9-10.3-7.5c-1.8-2.5,12.7-18.6,29.7-46.3
                                            c24.9-40.7,73.6-222.7,88.3-289.2l-26.3,0.1c-3.1,0-7,0.1-8-1.1c-2.7-3.1-3-10.8-0.5-14.9c1.1-1.9,8.6-1.7,8.6-1.7L131.1,133.4z"/>
                                    </g>
                                    <g>
                                        <path fill="#00AEEF" d="M183.7,419.1h17.9v3.3h-7v18.4h-3.9v-18.4h-7V419.1z"/>
                                        <path fill="#00AEEF" d="M211.8,419.1h10.5c4.9,0,7.3,2.2,7.3,5.8c0,4.2-2.9,5.2-3.7,5.5v0.1c1.3,0.2,3.3,1.2,3.3,4.6
                                            c0,2.5,0.4,4.8,1.2,5.7h-4.1c-0.6-0.9-0.6-2.1-0.6-3.2c0-4-0.8-5.7-4.4-5.7h-5.7v8.9h-3.9V419.1z M215.7,429h6.3
                                            c2.5,0,3.8-1.2,3.8-3.5c0-2.8-1.8-3.3-3.8-3.3h-6.3V429z"/>
                                        <path fill="#00AEEF" d="M247.3,419.1h4.1l8.5,21.6h-4.1l-2.1-5.7h-8.8l-2.1,5.7h-4L247.3,419.1z M245.9,432.2h6.7l-3.3-9.3h-0.1
                                            L245.9,432.2z"/>
                                        <path fill="#00AEEF" d="M269.5,419.1h4.1l10.1,15.9h0.1v-15.9h3.7v21.6h-4.1l-10.1-15.9h-0.1v15.9h-3.7V419.1z"/>
                                        <path fill="#00AEEF" d="M302.3,433.6c0,3.3,2.5,4.6,5.6,4.6c3.4,0,4.7-1.7,4.7-3.3c0-1.7-0.9-2.3-1.8-2.7c-1.6-0.6-3.5-1-6.6-1.8
                                            c-3.8-1-4.9-3.2-4.9-5.5c0-4.4,4.1-6.4,8.1-6.4c4.6,0,8.5,2.4,8.5,6.9h-3.9c-0.2-2.8-2.1-3.8-4.8-3.8c-1.8,0-4.1,0.6-4.1,2.8
                                            c0,1.5,1.1,2.3,2.6,2.8c0.3,0.1,5.2,1.3,6.4,1.7c2.9,0.9,4.3,3.2,4.3,5.5c0,4.8-4.4,6.8-8.8,6.8c-5,0-9.1-2.4-9.2-7.7H302.3z"/>
                                        <path fill="#00AEEF" d="M327.5,419.1h3.9v18.4h11.2v3.3h-15.1V419.1z"/>
                                        <path fill="#00AEEF" d="M358.9,419.1h4.1l8.5,21.6h-4.1l-2.1-5.7h-8.8l-2.1,5.7h-4L358.9,419.1z M357.6,432.2h6.7l-3.3-9.3h-0.1
                                            L357.6,432.2z"/>
                                        <path fill="#00AEEF" d="M376.4,419.1h17.9v3.3h-7v18.4h-3.9v-18.4h-7V419.1z"/>
                                        <path fill="#00AEEF" d="M404.6,419.1h3.9v21.6h-3.9V419.1z"/>
                                        <path fill="#00AEEF" d="M440.9,430c0,6.2-4,11.3-10.6,11.3c-6.6,0-10.6-5.1-10.6-11.3c0-6.2,4-11.3,10.6-11.3
                                            C436.9,418.6,440.9,423.8,440.9,430z M423.6,430c0,4.2,2,8.2,6.7,8.2c4.7,0,6.7-4.1,6.7-8.2c0-4.2-2-8.2-6.7-8.2
                                            C425.6,421.7,423.6,425.8,423.6,430z"/>
                                        <path fill="#00AEEF" d="M452,419.1h4.1l10.1,15.9h0.1v-15.9h3.7v21.6h-4.1l-10.1-15.9h-0.1v15.9H452V419.1z"/>
                                        <path fill="#00AEEF" d="M484.8,433.6c0,3.3,2.5,4.6,5.6,4.6c3.4,0,4.7-1.7,4.7-3.3c0-1.7-0.9-2.3-1.8-2.7c-1.6-0.6-3.5-1-6.6-1.8
                                            c-3.8-1-4.9-3.2-4.9-5.5c0-4.4,4.1-6.4,8.1-6.4c4.6,0,8.5,2.4,8.5,6.9h-3.9c-0.2-2.8-2.1-3.8-4.8-3.8c-1.8,0-4.1,0.6-4.1,2.8
                                            c0,1.5,1.1,2.3,2.6,2.8c0.3,0.1,5.2,1.3,6.4,1.7c2.9,0.9,4.3,3.2,4.3,5.5c0,4.8-4.4,6.8-8.8,6.8c-5,0-9.1-2.4-9.2-7.7H484.8z"/>
                                    </g>
                                    </svg>
                                    </Tooltip>
                                    </div>                                    
                                    <h1>Fluent Translations</h1>
                                    <p>For nearly 30 years, Fluent Translations has been helping customers expand their global voice, whether that’s through a technical document, a localized website, an online store, a customer support center, or so much more.</p>
                                </div>
                                <div>
                                <Accordion collapseAll className="accordion border-none hover:bg-transparent py-0">
                                <AccordionPanel className='bg-transparent border-none text-black py-0'>
                                    <AccordionTitle className='font-semibold uppercase text-black bg-transparent'>
                                    <span className='p !text-black dark:!text-white '>Project Brief</span>
                                    </AccordionTitle>
                                    <AccordionContent className='!border-b !border-t-0 !border-gray !rounded-none dark:bg-dark'>
                                    <div className='project-brief' >                                   
                                        <p>Worked closely with founder to revamp the website's mobile & web components.                                    </p>
                                        <ul>
                                            <li>Domain and hosting setup</li>
                                            <li>Presented wireframe layout design</li>
                                            <li>Managed end-to-end website development</li>
                                            <li>Designed custom graphics, icons and stock photography curation</li>
                                            <li>Intergrated client as a partner on WordPress' top translation plugin WPML</li>
                                            <li>Implemented a comprehensive marketing/SEO strategy</li>
                                            <li>Set up clients Google Business Profile and company Gmail account</li>
                                        </ul>
                                    </div>
                                    </AccordionContent>
                                </AccordionPanel>
                                </Accordion>
                                </div>
                            </div>
                            </div>                            
                            <div className='port-details'>
                                <div className="services wrapper">
                                    <div>
                                    <h2 className="heading">
                                        Services
                                    </h2>
                                    </div>
                                    <div>
                                    <p className="description">
                                       <span>Graphic Design</span> <span>UI/UX</span> <span>SEO</span> <span>Web Dev</span>
                                    </p>
                                    </div>
                                </div>
                                <div className="date wrapper">
                                    <div>
                                    <h2 className="heading">
                                        Date
                                    </h2>
                                    </div>
                                    <div>
                                    <p className="description p dark:text-gray-dark">
                                       2020 - 2023
                                    </p>
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
                                       <a className='outbound' href="https://fluenttranslations.ca/" target='_blank'>Fluenttranslations.ca</a>
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>

                    <section id="brief" className="container spacer">
                        <div className='grid-bkg'>
                        <div className="project-grid">                    
                            <div className='sec-title'>
                                <div className='col-span-2'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <h2 className="eyebrow">Project Info</h2>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h2 className='title'>Design Brief</h2> 
                                    </Fade>                         
                                    
                                </div>                            
                            </div>
                            <div className="tech spacer-md margins">
                                <h3 className="sec-subtitle">Technologies Used</h3>
                               
                                <div className="">   
                                <Fade triggerOnce direction='up' cascade damping={0.1}>                    
                                    <ul>                          
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
                                        
                                       
                                            <li>
                                                <Tooltip content="Figma"> 
                                                    <div>    
                                                        <img src="/assets/images/assets/Figma_icon.svg" alt="Figma Icon"></img>
                                                    </div>                                
                                                </Tooltip>
                                            </li>
                                       
                                        <li>
                                        <Tooltip content="Gmail"> 
                                            <div>    
                                                <img src="/assets/images/assets/Google-Gmail_icon.svg" alt="Gmail Icon"></img>                                                         
                                            </div> 
                                            </Tooltip>                                
                                        </li>
                                        
                                        
                                        <li>
                                        <Tooltip content="Google Analytics">   
                                            <div>    
                                                <img src="/assets/images/assets/Google-Analytics_icon.svg" alt="Google Analytics Icon"></img>                                                         
                                            </div>
                                            </Tooltip>                              
                                        </li>
                                        
                                        
                                        <li>
                                        <Tooltip content="Google Search Console">  
                                            <div>    
                                                <img src="/assets/images/assets/Google-Console_icon.svg" alt="Google Search Console Icon"></img>                                                         
                                            </div> 
                                            </Tooltip>                                
                                        </li>                                        
                                            <li>
                                            <Tooltip content="Google Looker Studio"> 
                                                <div>    
                                                    <img src="/assets/images/assets/Google-Looker_icon.svg" alt="Google Looker Studio Icon"></img>                                                         
                                                </div> 
                                                </Tooltip>                                 
                                            </li>
                                        
                                        <li>
                                        <Tooltip content="WPML WordPress Plugin">
                                             <img src="\assets\images\assets\WPML_icon.svg"></img>                               
                                            </Tooltip>                               
                                        </li>
                                    </ul>
                                    </Fade>
                                </div>
                                
                            </div>
                            <div className="margins margins-b">
                                <h3 className="sec-subtitle">Scope</h3>
                                <div className="card-row">
                                    <div className="card col-span-12 md:col-span-6 lg:col-span-3">
                                       <div> 
                                        <h3 className="title h5">Hosting and Domains</h3> 
                                        <p className="tag">Web Development</p>
                                        </div> 
                                        <div><p>Switch website hosting provider to ensure reliable support. Purchase and re-direct additional domains.</p>  </div>  
                                    </div>
                                    <div className="card col-span-12 md:col-span-6 lg:col-span-3">
                                        <div>
                                        <h3 className="title h5"> Website Re-design</h3> 
                                        <p className="tag">UI/UX Design</p> 
                                        </div>
                                        <div><p>Redesign website layout and brand colours. Incorporate new website font and stock photos.</p> </div> 
                                                         
                                    </div>
                                    <div className="card col-span-12 md:col-span-6 lg:col-span-3">
                                        <div><h3 className="title h5">Custom Icon Pack</h3> 
                                        <p className="tag">Graphic Design</p> </div>
                                        <div><p>Modify existing icon package to ensure consistent icon style and stroke width. Add isometric background to each icon.</p> </div>    
                                                            
                                    </div>
                                    <div className="card col-span-12 md:col-span-6 lg:col-span-3">
                                        <div><h3 className="title h5">Marketing and SEO</h3> 
                                        <p className="tag">Marketing</p> </div>
                                        <div><p>Implement client as a partner on WordPress' top translation plugin WPML. Drive leads to website through organic search.</p> </div>                            
                                    </div>
        
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>

                    <section id="style" className="container bg-white dark:bg-dark border relative text-black spacer">
                        <div className='grid-bkg'>
                        <div className="project-grid margins-b">
                            <div className='sec-title'>                           
                                <div className='col-span-4'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <h2 className="eyebrow">Design System</h2>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h3 className="title">Styles</h3>
                                    </Fade>     
                                </div>                                
                                                         
                            </div>
                            <div id="style" className='margins'>
                            <div className='grid grid-cols-6'>
                                <div className='col-span-6 lg:col-span-3 spacer'>
                                <h4 className="sec-subtitle !mb-1">Typography</h4>
                                    <p className="spacer caption text-gray-dark">Montserrat Designed by Julieta Ulanovsky. From Google.</p>
                                    <img src="/assets/images/fluent/Typography.webp" alt="Montserrat"></img>
                                </div>
                                <div className='col-span-6 lg:col-span-3'>
                                <h4 className="sec-subtitle !mb-1">Colour</h4>
                                    <p className="spacer caption text-gray-dark">Compound palette to compliment the logo's “Fluent Blue”.</p>
                                    <img src="/assets/images/fluent/Colour.webp" alt="colour"></img>
                                </div>
                               
                            </div>
                            </div>

                        </div>
                        </div>
                    </section>

                    <section id="icons" className="container bg-white dark:bg-dark border relative text-black spacer">
                        <div className='grid-bkg'>
                        <div className="project-grid margins-b">
                            <div className='sec-title'>                           
                                <div className='col-span-6 lg:col-span-2'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <h2 className="eyebrow">UI Components</h2>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h3 className="title">Icon Pack</h3>
                                    </Fade> 
    
                                </div>                                
                                                      
                                <div className='details col-span-6 lg:col-span-4'>                           
                                    <p>Custom designed icon pack to align with theme and business verticals.</p>                         
                                </div> 
                                                         
                            </div>
                            <div className='project-img margins'>
                                <img src="/assets/images/fluent/port-fluent-icons.webp"></img>
                            </div>

                        </div>
                        </div>
                    </section>

                    <section id="visual" className="container">
                        <div className='grid-bkg'>
                        <div className="project-grid margins-b">
                            <div className='sec-title'>                           
                                <div className='col-span-6 lg:col-span-6'> 
                                    <Fade triggerOnce direction='down'>                         
                                    <h2 className="eyebrow">UI Design</h2>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h3 className="title">Visual Design</h3>
                                    </Fade>     
                                </div>                                                           
                            </div>
                            <div className='project-img grid grid-cols-12'>
                                <div className='col-span-12 spacer'>                                   
                                    <img className="w-full" src="/assets/images/fluent/Visual.webp"></img>
                                </div>
                            </div>

                        </div>
                        </div>
                    </section>
                

                    <section id="seo" className="container">
                        <div className='grid-bkg'>
                        <div className="project-grid wrapper">
                            <div className='sec-title'>                           
                                <div className='col-span-2'> 
                                <Fade triggerOnce direction='down' >                         
                                    <h2 className="eyebrow">Marketing</h2>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h3 className="title">Analytics & SEO</h3>
                                    </Fade>   
                                </div>                                              
                                <div className='details col-span-4'>     
                                    <p>Through the configuration of these tools, valuable insights are obtained, enabling informed decisions to refine marketing strategies and optimize the overall user experience on the website.</p>
                                </div>                    
                            </div>
                            
                            <div className='analytics-seo grid grid-cols-6 gap-10 spacer-md margins'>
                                <div className='details order-2 md:order-1 col-span-6 md:col-span-3 flex flex-col justify-center md:mt-0 mt-[-90px]'> 
                                    <div className="tech spacer">
                                    <ul>    
                                                <Tooltip content="Google Analytics">   
                                            <li>
                                                <img src="\assets\images\assets\Google-Analytics_icon.svg"></img>
                                            </li>
                                                </Tooltip>
                                                <Tooltip content="Google Search Console">   
                                                <li>
                                                <img src="\assets\images\assets\Google-Console_icon.svg"></img>                               
                                                </li>
                                                </Tooltip> 
                                                <Tooltip content="Google Looker Studio">   
                                                <li>
                                                <img src="\assets\images\assets\Google-Looker_icon.svg"></img>                               
                                                </li>
                                                </Tooltip> 
                                                </ul>
                                    </div>
                                    <div>
                                        <h4 className="spacer h3 font-semibold ">Analytics & SEO</h4>
                                            <p className='spacer'>
                                                <ul> 
                                                    <li>Setup Google Analytics and Google Search Console to analyze website traffic and gain a deeper understanding of Fluent Translations target audience's behavior. </li>
                                                    <li>Created a reporting dashboard with Google Looker Studio.</li>
                                                </ul>
                                            
                                            </p>
                                    </div>                             
                                </div>                                
                                <div className="order-1 md:order-2 col-span-6 md:col-span-3 grid justify-center">  
                                    <img className="w-full max-w-[650px]" src="/assets/images/fluent/Analytics.webp"></img>
                                </div>
                            </div>

                            <div className='google-business grid grid-cols-6 gap-10 spacer-md margins'>
                                <div className="order-1 col-span-6 md:col-span-3 grid justify-center">  
                                    <img className="w-full max-w-[650px]" src="/assets/images/fluent/Analytics-Workspace.webp"></img>
                                </div>
                                <div className='details order-2 md:order-1 col-span-6 md:col-span-3 flex flex-col justify-center md:mt-0 mt-[-90px]'>  
                                <div className="tech spacer">
                                <div className="">                       
                                    <ul>    
                                        <Tooltip content="Gmail">
                                            <li>
                                                <img src="\assets\images\assets\Google-Gmail_icon.svg"></img>                               
                                            </li>
                                        </Tooltip>                                      
                                    </ul>
                                </div>
                                </div> 
                                <div>
                                    <h4 className="spacer h3 font-semibold ">Google Workspace & Business Profile</h4>
                                        <p className='spacer'>
                                        <ul>
                                            <li>Set up corporate Gmail account.</li>
                                            <li>Configure a Google Business Profile to enhance online visibility and inspire confidence in potential customers</li>
                                        </ul>
                                        </p>                                    
                                </div>                      
     
                                </div>
                            </div>

                            <div className='wordpress grid grid-cols-6 gap-10 spacer-md margins'>
                                <div className='details order-2 md:order-1 col-span-6 md:col-span-3 flex flex-col justify-center md:mt-0 mt-[-90px]'> 
                                    <div className="tech spacer">                       
                                        <ul>    
                                            <Tooltip content="WPML WordPress Plugin">
                                                <li>
                                                <img src="\assets\images\assets\WPML_icon.svg"></img>                               
                                                </li>
                                            </Tooltip> 

                                        </ul>
                                    </div>                        
                                    <div>
                                        <h4 className="spacer h3 font-semibold">Web Partners & Backlinks</h4>
                                            <p className='spacer'>
                                            <ul>
                                                <li>Generated high qualitly backlinks to drive traffic to the website.</li>
                                                <li>Integrated Fluent Translations as a partner on the WPML WordPress plugin to gain further exposure and organic business.</li>
                                            </ul>
                                            </p>
                                    </div>     
                                </div>
                                <div className="order-1 md:order-2 col-span-6 md:col-span-3">  
                                    <img className="w-full max-w-[650px]" src="/assets/images/fluent/Analytics-Wordpress.webp"></img>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                    </section>
                    
                    
                </div>
            </div>
    );
};


export default FluentTranslations;
