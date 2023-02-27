import { Bar, List, Item, Title, FoodWrap } from './RightSideBar.styled';
import { selectDay, selectDaySummary } from 'redux/info/info-selectors';
import { selectDailyRateProducts } from 'redux/dailyDateUserId/dailyDateUserId-selectors';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

export const RightSideBar = () => {
  const notProducts = useSelector(selectDailyRateProducts);
  const products = notProducts.slice(0,4)
  
  const { kcalConsumed, kcalLeft, dailyRate, percentsOfDailyRate } =
    useSelector(selectDaySummary);
  const selectedDay = useSelector(selectDay);

  let formatDate = dayjs().format('DD/MM/YYYY');
  if (selectedDay) {
    formatDate = selectedDay.date.split('-').reverse().join('/');
  }

  const summary = {
    kcalLeft: kcalLeft ? Math.round(kcalLeft) : '0',
    kcalConsumed: kcalConsumed ? Math.round(kcalConsumed) : '0',
    dailyRate: dailyRate ? Math.round(dailyRate) : '0',
    percentsOfDailyRate: percentsOfDailyRate
      ? Math.round(percentsOfDailyRate)
      : '0',
    date: formatDate,
  };

  return (
    <Bar>
      <div>
        <Title>Summary for {summary.date}</Title>
        <List>
          <Item>
            <span>Left</span>
            <span>{summary.kcalLeft} kcal</span>
          </Item>
          <Item>
            <span>Consumed</span>
            <span>{summary.kcalConsumed} kcal</span>
          </Item>
          <Item>
            <span>Daily rate</span>
            <span>{summary.dailyRate} kcal</span>
          </Item>
          <Item>
            <span>n% normal</span>
            <span>{summary.percentsOfDailyRate} %</span>
          </Item>
        </List>
      </div>
      <FoodWrap>
        <Title>Food not recommended</Title>
        <List>
          {products.map(product => 
            <Item key={product}>{product}</Item>
          )}
        </List>
      </FoodWrap>
    </Bar>
  );
};
