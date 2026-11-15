import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import BlogCard from "../components/test/BlogCard";
import Gallery from "../components/test/Avatar";
import Profile from "../components/test/AvatarChildren";
import PackingList from "../components/test/PackingList";
import ArrayList from "../components/test/ArrayLists";
import GalleryClick from "../components/test/UpdateClickState";
import Accordion from "../components/test/SharingStates";
import TaskApp from "../components/test/UpdateObjectArray";


const Components = (props: any) => {
    document.title = 'Component Test';
    return (
        <section>
           <div className='m-auto'>
<section className="mt-12 bg-black py-[50px] dark:bg-gray-dark lg:mt-24">
                <div className="container">
                    <div className="grid grid-cols-2 justify-between gap-7 text-center sm:grid-cols-4" data-aos="fade-up" data-aos-duration="1000">
                        <div>
                            <div className="text-[40px] font-black leading-[50px] text-white">
                                <CountUp start={0} end={8350} duration={10}></CountUp>
                            </div>
                            <p className="mt-2 text-lg font-semibold">Hours of Works</p>
                        </div>
                        <div>
                            <div className="text-[40px] font-black leading-[50px] text-white">
                                <CountUp start={0} end={240} duration={10}></CountUp>
                            </div>
                            <p className="mt-2 text-lg font-semibold">Projects Complete</p>
                        </div>
                        <div>
                            <div className="text-[40px] font-black leading-[50px] text-white">
                                <CountUp start={0} end={120} duration={10}></CountUp>
                            </div>
                            <p className="mt-2 text-lg font-semibold">Feedback Received</p>
                        </div>
                        <div>
                            <div className="text-[40px] font-black leading-[50px] text-white">
                                <CountUp start={0} end={20} duration={10}></CountUp>
                            </div>
                            <p className="mt-2 text-lg font-semibold">Awards Winning</p>
                        </div>
                    </div>
                </div>
            </section>

           </div>
            <div className='max-w-[700px] m-auto p-5 border'>
                    <p>UpdateObjectArray.jsx - with Immer</p>
                    <p>Update (add/delete) array with mutation</p>
                    <TaskApp/>
                    <p><b>PackingList.jsx - Conditional rendering, props & CSS modules</b></p>
                    <p>- <i>condition ? A : B means "If the condition is truthly, render A, if not B</i></p>
                    <p>- <i>if isPacked is true, assign name + checkmark to itemContent</i></p>    
                    <PackingList/>
                    <p>Avatar.jsx - Build Components, Pass Props & CSS modules</p>  
                    <p>Structure customization for every component tag</p>
                    <Gallery/>
                    <p>AvatarChildren.jsx - Build Components, Pass Children Props & CSS modules</p>  
                    <p>Make title a separate prop if you want every Card to always have a title</p>
                    <Profile/>
                    <p>ArrayList.tsx</p>
                    <p>Put Data into an array. Map people members into new array. Filtering data based on value of prop.</p>
                    <p>Use 'key' prop to give order to list</p>
                    <ArrayList/>
                    <p>BlogCard.jsx - Date format</p>
                    <BlogCard/>
                    <p>UpdateClickState.jsx</p>
                    <p>Update item on click state. Go next and show details</p>
                    <GalleryClick/>
                    <p>SharingStates.jsx</p>
                    <p>Sharing States via accordion</p>
                    <Accordion/>

                </div>
        
        </section>

    );
};

export default Components;
