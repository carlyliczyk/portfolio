import { useState } from "react"; 
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";
import { Accordion, AccordionContent, AccordionTitle, AccordionPanel, Tooltip, Navbar, NavbarToggle, NavbarCollapse } from 'flowbite-react';
import { Fade, Slide} from "react-awesome-reveal";
import { Helmet } from 'react-helmet-async';
import HomeButton from "../../components/HomeButton";
import ColourScale from "../../components/ColourScale";
import ProjectMenu from "./ProjectMenu";

const TheLirio = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const ScrollLink = Scroll.ScrollLink
     
    return (
            <div className="portfolio">
<Helmet>
<title>The Lirio - Carly Liczyk</title>
<meta name="description" content="Case study for The Lirio project by Carly Liczyk, including UX, branding, and prototype work."/>
<meta property="og:title" content="The Lirio | Carly Liczyk" />
<meta property="og:type" content="website" />
<meta property="og:image" content="/assets/images/betterlives/betterlives-prototype.webp" />
</Helmet>
<div className="overflow">
<HomeButton/>                        
<ProjectMenu /> 
            <section className="container grid-bkg">
                    <div className='project-grid'>
                        <div className='project-img'>
                            <img className="w-full rounded" src="/assets/images/thelirio/banner.webp"></img>                  
                        </div>    
                    <div id="client" className='port-header'>
                            <div className='port-title'>
                            <div className='h-full'>
                                <div className='port-title'>
                                    <div className='project-logo card'>
                                    <Tooltip content="Better Lives">    
                                    <img src="/assets/images/thelirio/thelirio.svg" className='h-8 w-8'></img>   
                                    </Tooltip>
                                    </div>                                    
                                    <h1>The Lirio</h1>
                                    <p>The Lirio is a modern jewelry brand focused on minimal, timeless design. Blending everyday wearability with refined craftsmanship, the brand creates elegant pieces using high-quality materials, designed to elevate personal style with subtle luxury.</p>
                                </div>
                                <div>
                                <Accordion collapseAll className="accordion border-none hover:bg-transparent py-0">
                                <AccordionPanel className='bg-transparent border-none text-black py-0'>
                                    <AccordionTitle className='font-semibold uppercase text-black bg-transparent'>
                                    <span className='p !text-black dark:!text-white '>Project Overview</span>
                                    </AccordionTitle>
                                    <AccordionContent className='!border-b !border-t-0 !border-gray !rounded-none dark:bg-dark'>
                                    <div>                                   
                                        <p>This project focused on redesigning a custom eCommerce website built on WordPress, using the XStore theme and a flexible stack including Elementor, FunnelKit, and Klaviyo. The goal was to elevate the brand through a minimalistic and luxurious visual direction while improving usability and conversion performance. Small, refined details, such as custom icons, product swatches, and thoughtful micro-interactions were introduced to create a polished, high-end user experience. The result is a streamlined shopping journey that balances aesthetic sophistication with functional clarity.
                                        </p>
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
                                    <span>UI/UX</span> <span>Web Development</span>
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
                                    <p className="description p">
                                       2024-2025
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
                                    <p className="description link p">
                                       <a className='outbound' href="https://thelirio.com/" target="blank">Thelirio.com</a>
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
                                            <li>
                                            <Tooltip content="Klaviyo">  
                                                <div>    
                                                <img src="/assets/images/assets/Klaviyo_icon.svg" alt="Klaviyo Icon"></img>                                                         
                                                </div>  
                                                </Tooltip>                              
                                            </li>
                                        
                                </ul>
                                </Fade>
                            </div>
                            </div>
                            <div className="margins">
                            <h3 className="sec-subtitle">Scope of Work</h3>
                            <div className="grid grid-cols-12 gap-5">
                            
                                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <p className="card-title mb-3">UX Research & Strategy</p> 
                                        <p>Conducted user research to identify key needs, behaviors, and friction points. Developed user personas, empathy maps, and journey flows to guide design decisions and ensure alignment with business and user goals.</p>                                    
                                
                            </div>
                                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <p className="card-title mb-3">Information Architecture & User Flows</p> 
                                        <p>Structured the site’s navigation and product hierarchy through card sorting and user flow mapping, creating an intuitive browsing experience that supports product discovery and conversion.
                                        </p>                             
                                    </div>                          
                                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <p className="card-title mb-3">Wireframing & Visual Design</p> 
                                        <p>Designed low- to high-fidelity wireframes focused on clarity and hierarchy, followed by a refined visual system emphasizing minimalism, luxury aesthetics, and consistent UI elements.
                                        </p>                             
                                    </div>
                                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <p className="card-title mb-3">Front-End Development</p> 
                                        <p>Built a fully responsive interface using Elementor, implementing custom layouts and components while maintaining performance and scalability across devices.
                                        </p>                             
                                    </div>
                                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <p className="card-title mb-3">WordPress Customization (Child Theme & Hooks)</p> 
                                        <p>Extended functionality through a child theme and WordPress hooks, enabling tailored modifications across key templates such as product, archive, and cart pages without compromising core theme integrity.
                                        </p>                             
                                    </div>                          
                                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <p className="card-title mb-3">eCommerce Optimization</p> 
                                        <p>Customized critical eCommerce touchpoints, including product pages (pricing, size selection, charts), archive listings, and cart/checkout flows to improve usability and drive conversions.
                                        </p>                             
                                    </div>
                                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <p className="card-title mb-3">Marketing & Funnel Integration</p> 
                                        <p>Integrated FunnelKit and Klaviyo to support conversion funnels, email automation, and customer retention strategies, aligning the design with marketing performance goals.
                                        </p>                             
                                    </div>
                                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <p className="card-title mb-3">Testing & Launch</p> 
                                        <p>Conducted user testing to validate design decisions, iterated based on feedback, and supported a smooth launch with performance and usability optimizations.
                                        </p>                             
                                    </div>
                              
        
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>

                    <section id="UX" className="container">
                        <div className='grid-bkg'>
                        <div className="project-grid margins-b">
                            <div className='sec-title'>                           
                                <div className='col-span-2'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <h2 className="eyebrow">User Experience</h2>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h3 className="title">Design Process</h3>
                                    </Fade>
                                </div>  
                                <div className='details col-span-4'> 
                                <Fade triggerOnce direction='up' duration={400}>                             
                                    <p>
                                    A structured, user-centered process spanning discovery to delivery. Starting with research and empathy mapping to define key problems, the project moves into sitemap creation and user flows to shape the experience. This is followed by wireframing and building a cohesive UI design system, then full development, user testing, and iterative improvements to ensure a seamless, high-performing final product.
                                    </p>    
                                </Fade>                            
                                </div>                                              
                            </div>
                            <div className="flex flex-col gap-5 margins margins-b">
                                <div>
                                    <img src="/assets/images/thelirio/UX-Design-process.webp"></img>                                        
                                </div> 
                            </div> 
                        </div>
                        <div className="margins-b margins">
                            <Fade triggerOnce direction='down' >  
                            <h3 className="sec-subtitle">Problem Findings & Pain Points</h3>
                            </Fade>
                            <div className="grid grid-cols-12 gap-5">
                            
                                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <p className="card-title mb-3">Confusing navigation</p> 
                                        <p>Customers were struggling to find out products due to organization and complicated site layout.</p>                                    
                                
                            </div>
                                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <p className="card-title mb-3">Slow load times</p> 
                                        <p>The website was slow to load, leading to frustrated users and abandoned carts.
                                        </p>                             
                                    </div>                          
                                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <p className="card-title mb-3">Lack of brand identity</p> 
                                        <p>The site did not reflect a modern luxury brand, leaving visitors unclear of their luxurious offerings and trust worthy services.
                                         </p>                             
                                    </div>
                                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <p className="card-title mb-3">Weak mobile experience</p> 
                                        <p>The site was not optimized for mobile, making it difficult for customers to shop when its convenient. </p>                             
                                    </div>
                            </div>
                        </div>
                        <div className="margins-b margins">
                            <Fade triggerOnce direction='down' >  
                            <h3 className="sec-subtitle">Solutions</h3>
                            </Fade>
                            <div className="grid grid-cols-12 gap-5">
                            
                                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <p className="card-title mb-3">Intuitive Navigation & Layout</p> 
                                        <p>Created a modern and user-friendly navigation and website layout that displays important features immediately, like the products and services The Lirio provides. </p>                                    
                                
                            </div>
                                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <p className="card-title mb-3">Performance-Optimized Experience</p> 
                                        <p>Optimized the website for quick loading times prioritizing the mobile experience.
                                        </p>                             
                                    </div>                          
                                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <p className="card-title mb-3">Elevated Luxury Visual Design</p> 
                                        <p>Elevate the Lirios brand image by designing a minimalistic luxurious website with a high attention to the small details like icon types, typography and imagery.
                                         </p>                             
                                    </div>
                                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                                        <p className="card-title mb-3">Mobile-First Design Approach</p> 
                                        <p>We designed the website with a mobile first approach, ensuring that the brands image and products were displayed beautifully on any device. </p>                             
                                    </div>
                            </div>
                        </div>

                        <div className="margins-b margins">
                            <Fade triggerOnce direction='down' >  
                            <h3 className="sec-subtitle">Competitive Analysis</h3>
                            </Fade>
                            <div className="grid grid-cols-12 gap-5">   
                                <div className="col-span-12 gap-5">  
                                    <div className="mb-lg">
                                        <div className="mb-md">
                                            <p>Brands Analyzed: <span className="pill">Tiffanys</span> <span className="pill">Cartier</span> <span className="pill">Bulgari</span></p>
                                        </div>
                                        <p>Competitor analysis revealed that most brands prioritize strong visual storytelling through large product imagery, lifestyle photography, and video hero banners to immediately capture attention. Clean grid-based layouts and elegant typography are consistently used to reinforce a premium feel, while features like currency selection and clear navigation are considered standard across all sites.</p>
                                        <p>However, gaps exist in areas that impact conversion. Not all competitors highlight pricing effectively, and key conversion tools, such as chat support and high-jewelry inquiry forms, are inconsistently implemented. Additionally, while many sites perform well visually, fewer incorporate distinctive product page experiences or micro-interactions that elevate the brand.</p>
                                        <p>This presents an opportunity to differentiate by combining high-end visual design with stronger conversion-focused features, such as clearer pricing hierarchy, enhanced product detail interactions, and integrated support tools, to create a more seamless and premium user experience.</p>  
                                    </div>                        
                                
                                <div className="analysis-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td></td>
                                                <td className="highlight">The Lirio</td>	
                                                <td>Cartier</td>	
                                                <td>Tiffanys</td>
                                                <td>Bulgari</td>
                                            </tr>	
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Large photos highlighting products</td>
                                                <td className="highlight">10</td>
                                                <td>7</td>
                                                <td>7</td>
                                                <td>8</td>
                                            </tr>
                                            <tr>
                                                <td>Large filler photos to showcase brand image and collections</td>
                                                <td className="highlight">7</td>
                                                <td>9</td>
                                                <td>8</td>
                                                <td>10</td>
                                            </tr>
                                            <tr>
                                                <td>Video hero banners on homepage</td>
                                                <td className="highlight">10</td>
                                                <td>0</td>
                                                <td>8</td>
                                                <td>10</td>
                                            </tr>
                                            <tr>
                                                <td>Modern design with clear grid structure</td>
                                                <td className="highlight">10</td>
                                                <td>10</td>
                                                <td>9</td>
                                                <td>8</td>
                                            </tr>
                                            <tr>
                                                <td>Elegant font and icons</td>
                                                <td className="highlight">8</td>
                                                <td>10</td>
                                                <td>9</td>
                                                <td>8</td>
                                            </tr>
                                            <tr>
                                                <td>Book appointment page highligted in menu</td>
                                                <td className="highlight">10</td>
                                                <td>7</td>
                                                <td>10</td>
                                                <td>9</td>
                                            </tr>
                                            <tr>
                                                <td>High jewelry request forms</td>
                                                <td className="highlight">10</td>
                                                <td>10</td>
                                                <td>0</td>
                                                <td>10</td>
                                            </tr>
                                            <tr>
                                                <td>Original design features on product page and shop page cards</td>
                                                <td className="highlight">9</td>
                                                <td>10</td>
                                                <td>9</td>
                                                <td>6</td>
                                            </tr>
                                            <tr>
                                                <td>Currency or location/region selection</td>
                                                <td className="highlight">10</td>
                                                <td>10</td>
                                                <td>10</td>
                                                <td>10</td>
                                            </tr>
                                            <tr>
                                                <td>Product price is not highlighted, it’s the same size text as body text</td>
                                                <td className="highlight">10</td>
                                                <td>9</td>
                                                <td>10</td>
                                                <td>8</td>
                                            </tr>
                                            <tr>
                                                <td>Chat feature</td>
                                                <td className="highlight">0</td>
                                                <td>10</td>
                                                <td>10</td>
                                                <td>0</td>
                                            </tr>
                                        </tbody>
                                        </table>
                                </div>
                                </div>   
                            </div>
                        </div>

                        <div className="margins-b margins">
                            <Fade triggerOnce direction='down' >  
                            <h3 className="sec-subtitle">Empathy Map</h3>
                            </Fade>
                            <div className="grid grid-cols-12 gap-5">
                            
                                <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                        <p className="card-title mb-3">Think & Feel</p> 
                                        <ul className="p">
                                            <li>Customers value timeless, high-quality craftmanshili. They exliect products that reflect lasting value, not just fashion trends</li>
                                        <li>Customers feel frustrated when the online experience doesn’t match the high-end quality of the product. They want the same level of sophistication in the website and customer service as they do in their jewelry. </li>
                                        <li>Customers expect exclusivity and attention to detail. They feel excited when the website makes them feel valued and part of something elite. 
                                            </li> 
                                        </ul>                                  
                                </div>
                                <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                        <p className="card-title mb-3">Hear</p> 
                                        <ul className="p">
                                            <li>Word of mouth recommendations are powerful. Customers often hear praise for the premium craftmanship band unique design, building their desire to purchase. </li>
                                            <li>Customers hear consistent messaging about the brands commitment to creating luxury jewelry that does not compare to other products.  </li>
                                        </ul>                                  
                                </div>
                                <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                        <p className="card-title mb-3">See</p> 
                                        <ul className="p">
                                            <li>Customers notice the sophisticated and refined design of The Lirios jewelry. </li>
                                            <li>Customers observe attention to detail in craftsmanship, making each product feel exclusive and high-end. </li>
                                        </ul>                                  
                                </div>
                                <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                        <p className="card-title mb-3">Say & Do</p> 
                                        <ul className="p">
                                            <li>Say: I want a bracelet that combines luxury and exclusivity</li>
                                            <li>Do: Research a piece that is not readily available to purchase on a website, and contact the brand to inquire more details about price and wait time </li>
                                        </ul>                                  
                                </div>

                            </div>
                        </div>
                        
                        <div className="project-grid margins-b">
                            <div className='sec-title'>                           
                                <div className='col-span-12 lg:col-span-3'> 
                                    <Fade triggerOnce direction='down' >                           
                                    <h3 className="sec-subtitle">Site Map</h3>
                                    </Fade> 
                                </div>                                                       
                            </div>
                            <div className="flex flex-col gap-5 margins">
                                <div>
                                    <img src="/assets/images/thelirio/UX-Sitemap.webp"></img>                                        
                                </div> 
                            </div>         


                        </div>
                        </div>
                    </section>


                    <section id="style" className="container">
                        <div className='grid-bkg'>
                        <div className="project-grid margins-b">
                            <div className='sec-title'>                           
                                <div className='col-span-2'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <p className="eyebrow">Design System</p>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h2 className="title">Styles</h2>
                                    </Fade> 

                                </div>                                
                                                      
                                <div className='details col-span-4'> 
                                <Fade triggerOnce direction='up' duration={400}>                             
                                    <p>
                                    Inclusive design is at the forefront of Better Lives’ UI/UX. Its important for our interface to enhance the users experience and be accessible for all users, regardless of their abilities, disabilities, or other characteristics.
                                    </p>    
                                </Fade>                            
                                </div> 
                                                         
                            </div>
                            <div className="grid grid-cols-12 grid-flow-column md:grid-flow-row items-stretch margins-b margins gap-5">
                                <div className='grid col-span-12 lg:col-span-6 gap grid-flow-row content-start'>
                                    <div className=''>
                                        <h5 className="sec-subtitle !mb-md">Typography</h5>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                    <div className=''>                                        
                                        <img src="/assets/images/thelirio/type-01.png" className="rounded-md md:rounded-lg"></img>                                        
                                    </div> 
                                    <div className=''>                                        
                                        <img src="/assets/images/thelirio/type-02.png" className="rounded-md md:rounded-lg"></img>
                                    </div> 
                                    </div>                              
                                </div>
                                <div className='col-span-12 lg:col-span-6 flex flex-col gap h-full'>
                                    <div className=''>
                                        <h5 className="sec-subtitle !mb-md">Colour</h5>
                                    </div>
                                    <div className="flex w-full gap-5 flex-1">
                                    <div className='flex flex-col w-full gap-5 flex-1'>
                                       <div className="colour-module bg-[#000] flex-1">
                                        <ColourScale/>
                                       </div> 
                                       <div className="colour-module white bg-[#fff] flex-1">
                                        <ColourScale/>
                                       </div> 
                                    </div>
                                    <div className='flex flex-col w-full gap-5 flex-1'>
                                       <div className="colour-module bg-[#D4AF37] flex-1">
                                        <ColourScale/>
                                       </div>
                                       <div className="colour-module white bg-[#F6F3EB] flex-1">
                                        <ColourScale/>
                                       </div>
                                    </div> 
                                    </div>
                                   
                                </div>
                            </div>

                        </div>
                        </div>
                    </section>

                    <section id="components" className="container">
                        <div className=''>
                        <div className="project-grid margins-b">
                            <div className='sec-title'>                           
                                <div className='col-span-2'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <p className="eyebrow">Design System</p>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h2 className="title">UI Elements</h2>
                                    </Fade> 

                                </div>                                
                                                      
                                <div className='details col-span-4'> 
                                <Fade triggerOnce direction='up' duration={400}>                             
                                    <p>
                                    A minimal, luxury-focused interface built on clean typography, spacing, and subtle detail. Refined elements like icons, swatches, and micro-interactions guide attention, reduce friction, and support a seamless, conversion-focused experience across all devices.
                                    </p>    
                                </Fade>                            
                                </div> 
                                                         
                            </div>
                            <div className="grid grid-cols-12 grid-flow-column md:grid-flow-row items-stretch margins-b margins gap-5">
                                <div className='grid col-span-6 lg:col-span-3 gap grid-flow-row content-start'>
                                    
                                    <div className="flex flex-col gap-5">
                                    <div className='bg-white'>
                                    <div className=''>
                                        <h3 className="sec-subtitle !mb-md">Button States</h3>
                                    </div>
                                        <img src="/assets/images/thelirio/UI-button-states.png">
                                        </img>                                        
                                    </div> 
                                    <div className='bg-white'>  
                                     <div className=''>
                                        <h3 className="sec-subtitle !mb-md">Product Inputs</h3>
                                    </div>                                      
                                     <img src="/assets/images/thelirio/UI-inputs.png">
                                        </img> 
                                    </div> 
                                    </div>                              
                                </div>
                                <div className='grid col-span-6 lg:col-span-3 gap grid-flow-row content-start'>
                                    
                                    <div className="flex flex-col gap-5">
                                    <div className='bg-white'>
                                    <div className=''>
                                        <h3 className="sec-subtitle !mb-md">Button Types</h3>
                                    </div>
                                        <img src="/assets/images/thelirio/UI-button-types.png">
                                        </img>                                        
                                    </div> 
                                    <div className='bg-white'>  
                                     <div className=''>
                                        <h3 className="sec-subtitle !mb-md">Form Inputs</h3>
                                    </div>                                      
                                     <img src="/assets/images/thelirio/UI-forms.png">
                                        </img> 
                                    </div> 
                                    </div>                              
                                </div>
                                <div className='grid col-span-12 lg:col-span-6 gap grid-flow-row content-start'>
                                    
                                    <div className="flex flex-col gap-5">
                                    <div className='bg-white'>  
                                     <div className=''>
                                        <h3 className="sec-subtitle !mb-md">Form Text Labels</h3>
                                    </div>                                      
                                     <img src="/assets/images/thelirio/UI-forms-2.png">
                                        </img> 
                                    </div> 
                                    </div>                              
                                </div>

                            </div>
                            <div className='sec-title'>                           
                                <div className='col-span-2'> 
                                    <Fade triggerOnce direction='up'>                            
                                    <h2 className="title">Grid Structure</h2>
                                    </Fade> 

                                </div>                                
                                                      
                                <div className='details col-span-4'> 
                                <Fade triggerOnce direction='up' duration={400}>                               
                                </Fade>                            
                                </div> 
                                                         
                            </div>
                            <div className="grid grid-cols-12 grid-flow-column md:grid-flow-row items-stretch margins-b margins gap-5">
                                <div className='grid col-span-12 lg:col-span-9 gap grid-flow-row content-start'>
                                    
                                <div className="flex flex-col gap-5">
                                    <div className='bg-white'>
                                    <div className=''>
                                        <h3 className="sec-subtitle !mb-md">Desktop</h3>
                                    </div>
                                        <img src="/assets/images/thelirio/UI-grid-desktop.png">
                                        </img>                                        
                                    </div>                                      
                                </div>                              
                                </div>
                                <div className='grid col-span-12 lg:col-span-3 gap grid-flow-row content-start'>
                                    
                                    <div className="flex flex-col gap-5">
                                    <div className='bg-white'>
                                    <div className=''>
                                        <h3 className="sec-subtitle !mb-md">Mobile</h3>
                                    </div>
                                        <img src="/assets/images/thelirio/UI-grid-mobile.png">
                                        </img>                                        
                                    </div>

                                    </div>                              
                                </div>

                            </div>

                        </div>
                        </div>
                    </section>
                    
                    <section id="visual" className="container bg-white dark:bg-dark border relative text-black spacer">
                        <div className='grid-bkg'>
                        <div className="project-grid margins-b">
                            <div className='sec-title'>                           
                                <div className='col-span-6 lg:col-span-2'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <p className="eyebrow">Visual Design</p>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h4 className="title">Homepage</h4>
                                    </Fade> 
    
                                </div>                                
                                                      
                                <div className='details col-span-6 lg:col-span-4'>                           
                       
                                </div> 
                                                         
                            </div>
                            <div className='margins'>
                                <img src="/assets/images/thelirio/Homepage.webp"></img>
                            </div>

                        </div>
                        </div>
                    </section>

                    <section id="visual-shop" className="container bg-white dark:bg-dark border relative text-black spacer">
                        <div className='grid-bkg'>
                        <div className="project-grid margins-b">
                            <div className='sec-title'>                           
                                <div className='col-span-6 lg:col-span-2'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <p className="eyebrow">Visual Design</p>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h4 className="title">Shop Page</h4>
                                    </Fade> 
    
                                </div>                                
                                                      
                                <div className='details col-span-6 lg:col-span-4'>                           
                                    <p>Clean, grid-based layout with consistent imagery and elegant typography creates a seamless, on-brand shopping experience. </p>
                                    <p>Clear calls-to-action and intuitive add-to-cart options make browsing and purchasing effortless, encouraging user engagement and conversion.</p>   
                                    <p className="key-features">Key Features: <span className="pill">Custom Product Card Design</span> <span className="pill">Add to Cart Hover Treatments</span>
                                    </p> 

                                </div> 
                                                         
                            </div>
                            <div className='margins'>
                                <img src="/assets/images/thelirio/Shop-page.webp"></img>
                            </div>

                        </div>
                        </div>
                    </section>
                    <section id="visual-product" className="container bg-white dark:bg-dark border relative text-black spacer">
                        <div className='grid-bkg'>
                        <div className="project-grid margins-b">
                            <div className='sec-title'>                           
                                <div className='col-span-6 lg:col-span-2'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <p className="eyebrow">Visual Design</p>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h4 className="title">Product Page</h4>
                                    </Fade> 
    
                                </div>                                
                                                      
                                <div className='details col-span-6 lg:col-span-4'>                           
                                    <p>Large, high-quality imagery and refined typography create a clean, premium experience. </p>
                                    <p>The design highlights product features over price, reinforcing brand value and user trust.</p>
                                    <p className="key-features">Key Features: <span className="pill">Custom add to cart buttons</span> <span className="pill">Off-canvas menus</span></p> 

                                </div> 
                                                         
                            </div>
                            <div className='margins'>
                                <img src="/assets/images/thelirio/Product-page.webp"></img>
                            </div>

                        </div>
                        </div>
                    </section>
                    <section id="visual-contact" className="container bg-white dark:bg-dark border relative text-black spacer">
                        <div className='grid-bkg'>
                        <div className="project-grid margins-b">
                            <div className='sec-title'>                           
                                <div className='col-span-6 lg:col-span-2'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <p className="eyebrow">Visual Design</p>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h4 className="title">Contact Page</h4>
                                    </Fade> 
    
                                </div>                                
                                                      
                                <div className='details col-span-6 lg:col-span-4'>                         
                                </div> 
                                                         
                            </div>
                            <div className='margins'>
                                <img src="/assets/images/thelirio/Contact-page.webp"></img>
                            </div>

                        </div>
                        </div>
                    </section>
                    <section id="visual-cart" className="container bg-white dark:bg-dark border relative text-black spacer">
                        <div className='grid-bkg'>
                        <div className="project-grid margins-b">
                            <div className='sec-title'>                           
                                <div className='col-span-6 lg:col-span-2'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <p className="eyebrow">Visual Design</p>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h4 className="title">Cart & Checkout</h4>
                                    </Fade> 
    
                                </div>                                
                                                      
                                <div className='details col-span-6 lg:col-span-4'>                           
                                 <p>Custom checkout with clear order summary, featuring coupon code input, a sticky checkout button, and Buy Now, Pay Later. This approach streamlines the user experience and boosts conversions.</p>    
                                 <p className="key-features">Key Features: <span className="pill">Custom Order Summary Layout</span> <span className="pill">Sticky Checkout Button</span></p>
                                </div> 
                                                         
                            </div>
                            <div className='margins'>
                                <img src="/assets/images/thelirio/Shopping-bag.webp"></img>
                            </div>

                        </div>
                        </div>
                    </section>
                    
                    
                </div>
            </div>
    );
};


export default TheLirio;
