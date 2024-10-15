import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../consts';
import { Layout, SignLayout } from '../index';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import { IntroPage,
  MainPage,
  LoginPage,
  RegisterPage,
  QuestionaryUserPage,
  AccountPage,
  TrainingCatalogPage,
  MyPurchasesPage,
  UserPage,
  TrainingPage,
} from '../../pages';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
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
            <Route path={AppRoute.Account} element={<AccountPage />} />
            <Route path={AppRoute.TrainingCatalog} element={<TrainingCatalogPage />} />
            <Route path={AppRoute.MyPurchases} element={<MyPurchasesPage />} />
            <Route path={`${AppRoute.Users}/:userId`} element={<UserPage />} />
            <Route
              path={`${AppRoute.Trainings}/:trainingId`}
              element={<TrainingPage />}
            />
          </Route>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
