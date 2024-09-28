import {
  LookForCompany,
  PopularTrainings,
  SpecialForYou,
  SpecialOffers,
} from '../../components';

function MainPage(): JSX.Element {
  return (
    <>
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
