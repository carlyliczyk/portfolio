import ReactGA from "react-ga4";
import { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from './store';
import { toggleDirection } from './store/themeConfigSlice';
import { HelmetProvider} from "react-helmet-async";
import { ThemeProvider } from "flowbite-react";
import { flowbiteTheme } from "./theme/flowbiteTheme";
import { AnimatePresence, motion } from "motion/react"
import { useLocation } from 'react-router-dom';

ReactGA.initialize("G-3LL005V3GZ");

function App({ children }: PropsWithChildren) {
    const location = useLocation();
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();
    const helmetContext = {};
    useEffect(() => {
        dispatch(toggleDirection(themeConfig.direction));
    }, [dispatch, themeConfig.direction]);

    return  (
    <AnimatePresence mode="wait">
       <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
      
        <HelmetProvider context={helmetContext}>
         <ThemeProvider theme={flowbiteTheme}>
        <div className={`App ${themeConfig.theme}`}>{children}</div>
         </ThemeProvider>
        </HelmetProvider>
        </motion.div>
    </AnimatePresence>
        )}
 
export default App;