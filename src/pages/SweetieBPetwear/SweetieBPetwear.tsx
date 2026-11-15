import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import { Link as LinkRoll } from "react-scroll";
import { Accordion, AccordionContent, AccordionTitle, AccordionPanel, Tooltip, Navbar, NavbarToggle, NavbarCollapse } from 'flowbite-react';
import { Fade, Slide} from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import HomeButton from "../../components/HomeButton";
import ProjectMenu from "./ProjectMenu";


const SweetieBPetwear = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const ScrollLink = Scroll.ScrollLink
    return (
            <div className="portfolio">
<Helmet>
  <title>Sweetie B Petwear | Carly Liczyk Portfolio</title>
  <meta
    name="description"
    content="Website and branding design for Sweetie B Petwear, combining fashion and function for luxury pet apparel. Showcasing UI/UX, visual identity, and e-commerce presence."
  />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Sweetie B Petwear | Carly Liczyk Portfolio" />
  <meta
    property="og:description"
    content="Design and branding work for Sweetie B Petwear — luxury petwear website, visual identity, and user experience crafted for pet fashion."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://carlyliczyk.com/sweetiebpetwear" />
  <meta property="og:image" content="https://carlyliczyk.com/assets/images/sweetiebpetwear/sweetieb-intro.webp" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sweetie B Petwear | Carly Liczyk Portfolio" />
  <meta
    name="twitter:description"
    content="Website and branding design for Sweetie B Petwear — merging style and usability for pet fashion e-commerce."
  />
  <meta name="twitter:image" content="https://carlyliczyk.com/assets/images/sweetiebpetwear/sweetieb-intro.webp" />

  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://carlyliczyk.com/sweetiebpetwear" />
</Helmet>

    <div className="overflow">
        <HomeButton/>
        <ProjectMenu />                                

                <section  className="container grid-bkg">
                    <div className='project-grid'>
                    <div className='project-img'>
                            <img src="/assets/images/sweetiebpetwear/sweetieb-intro.webp" className='w-full rounded'></img>                            
                        </div>    
                    <div id="client" className='port-header'>
                            <div className='port-title'> 
                            <div className='h-full'>
                                <div className='port-title'>
                                    <div className='project-logo card'>
                                    <Tooltip content="Sweetie B Petwear">    
                                       <img src="/assets/images/sweetiebpetwear/logo.png" alt="Sweetie B Petwear Logo" className="h-10"></img>
                                    </Tooltip>
                                    </div>                                    
                                    <h1>Sweetie B Petwear</h1>
                                    <p>Sweetie B Petwear was created to offer everyday luxe for dogs. Sweetie B Petwear presents truly wearable styles and is committed to providing stunning, glamorous and blingy accessories that showcase beauty for dogs of all ages, breeds, sizes and colours — from XXS to XXL.</p>
                                </div>
                                <div>
                                <Accordion collapseAll className="accordion border-none hover:bg-transparent py-0">
                                <AccordionPanel className='bg-transparent border-none text-black py-0'>
                                    <AccordionTitle className='font-semibold uppercase text-black bg-transparent'>
                                    <span className='p !text-black dark:!text-white '>Project Brief</span>
                                    </AccordionTitle>
                                    <AccordionContent className='!border-b !border-t-0 !border-gray !rounded-none dark:bg-dark'>
                                    <div className='project-brief'>         
                                        <ul>
                                            <li>Established domain and hosting services to launch the website. </li>
                                            <li>Created an eCommerce website, Amazon storefront and Etsy shop. </li>
                                            <li>Set up payment gateways with Moneris. </li>
                                            <li>Conducted product photoshoots and edited images to suit each site's black and white backgrounds. </li>
                                            <li>Crafted attention-grabbing banners. </li>
                                            <li>Implemented effective SEO strategies, resulting in top-ranking visibility for popular products.</li>
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
                                       <span>Graphic Design</span> <span>Photography</span> <span>Post Production</span> <span>UI/UX</span> <span>SEO</span> <span>Web Dev</span>
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
                                       2018-2020
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>

                    <section id="brief" className="container">
                        <div className='grid-bkg'>
                        <div className="project-grid margins-b">
                            <div className='sec-title'>
                                <div className='col-span-6'>                          
                                    <h2 className='title'>Project Details</h2> 
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
                                        <Tooltip content="WooCommerce"> 
                                            <div>                                        
                                            <img src="/assets/images/assets/WooCommerce_icon.svg"></img>                               
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
										<Tooltip content="Amazon"> 
                                        <div>                                        
                                        <img src="/assets/images/assets/Amazon_icon.svg"></img>                               
                                        </div> 
										</Tooltip>
                                    </li>

  
                                    <li>
										<Tooltip content="Etsy"> 
                                        <div>                                        
                                        <img src="/assets/images/assets/Etsy_icon.svg"></img>                               
                                        </div>   
										</Tooltip> 
                                    </li> 
                                </ul>
                                </Fade>
                            </div>
                            
                            </div>
                            <div className="margins">
                            <h3 className="sec-subtitle">Scope</h3>
                            <div className="card-row">                            
                         
                                <div className="card col-span-12 md:col-span-6 lg:col-span-3">
                                    <h3 className="title h5">eCommerce Storefronts</h3> 
                                    <p className="tag">Web Development</p> 
                                    <p>Modify existing icon package to ensure consistent icon style and stroke width. Add isometric background to each icon.</p>     
                                                        
                                </div>
                       
                                <div className="card col-span-12 md:col-span-6 lg:col-span-3">
                                    <h3 className="title h5">Website Design</h3> 
                                    <p className="tag">UI/UX Design</p> 
                                    <p>Design website to compliment branding. Incorporate custom fonts and product images.</p>                             
                                </div>

                                <div className="card col-span-12 md:col-span-6 lg:col-span-3">
                                    <h3 className="title h5">Marketing and SEO</h3> 
                                    <p className="tag">Marketing</p> 
                                    <p>Implemented effective SEO strategies, resulting in top-ranking visibility for popular products.</p>                             
                                </div>
                                <div className="card col-span-12 md:col-span-6 lg:col-span-3">
                                    <h3 className="title h5">Product Photography</h3> 
                                    <p className="tag">Photography</p> 
                                    <p>Conducted product photoshoots and edited images to suit each site's black and white backgrounds.</p>    
                                
                                </div>     
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>

                    <section id="style" className="container">
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
                                <img src="/assets/images//sweetiebpetwear/sweetieb-grid.webp" className='!rounded-b-[0px]' alt="Grid System" ></img>
                                </div>
                                <div className='col-span-12'>
                                <img src="/assets/images//sweetiebpetwear/sweetieb-style.webp" className='!rounded-[0px]'  alt="Style Guide"></img>    
                                </div>
                                <div className='col-span-12' id='components'>                                   
                                <img src="/assets/images//sweetiebpetwear/sweetieb-components.webp"  className='!rounded-[0px]' alt="Components"></img>    
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
                                <div className='details project-brief col-span-4'>
                                     <ul>
                                            <li>Created an eCommerce website, Amazon storefront and Etsy shop. </li>
                                            <li>Conducted product photoshoots and edited images to suit each site's black and white backgrounds. </li>
                                            <li>Crafted attention-grabbing banners. </li>
                                        </ul>
                                </div>
                            </div>
                            <div className='project-img grid grid-cols-12'>
                                <div className='col-span-12'>                                   
                                <img src="/assets/images//sweetiebpetwear/sweetieb-wordpress.webp" alt="WordPress Site" className='!rounded-b-[0px]'></img>    
                                </div>
                                <div className='col-span-12'>
                                    <img src="/assets/images//sweetiebpetwear/sweetieb-azet.webp" alt="Amazon and Etsy Site" className='!rounded-t-[0px]'></img>    
                                </div>
                            </div>

                        </div>
                        </div>
                    </section>
                    <section id="marketing" className="container">
                        <div className='grid-bkg'>
                        <div className="project-grid">
                            <div className='sec-title'>                           
                                <div className='col-span-2'> 
                                <Fade triggerOnce direction='down' >                         
                                    <h2 className="eyebrow">Business Management</h2>
                                </Fade>
                                <Fade triggerOnce direction='up'>                            
                                    <h3 className="title">Marketing</h3>
                                </Fade>     
                                </div>                                          
                                <div className='details col-span-4'>     
                                    <p>Set up Google Analytics accounts and to improve the website's visibility and gain insights into user behavior.</p>
                                </div>                    
                            </div>

                            
                            <div className='wordpress grid grid-cols-6 gap-10 spacer-md margins'>
                                <div className='details order-2 md:order-1 col-span-6 md:col-span-3 flex flex-col justify-center md:mt-0 mt-[-75px]'> 
                                    <div className="tech">
                                        <div className="spacer">                       
                                            <ul>    
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
                                            </ul>
                                        </div>
                                    </div>                    
                                    <div>
                                        <h3 className="sec-subtitle">Analytics & SEO</h3>
                                            <p>Setup a Google Business, Google Analytics and Google Search Console account to analyze website traffic and gain a deeper understanding of the target audience's behavior. </p>
                                            <p>Implemented effective SEO strategies, resulting in top-ranking visibility for popular products.</p>
                                    </div>     
                                </div>
                                <div className="order-1 md:order-2 col-span-6 md:col-span-3">  
                                <img className="" src="/assets/images/sweetiebpetwear/sweetieb-google.webp"></img>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                    </section>
                    
                    
                </div>
            </div>
    );
};


export default SweetieBPetwear;
