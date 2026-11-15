import { PropsWithChildren, useEffect, useState } from 'react';
import App from '../../App';
import Footer from './Footer';
import Header from './Header';
import { useLocation } from 'react-router-dom';

const DefaultLayout = ({ children }: PropsWithChildren) => {
    const location = useLocation();
    const [showLoader, setShowLoader] = useState(true);
    const [showTopButton, setShowTopButton] = useState(false);

    const goToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const onScrollHandler = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            setShowTopButton(true);
        } else {
            setShowTopButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScrollHandler);

        const screenLoader = document.getElementsByClassName('screen_loader');
        if (screenLoader?.length) {
            // screenLoader[0].classList.add("animate__fadeOut");
            setTimeout(() => {
                setShowLoader(false);
            }, 200);
        }

        return () => {
            window.removeEventListener('onscroll', onScrollHandler);
        };
    }, [location.pathname]);

    useEffect(() => {
        window.scroll(0, 0);
    }, [location.pathname]);

    return (
        <App>
            {/* BEGIN MAIN CONTAINER */}
            <div className='bg-gray dark:bg-dark'>
                {/* screen loader  */}
                {showLoader && (
                    <div className="screen_loader fixed inset-0 z-[60] grid place-content-center bg-[#fafafa] dark:bg-[#060818]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="200px"
                            height="200px"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid"
                        >
                            <circle cx="50" cy="50" r="0" fill="none" stroke="#e0ff68" strokeWidth="4">
                                <animate
                                    attributeName="r"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="0;16"
                                    keyTimes="0;1"
                                    keySplines="0 0.2 0.8 1"
                                    calcMode="spline"
                                    begin="0s"
                                ></animate>
                                <animate
                                    attributeName="opacity"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="1;0"
                                    keyTimes="0;1"
                                    keySplines="0.2 0 0.8 1"
                                    calcMode="spline"
                                    begin="0s"
                                ></animate>
                            </circle>
                            <circle cx="50" cy="50" r="0" fill="none" stroke="#205fee" strokeWidth="4">
                                <animate
                                    attributeName="r"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="0;16"
                                    keyTimes="0;1"
                                    keySplines="0 0.2 0.8 1"
                                    calcMode="spline"
                                    begin="-0.5s"
                                ></animate>
                                <animate
                                    attributeName="opacity"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="1;0"
                                    keyTimes="0;1"
                                    keySplines="0.2 0 0.8 1"
                                    calcMode="spline"
                                    begin="-0.5s"
                                ></animate>
                            </circle>
                        </svg>
                    </div>
                )}

                <div className="body-border flex min-h-screen flex-col bg-gray font-inter text-base font-normal text-black antialiased dark:bg-dark dark:from-transparent dark:to-transparent">
                    <Header className={showTopButton ? 'sticky-header' : ''} />
                   
                    <div className="content-container flex-grow overflow-x-hidden">
                         {children}
                    </div>
                </div>


                {/* Return to Top  */}
                {showTopButton && (
                    <button type="button" className="button-totop" onClick={goToTop}>
                        <div className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="h-6 w-6 transition group-hover:text-white"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>
                    </button>
                )}
            </div>
        </App>
    );
};

export default DefaultLayout;
