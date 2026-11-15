import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import './assets/css/styles.scss';
import './assets/css/ProjectMenu.css';

// Router
import { RouterProvider } from 'react-router-dom';
import router from './router/index';

// Redux
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <Suspense>
            <RouterProvider router={router} />
        </Suspense>
    </Provider>
);
