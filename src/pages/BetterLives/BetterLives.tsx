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

const BetterLives = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const ScrollLink = Scroll.ScrollLink
    return (
            <div className="portfolio betterlives">
<Helmet>
  <title>Better Lives Platform | Carly Liczyk Portfolio</title>
  <meta name="description" content="Better Lives is a platform designed to help people experiencing homelessness receive donations virtually and connect them with resources, shelters, and community efforts." />
  <meta property="og:title" content="Better Lives Platform | Carly Liczyk" />
  <meta property="og:description" content="Help people experiencing homelessness receive donations virtually and connect communities with resources and support." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://carlyliczyk.com/better-lives" />
  <meta property="og:image" content="https://carlyliczyk.com/assets/images/betterlives/betterlives-prototype.webp" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Better Lives Platform | Carly Liczyk" />
  <meta name="twitter:description" content="Better Lives is a platform designed to help people experiencing homelessness receive donations virtually and connect them with resources, shelters, and community efforts." />
  <meta name="twitter:image" content="https://carlyliczyk.com/assets/images/betterlives/betterlives-prototype.webp" />
</Helmet>
    <div className="overflow">

    <HomeButton/>                       
    <ProjectMenu />

               
                    <section className="container grid-bkg">
                    <div className='project-grid'>
                        <div className='project-img'>
                            <img className="w-full rounded" src="/assets/images/betterlives/betterlives-prototype.webp"></img>                  
                        </div>    
                    <div id="client" className='port-header'>
                            <div className='port-title'>
                            <div className='h-full'>
                                <div className='port-title'>
                                    <div className='project-logo card'>
                                    <Tooltip content="Better Lives">    
                                    <img src="/assets/images/betterlives/betterlives-symbol.svg" className='h-8 w-8'></img>   
                                    </Tooltip>
                                    </div>                                    
                                    <h1>Better Lives Platform</h1>
                                        <div>                                        
                                        <p>Non-profit corporation dedicated to improving the lives of people experiencing homelessness, by aggregating the efforts of Community Outreach Providers, Governments, Shelters, Charities, and Citizen Participation.</p>
                                    </div>
                                </div>
                                <div>
                                <Accordion collapseAll className="accordion border-none hover:bg-transparent py-0">
                                <AccordionPanel className='bg-transparent border-none text-black py-0'>
                                    <AccordionTitle className='font-semibold uppercase text-black bg-transparent'>
                                    <span className='p !text-black dark:!text-white '>Project Brief</span>
                                    </AccordionTitle>
                                    <AccordionContent className='!border-b !border-t-0 !border-gray !rounded-none dark:bg-dark'>
                                    <div className="project-brief">
                                        <ul>
                                                <li>Chief Creative Officer for non-profit start up</li>
                                                <li>Conducted UX processes</li>
                                                <li>Developed and managed mobile app prototype</li>
                                                <li>Demonstrate prototype to key stakeholders and format keynote presentations</li>
                                                <li>Design logo and branding</li>
                                                <li>Set up website domain/hosting and corporate Gmail accounts</li>
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
                                    <span>Art Direction</span> <span>Branding</span><span>Mobile Prototype</span> <span>UI/UX</span>
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
                                       2018 - 2022
                                    </p>
                                    </div>
                                </div>
                                <div className="website wrapper">
                                    <div>
                                    <h2 className="heading">
                                        Prototype
                                    </h2>
                                    </div>
                                    <div>
                                    <p className="description link p">
                                       <a className='outbound' href="https://www.figma.com/proto/N9h9LsnpCc1IHlNcd8iYnz/Better-Lives---Citizen?type=design&node-id=1-19&t=PLbBx80GpvLwNpeH-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A11&mode=design" target="blank">View Prototype</a>
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
                                </ul>
                                </Fade>
                            </div>
                            </div>
                            <div className="margins">
                            <h2 className="sec-subtitle">Scope</h2>
                            <div className="grid grid-cols-12 card-row">
                            
                                <div className="card lg:col-span-6 col-span-12">
                                        <h3 className="title h5">Challenge</h3> 
                                        <p>Society continues to grow towards cashless transactions, people have less spare change to donate to those in need. Resources are becoming less available, and information is less transparent. </p>  
                                    
                                    </div>                                                              
                                    <div className="card lg:col-span-6 col-span-12">
                                        <h3 className="title h5">Goal</h3> 
                                        <p>Help people experiencing homelessness receive donations virtually and allow citizens to donate without cash. Connect the community and allocate needed resources provided by shelters and organizations.</p>                             
                                    </div>                          
                                    <div className="card lg:col-span-6 col-span-12">
                                        <h3 className="title h5">Solution</h3> 
                                        <p>Create a virtual platform that interfaces with financial organizations, charities, shelters, and the local community to create a 24/7 support companion for those dealing with homelessness. Collaborate with organizations to assist those in need of bank accounts, shelter, resources, and volunteer help.</p>                             
                                    </div>
                              
        
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    <section id="edonate" className="container">
                        <div className='grid-bkg'>
                        <div className="project-grid wrapper margins">

                            <div className='project-outline grid grid-cols-6 spacer-md items-center flex-row-reverse gap-10'>
                                <div className='desc col-span-6 lg:col-span-3 lg:order-first order-last'>
                                    <div className="icon spacer-md">
                                    <Fade triggerOnce direction='down'>
                                    <img className="h-16" src="/assets/images/betterlives/port-betterlives-icon-edonate.svg"></img>
                                    </Fade>
                                    </div>
                                    <Fade triggerOnce direction='up'>
                                    <h3 className='h1 font-bold mb-2'>eDonation</h3> 
                                    <h4 className='h4 accent spacer'>Donate directly to those in need</h4>
                                        <ul className="p">
                                            <li>Allows citizen to donate directly to the recipients virtual wallet</li>
                                            <li>Funds can then be managed and transfered to the recipients personal bank account</li>
                                        </ul>   
                                    </Fade>                    
                                </div>
                                <div className='col-span-6 lg:col-span-3 grid justify-center'>                               
                                <img className="" src="/assets/images/betterlives/port-betterlives-edonate.webp"></img>
                                </div>
                                <div className='bkg absolute bottom-0 left-0'>                               
                                <img className="" src="/assets/images/betterlives/port-betterlives-bkg-edonate.webp"></img>
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    <section id="shelter" className="container">
                        <div className='grid-bkg'>
                        <div className="project-grid wrapper margins">
                            <div className='project-outline grid grid-cols-6 spacer-md items-center gap-10'>
                                <div className='bkg top-0 bottom-0 left-0'>                               
                                    <img className="" src="/assets/images/betterlives/port-betterlives-bkg-helpshelter.webp"></img>
                                </div>                                                        
                                <div className='img col-span-6 lg:col-span-3 grid justify-center'>                               
                                    <img className="" src="/assets/images/betterlives/port-betterlives-helpshelter.webp"></img>
                                </div>

                                <div className='desc col-span-6 lg:col-span-3'>
                                    <div className="icon spacer-md">
                                    <Fade triggerOnce direction='down'>
                                    <img className="h-16" src="/assets/images/betterlives/port-betterlives-icon-helpshelter.svg"></img>
                                    </Fade>
                                    </div>
                                    <Fade triggerOnce direction='up'>
                                    <h3 className='h1 font-bold spacer'>Help a Shelter</h3> 
                                        <ul className="p">
                                            <li>Donate directly to a shelter</li>
                                            <li>Volunteer to help a shelter or community provider</li>
                                            <li>Donate household goods to a collection and distribution service</li>
                                        </ul>   
                                    </Fade>                    
                                </div>

                            </div>
                        </div>
                        </div>
                    </section>
                    <section id="crowdfunding" className="container">
                        <div className='grid-bkg'>
                        <div className="project-grid wrapper margins">

                            <div className='project-outline grid grid-cols-6 spacer-md items-center flex-row-reverse gap-10'>
                                <div className='desc col-span-5 lg:col-span-3 lg:order-first order-last'>
                                    <div className="icon spacer-md">
                                    <Fade triggerOnce direction='down'>
                                    <img className="h-16" src="/assets/images/betterlives/port-betterlives-icon-edonate.svg"></img>
                                    </Fade>
                                    </div>
                                    <Fade triggerOnce direction='up'>
                                    <h3 className='h1 font-bold mb-2'>Crowdfunding</h3> 
                                    <h4 className='h4 accent spacer'>Donate to shelters in need</h4>
                                        <ul className="p">
                                            <li>Choose from a list of shelters where you can donate directly to their cause</li>
                                        </ul>   
                                    </Fade>                    
                                </div>
                                <div className='img col-span-6 lg:col-span-3 grid justify-center'>                               
                                <img className="w-full" src="/assets/images/betterlives/port-betterlives-crowdfunding.webp"></img>
                                </div>
                                <div className='bkg absolute bottom-0 right-0'>                               
                                <img className="" src="/assets/images/betterlives/port-betterlives-bkg-crowdfunding.webp"></img>
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    <section id="popup" className="container">
                        <div className='grid-bkg'>
                        <div className="project-grid wrapper margins">
                            <div className='project-outline grid grid-cols-6 spacer-md items-center gap-10'>
                                <div className='bkg top-0 right-0'>                               
                                    <img className="" src="/assets/images/betterlives/port-betterlives-bkg-popup.webp"></img>
                                </div>                                                        
                                <div className='img col-span-6 lg:col-span-3 grid justify-center'>                               
                                    <img className="w-full max-w-[500px]" src="/assets/images/betterlives/port-betterlives-popup.webp"></img>
                                </div>

                                <div className='desc col-span-6 lg:col-span-3'>
                                    <div className="icon spacer-md">
                                    <Fade triggerOnce direction='down'>
                                    <img className="h-16" src="/assets/images/betterlives/port-betterlives-icon-popup.svg"></img>
                                    </Fade>
                                    </div>
                                    <Fade triggerOnce direction='up'>
                                    <h3 className='h1 font-bold spacer'>Pop-Up Events</h3> 
                                        <ul className="p">
                                            <li>Volunteer or donate to a list of local community events, educational classes and medical facilities aimed at reducing homelessness</li>
                                        </ul>   
                                    </Fade>                    
                                </div>

                            </div>
                        </div>
                        </div>
                    </section>

                    <section id="logo" className="container">
                        <div className='grid-bkg'>
                        <div className="project-grid margins-b">
                            <div className='sec-title'>                           
                                <div className='col-span-2'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <p className="eyebrow">Design & Development</p>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h4 className="title">Logo Design</h4>
                                    </Fade>  
                                </div>                                
                                                      
                                <div className='details col-span-4'>                            
                                    <p>
                                    Better Lives logo symbolizes growth, reliability, and stability. It features a growing plant with the silhouette of a person reaching upward in the stem, evoking a sense of growth and empowerment.  This logo embodies the transformative journey towards success and the belief in a brighter future through the benefits that the Better Lives app provides.</p>
                                    <p>The use of green color signifies renewal, growth and harmony with society, which the Better Lives app brings to the user by providing the means for financial security and community involvement
                                        </p>                               
                                </div> 
                                                         
                            </div>
                            <div className='project-img grid grid-cols-6 gap margins spacer-md'>
                                <div className='col-span-6 center flex flex-col items-center mb-5'>
                                    <img src="/assets/images/betterlives/betterlives-logo-wireframe.svg" className='w-full max-w-[700px]'></img>
                                </div>                               
                            </div>
                            <div className='project-img grid grid-cols-6 gap margins'>
                                <div className='col-span-6 lg:col-span-2 center flex flex-col justify-center mb-6'>
                               
                                    <img src="/assets/images/betterlives/betterlives-logo.svg" className='h-40'></img>
                                    <p className="caption spacer text-center">Tagline</p>
                                </div>
                                <div className='col-span-6 lg:col-span-2 center flex flex-col justify-center mb-6'>
                                
                                    <img src="/assets/images/betterlives/betterlives-logo-notag.svg" className='h-40'></img>
                                    <p className="caption spacer text-center">No Tagline</p>
                                </div>
                                <div className='col-span-6 lg:col-span-2 center flex flex-col justify-center mb-6'>
                                
                                    <img src="/assets/images/betterlives/betterlives-symbol.svg" className='h-20'></img>
                                    <p className="caption spacer text-center">Symbol</p>
                                </div>
                            
                            </div>
                            
                        </div>
                        </div>
                    </section>

                    <section id="UX" className="container">
                        <div className='grid-bkg'>
                        <div className="project-grid margins-b">
                            <div className='sec-title'>                           
                                <div className='col-span-6 lg:col-span-6'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <h2 className="eyebrow">User Experience</h2>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h3 className="title">Design Process</h3>
                                    </Fade>                                       
                                </div> 
                                <div className='details col-span-4'>                            
                                    <p></p>                               
                                </div>                                
                      
                            </div>
                            <div className='project-img grid grid-cols-12 margins '>
                                <div className='col-span-12'>
                                    <div className='spacer-md lg:spacer-lg'>
                                    <img className="w-full" src="/assets/images/betterlives/Process.svg"></img>
                                    </div>
                                </div>
                                <div className='col-span-12 spacer-md lg:spacer-lg'>
                                    <div className='grid-cols-12'>
                                        <div className='grid-cols-12 spacer-md'>
                                            <Fade triggerOnce direction='up'>   
                                            <h4 className="h3 font-semibold !text-blGreen-primary mb-2">Qualitative Research</h4>
                                            <p>We conducted user and market research. We interviewed 6 shelter’s in Toronto to understand the wants and challenges of the shelters and those experiencing homelessness.</p>
                                            </Fade>
                                        </div>
                                        <div className='grid grid-cols-12 spacer'>
                                            <div className='col-span-4'>
                                                <img className="w-full" src="/assets/images/betterlives/80.svg"></img>
                                            </div>
                                            <div className='col-span-4'>
                                                <img className="w-full" src="/assets/images/betterlives/3.svg"></img>
                                            </div>
                                            <div className='col-span-4 spacer'>
                                                <img className="w-full" src="/assets/images/betterlives/15.svg"></img>
                                            </div>
                                        </div>
                                        
                                        <div className='grid grid-cols-12'>
                                            <div className='col-span-12 lg:col-span-9'>
                                                <img className="w-full" src="/assets/images/betterlives/Key_findings.svg"></img>
                                            </div>
                                        </div>  
                                    </div>                                        
                                </div>
                                <div className="col-span-12 spacer-md lg:spacer-lg">
                                    <div className='col-span-12 spacer'>
                                        <Fade triggerOnce direction='up'>   
                                        <h4 className="h3 font-semibold !text-blGreen-primary mb-2">Brainstorming</h4>
                                        <p>Based on the user research and interviews we started brainstorming the important features that we can offer on our platform.</p>
                                        </Fade>  
                                    </div>
                                    <div className='col-span-12 grid justify-center'>
                                        <img src="/assets/images/betterlives/Brainstorm.jpg"></img>      
                                    </div>
                                </div>
                                <div className='grid col-span-12 gap-3 spacer-md lg:spacer-lg'>
                                    <div className='col-span-12 spacer-md'>
                                        <Fade triggerOnce direction='up'>   
                                        <h4 className="h3 font-semibold !text-blGreen-primary mb-2">User Personas</h4>
                                        <p>With data collected from the interviews and research,we created 3 personas representing the ideal user of our platform.</p>
                                        </Fade>  
                                    </div>
                                    <div className='col-span-4 grid justify-center'>
                                        <img src="/assets/images/betterlives/persona1.svg" className='w-full !max-w-[370px]'></img>      
                                    </div>
                                    <div className='col-span-4 grid justify-center'>
                                        <img src="/assets/images/betterlives/persona2.svg" className='w-full !max-w-[370px]'></img>      
                                    </div>
                                    <div className='col-span-4 grid justify-center'>
                                        <img src="/assets/images/betterlives/persona3.svg" className='w-full !max-w-[370px]'></img>      
                                    </div>
                                </div>
                                <div className="col-span-12 spacer-md lg:spacer-lg">
                                    <div className='col-span-12 spacer-md'>
                                        <Fade triggerOnce direction='up'>   
                                        <h4 className="h3 font-semibold !text-blGreen-primary mb-2">Card Sorting</h4>
                                        <p>We categorized all the core features under different sections to help organize the information architecture.</p>
                                        </Fade>  
                                    </div>
                                    <div className='col-span-12 grid justify-center'>
                                        <img src="/assets/images/betterlives/Card_sorting.svg"></img>      
                                    </div>
                                </div>
                                <div className="col-span-12 spacer-md lg:spacer-lg">
                                    <div className='col-span-12 spacer-md'>
                                        <Fade triggerOnce direction='up'>   
                                        <h4 className="h3 font-semibold !text-blGreen-primary mb-2">Information Architecture</h4>
                                        <p>We further defined and re-categorized the card sortingto fit the goals of the platform.</p>
                                        </Fade>  
                                    </div>
                                    <div className='col-span-12 grid justify-center'>
                                        <img src="/assets/images/betterlives/Info_arch.svg"></img>      
                                    </div>
                                </div>


                            </div>

                        </div>
                        </div>
                    </section>

                    <section id="wireframe" className="container">
                        <div className='grid-bkg'>
                        <div className="project-grid margins-b">
                            <div className='sec-title'>                           
                                <div className='col-span-6 lg:col-span-2'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <p className="eyebrow">Design & Development</p>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h4 className="title">Wireframes</h4>
                                    </Fade>                                       
                                </div> 
                                <div className='details col-span-4'>                            
                                    <p>
                                    When it comes to user experience, we start with user research, analysis, and information architecture. Keeping away from any aesthetics allows the focus to be on features and functionality. </p>                               
                                </div>                                
                      
                            </div>
                            <div className='project-img grid grid-cols-6 margins'>
                            <div className='col-span-6 lg:col-span-6'><img className="w-full" src="/assets/images/betterlives/port-betterlives-wireframes.webp"></img></div>
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
                                    <h4 className="title">Styles</h4>
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
                            <div  id="style">
                                <div className='grid grid-cols-6 gap margins'>
                                    <div className='col-span-6 lg:col-span-3'>
                                        <h5 className="sec-subtitle !mb-1">Typography</h5>
                                        <p className="caption spacer">Designed by Indian Type Foundry, Jonny Pinhorn</p>
                                        <img src="/assets/images/betterlives/betterlives-type.webp"></img>
                                    </div>
                                    <div className='col-span-6 lg:col-span-3'>
                                    <h5 className="sec-subtitle !mb-1">Colour</h5>
                                        <p className="spacer caption">Growth, Trust, Financial, Freedom</p>
                                        <img src="/assets/images/betterlives/betterlives-colour.webp"></img>
                                    </div>                                
                                </div>
                            </div>

                        </div>
                        </div>
                    </section>
                    <section id="components" className="container">
                        <div className='grid-bkg'>
                        <div className="project-grid margins-b">
                            <div className='sec-title'>                           
                                <div className='col-span-6'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <p className="eyebrow">Design & Development</p>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h4 className="title">UI Components</h4>
                                    </Fade> 
                                   
                                </div>                                                                                                        
                            </div>


                            <div className='uikit spacer-md margins'>
                            <h5 className="sec-subtitle">System icons</h5>
                            
                            <div className='grid grid-cols-6 gap'>
                                <div className='col-span-6 lg:col-span-3'>
                                    <img src="/assets/images/betterlives/port-betterlives-icons-1.webp"></img>
                                </div>
                                <div className='col-span-6 lg:col-span-3'>
                                    <img src="/assets/images/betterlives/port-betterlives-icons-2.webp"></img>
                                </div>
                            </div>
                            </div>
                     
                            <div className='grid grid-cols-12 gap margins'>
                                <div className='col-span-6 lg:col-span-4 spacer'>
                                    <h5 className="sec-subtitle">Buttons</h5>
                                    <img src="/assets/images/betterlives/betterlives-buttons.webp"></img>
                                </div>
                                <div className='col-span-12 lg:col-span-8 spacer'>
                                    <h5 className="sec-subtitle">Navigations</h5>
                                    <img src="/assets/images/betterlives/betterlives-nav.webp"></img>
                                </div> 
                                <div className='col-span-12'>
                                    <h5 className="sec-subtitle">Cards</h5>
                                    <img src="/assets/images/betterlives/betterlives-cards.webp" className="w-full"></img>
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>

                    <section id="prototype" className="container">
                        <div className='grid-bkg'>
                        <div className="project-grid margins-b">
                            <div className='sec-title'>                           
                                <div className='col-span-6 lg:col-span-2'> 
                                    <Fade triggerOnce direction='down' >                         
                                    <p className="eyebrow">Design & Development</p>
                                    </Fade>
                                    <Fade triggerOnce direction='up'>                            
                                    <h4 className="title">Prototype</h4>
                                    </Fade> 
                            
                                </div> 
                                <div className='details col-span-4'>                            
                                    <p> Prototype used to demonstrate flow to key stakeholders.  </p>  
                                    <p><a className='outbound' href="https://www.figma.com/proto/N9h9LsnpCc1IHlNcd8iYnz/Better-Lives---Citizen?type=design&node-id=1-19&t=PLbBx80GpvLwNpeH-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A11&mode=design" target="blank">View Prototype</a></p>                           
                                </div>                                
                      
                            </div>
                            <div className='project-img grid grid-cols-6 margins'>
                            <div className="tech col-span-6">
                            <h3 className="sec-subtitle">Technologies Used</h3>
                            <div>   
                                <Fade triggerOnce direction='up' cascade damping={0.1}>                      
                                <ul>    
                                    <li>
                                        <Tooltip content="Illustrator">  
                                                <div>    
                                                <img src="/assets/images/assets/Illustrator_icon.svg" alt="Illustrator Icon"></img>                                                         
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
                                </Fade>
                            </div>
                            </div>                           
                            </div>

                        </div>
                        </div>
                    </section>
                    
                    
                </div>
            </div>
    );
};


export default BetterLives;
