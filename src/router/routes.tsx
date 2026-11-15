import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));
const Error404 = lazy(() => import('../pages/404'));
const Components = lazy(() => import('../pages/Components'));
const FluentTranslations = lazy(() => import('../pages/Fluent-translations/FluentTranslations'));
const BetterLives = lazy(() => import('../pages/BetterLives/BetterLives'));
const NovadaqSpecSheet = lazy(() => import('../pages/NovadaqSpecSheet/NovadaqSpecSheet'));
const NovadaqDcellBroshure = lazy(() => import('../pages/NovadaqDcellBroshure/NovadaqDcellBroshure'));
const AdvincOnepagerLead = lazy(() => import('../pages/Advanced-inclusion/AdvincOnepagerLead'));
const SweetieBPetwear = lazy(() => import('../pages/SweetieBPetwear/SweetieBPetwear'));
const Trackman = lazy(() => import('../pages/Trackman/Trackman'));
const AllMax = lazy(() => import('../pages/AllMax/AllMax'));
const NorthernBitesCharcuterie = lazy(() => import('../pages/NorthernBitesCharcuterie/NorthernBitesCharcuterie'));
const TheLirio = lazy(() => import('../pages/TheLirio/TheLirio'));


const routes = [

    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/allmax',
        element: <AllMax />,
    },
    {
        path: '/trackman',
        element: <Trackman />,
    },
    {
        path: '/sweetiebpetwear',
        element: <SweetieBPetwear />,
    },
    {
        path: '/novadaq-specsheet',
        element: <NovadaqSpecSheet />,
    },
    {
        path: '/novadaq-dcell-broshure',
        element: <NovadaqDcellBroshure />,
    },
        {
        path: '/advanced-inclusions-1lead',
        element: <AdvincOnepagerLead />,
    },
    {
        path: '/fluent-translations',
        element: <FluentTranslations />,
    },
    {
        path: '/better-lives',
        element: <BetterLives />,
    },
    {
        path: '/components',
        element: <Components />,
    },
    {
        path: '/Northern-Bites-Charcuterie',
        element: <NorthernBitesCharcuterie />,
    },
    {
        path: '/The-Lirio',
        element: <TheLirio />,
    },
    {
        path: '*',
        element: <Error404 />,
    },

];

export { routes };
