import Featured from '../components/Featured';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Fade, Slide} from "react-awesome-reveal";
const index = (props: any) => {
    document.title = 'Carly Liczyk Portfolio | Toronto UI/UX/Graphic Designer';
    const [activeTab, setActiveTab] = useState<string>('all');
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const feedbacks = [
                {
            id: 1,
            name: 'The Lirio',
            link: '/the-lirio',
            thumbnail: '/assets/images/thelirio/thelirio-featured-crop.gif',
            message:'UI/UX Design / Web Development', 
        },
        {
            id: 2,
            name: 'Better Lives',
            link: '/better-lives',
            thumbnail: '/assets/images/betterlives/featured-betterlives.gif',
            message:'Mobile UI/UX Design',
        },
        {
            id: 3,
            name: 'Fluent Translations',
            link: '/fluent-translations',
            thumbnail: '/assets/images/fluent/featured.gif',
            message:'UI Design / Web Development',        
        },
    ];

    return (
        <div className="overflow-hidden">
            <div className="overflow">
                <section className="container grid-bkg">
                    <div className='project-grid wrapper'>
                        <div>
                            <div className="relative hero z-[1]  mb-0 lg-mb-8">
                                <Fade direction='down' triggerOnce>
                                <h1 className="font-bold leading-normal spacer-md lg:spacer-lg"> Digital Solutions for Your Business</h1>
                                </Fade>
                            </div>
                        </div>            
                        <div className="container relative">                 
                            <div className=" pt-0">                     
                            <Featured className=':-top-20' type="index" feedbacks={feedbacks} ></Featured>                    
                            </div>
                        </div>
                </div>
            </section>

            <section className="portfolio-container "> 
            <div className='project-grid wrapper'> 
                <div className="heading spacer">
                    <Fade direction='down' triggerOnce>
                        <h2>Portfolio</h2>
                    </Fade>
                </div>
                
                    <div className="spacer-md">
                    <Fade direction='up' triggerOnce cascade damping={0.2}>
                        <ul className="filters home-filter flex flex-wrap gap-3">
                            <li className={`filter ${activeTab === 'all' ? 'active' : ''}`}>
                                <button type="button" onClick={() => setActiveTab('all')}>
                                    All Work
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'artdirection' ? 'active' : ''}`}>
                                <button type="button" onClick={() => setActiveTab('artdirection')}>
                                    Art Direction
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'design' ? 'active' : ''}`}>
                                <button type="button" onClick={() => setActiveTab('design')}>
                                    Graphic Design
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'uiux' ? 'active' : ''}`}>
                                <button type="button" onClick={() => setActiveTab('uiux')}>
                                    UI/UX
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'webdev' ? 'active' : ''}`}>
                                <button type="button" onClick={() => setActiveTab('webdev')}>
                                    Web Dev
                                </button>
                            </li>

                        </ul>
                        </Fade>
                    </div>
                    <div className="projects grid gap-2 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3">

                        <div className={`project ${activeTab === 'all' || activeTab === 'uiux' || activeTab === 'webdev' || activeTab === 'artdirection' ? 'block' : 'hidden'}`}>
                            <div className="project-wrapper">
                                <Link to="/The-Lirio" className="absolute top-0 left-0 h-full w-full"></Link>
                                <div className='project-img overflow-hidden project-thumb'>
                                <img src="/assets/images/thelirio/home-2.webp" alt="The Lirio" />
                                </div>
                                <div className="project-info">
                                    <h3 className="title">The Lirio</h3>
                                    <p>Ecommerce Website</p>
                                </div>
                            </div>
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'design' || activeTab === 'artdirection' ? 'block' : 'hidden'}`}>
                            <div className="project-wrapper">
                                <Link to="/advanced-inclusions-1lead" className="absolute top-0 left-0 h-full w-full"></Link>
                                <div className='project-img overflow-hidden project-thumb'>
                                <img src="/assets/images/advinc/onepg-01-home.webp" alt="Advanced Inclusions One Pager" />
                                </div>
                                <div className="project-info">
                                    <h3 className="title">Advanced Inclusions</h3>
                                    <p>One Pager</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'uiux' || activeTab === 'webdev' ? 'block' : 'hidden'}`}>
                            <div className="project-wrapper">
                                <Link to="/Northern-Bites-Charcuterie" className="absolute top-0 left-0 h-full w-full"></Link>
                                <div className='project-img overflow-hidden project-thumb'>
                                <img src="/assets/images/northernbites/home.webp" alt="Northern Bites Charcuterie" />
                                </div>
                                <div className="project-info">
                                    <h3 className="title">Northern Bites Charcuterie</h3>
                                    <p>Website</p>
                                </div>
                            </div>
                            
                        </div>

                        <div className={`project ${activeTab === 'all' || activeTab === 'uiux' || activeTab === 'webdev' || activeTab === 'design' ? 'block' : 'hidden'}`}>
                            <div className="project-wrapper">
                                <Link to="/fluent-translations" className="absolute top-0 left-0 h-full w-full"></Link>
                                <div className='project-img overflow-hidden project-thumb'>
                                <img src="/assets/images/fluent/home-2.webp" alt="Fluent Translations" />
                                </div>
                                <div className="project-info">
                                    <h3 className="title">Fluent Translations</h3>
                                    <p>Website</p>
                                </div>
                            </div>
                            
                        </div>
                       
                        <div className={`project ${activeTab === 'all' || activeTab === 'uiux' || activeTab === 'design' || activeTab === 'artdirection' ? 'block' : 'hidden'}`}>
                            <div className="project-wrapper">
                                <Link to="/better-lives" className="absolute top-0 left-0 h-full w-full"></Link>
                                <img src="/assets/images/betterlives/home.webp" alt="Better Lives" />
                                <div className="project-info">
                                    <h3 className="title">Better Lives</h3>
                                    <p>Mobile App</p>
                                </div>
                            </div>
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'webdev' || activeTab === 'uiux' ? 'block' : 'hidden'}`}>
                            <div className="project-wrapper">
                                <Link to="/sweetiebpetwear" className="absolute top-0 left-0 h-full w-full"></Link>
                                <img src="/assets/images/sweetiebpetwear/home.webp" alt="Sweetie B Petwear" className="" />
                                <div className="project-info">
                                    <h3 className="title">Sweetie B Petwear</h3>
                                    <p className="">Ecommerce Website</p>
                                </div>
                            </div>
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'uiux' ? 'block' : 'hidden'}`}>
                            <div className="project-wrapper">
                                <Link to="/trackman" className="absolute top-0 left-0 h-full w-full"></Link>
                                <div className='project-img overflow-hidden project-thumb'>
                                <img src="/assets/images/trackman/home-2.webp" alt="Trackman" className="transition duration-1000 hover:scale-105" />
                                </div>
                                <div className="project-info">
                                    <h3 className="title">Trackman Golf Simulator</h3>
                                    <p>Website</p>
                                </div>
                            </div>
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'design' ? 'block' : 'hidden'}`}>
                            <div className="project-wrapper">
                                <Link to="/allmax" className="absolute top-0 left-0 h-full w-full"></Link>
                                <img src="/assets/images/allmax/Home.webp" alt="AllMax Mechanical" className="" />
                                <div className="project-info">
                                    <h3 className="title">AllMax Mechanical</h3>
                                    <p>Logo</p>
                                </div>
                            </div>
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'design' ? 'block' : 'hidden'}`}>
                            <div className="project-wrapper">
                                <Link to="/novadaq-specsheet" className="absolute top-0 left-0 h-full w-full"></Link>
                                <img src="/assets/images/nvdq-spec/home.webp" alt="NOVADAQ Spec Sheet" className="" />
                                <div className="project-info">
                                    <h3 className="title">NOVADAQ Medical Tech</h3>
                                    <p>One-Pager</p>
                                </div>
                            </div>
                        </div>
                         <div className={`project ${activeTab === 'all' || activeTab === 'design' ? 'block' : 'hidden'}`}>
                            <div className="project-wrapper">
                                <Link to="/novadaq-dcell-broshure" className="absolute top-0 left-0 h-full w-full"></Link>
                                <img src="/assets/images/nvdq/dcell-broch-home-2.webp" alt="NOVADAQ Brochure" className="" />
                                <div className="project-info">
                                    <h3 className="title">NOVADAQ Medical Tech</h3>
                                    <p>Brochure</p>
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

export default index;
