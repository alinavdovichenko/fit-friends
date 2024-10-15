import {Helmet} from 'react-helmet-async';
import {
  LookForCompany,
  PopularTrainings,
  SpecialForYou,
  SpecialOffers,
} from '../../components';

function MainPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <h1 className="visually-hidden">
        FitFriends — Время находить тренировки, спортзалы и друзей спортсменов
      </h1>
      <SpecialForYou />
      <SpecialOffers />
      <PopularTrainings />
      <LookForCompany />
    </>
  );
}
export default MainPage;
