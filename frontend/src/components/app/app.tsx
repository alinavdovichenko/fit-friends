import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { AppRoute } from '../../consts';
import { Layout, SignLayout } from '../index';
import { IntroPage, MainPage, LoginPage, RegisterPage } from '../../pages';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<IntroPage />} />
          <Route element={<SignLayout />} >
            <Route path={AppRoute.Login} element={<LoginPage />} />
            <Route path={AppRoute.Register} element={<RegisterPage />} />
          </Route>
          <Route element={<Layout />} >
            <Route path={AppRoute.Main} element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
