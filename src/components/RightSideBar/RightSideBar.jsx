import { Bar, List, Item, Title } from './RightSideBar.styled'

export const RightSideBar = ({date, left, consumed, rate, normal, food}) => {
  return (
    <Bar>
      <div>
        <Title>Summary for {date}</Title>
        <List>
          <Item>
            <span>Left</span>
            <span>{left} kcal</span>
          </Item>
          <Item>
            <span>Consumed</span>
            <span>{consumed} kcal</span>
          </Item>
          <Item>
            <span>Daily rate</span>
            <span>{rate} kcal</span>
          </Item>
          <Item>
            <span>n% normal</span>
            <span>{normal} %</span>
          </Item>
        </List>
      </div>
      <div>
        <Title className="headerBottom">Food not recommended</Title>
        <List>
          {Array.isArray(food) && food.map(meal => 
            <Item>{meal.title}</Item>
          )}

        </List>
      </div>
    </Bar>
  );
};