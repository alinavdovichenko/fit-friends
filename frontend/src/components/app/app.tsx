import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { AppRoute } from '../../consts';
import { Layout, SignLayout } from '../index';
import { IntroPage,
  MainPage,
  LoginPage,
  RegisterPage,
  QuestionaryUserPage,
  AccountUserPage,
  TrainingCatalogPage,
  MyPurchasesPage,
  UserCardUserPage
} from '../../pages';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<IntroPage />} />
          <Route element={<SignLayout />} >
            <Route path={AppRoute.Login} element={<LoginPage />} />
            <Route path={AppRoute.Register} element={<RegisterPage />} />
            <Route
              path={AppRoute.Questionary}
              element={ <QuestionaryUserPage />}
            />
          </Route>
          <Route element={<Layout />} >
            <Route path={AppRoute.Main} element={<MainPage />} />
            <Route path={AppRoute.Account} element={<AccountUserPage />} />
            <Route path={AppRoute.TrainingCatalog} element={<TrainingCatalogPage />} />
            <Route path={AppRoute.MyPurchases} element={<MyPurchasesPage />} />
            <Route path={AppRoute.CardUser} element={<UserCardUserPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
