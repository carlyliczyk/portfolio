import { Link } from 'react-router-dom';

const Error404 = (props: any) => {
    document.title = '404 | Plurk – Tailwind CSS Multipurpose Landing Templates';
    return (
        <section>
            <div className="pt-[82px] lg:pt-[106px]">
            <div className="flex min-h-[500px] items-center justify-center">
               <div>
               <div className="p-5 text-center font-semibold">
                    <h2 className="mb-8 text-[50px] font-bold leading-none md:text-[80px]">404</h2>
                    <p className="text-base">The page you requested was not found!</p>
                    <Link to="/" className="btn mx-auto mt-10 w-max">
                        Back To Home
                    </Link>
                </div>
               </div>
            </div>
            
        </div>
        </section>

    );
};

export default Error404;
