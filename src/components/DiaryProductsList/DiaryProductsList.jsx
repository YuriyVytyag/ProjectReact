import css from '../DiaryProductsList/DiaryProductsList.module.css';
import { MdOutlineClose } from 'react-icons/md';
import { selectDayId } from 'redux/info/info-selectors';
import { selectEatenProducts } from 'redux/info/info-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEatenProduct } from 'redux/info/info-operations';

export default function DiaryProductsList() {
  const dispatch = useDispatch();
  const eatenProductsForDay = useSelector(selectEatenProducts);
  const dayId = useSelector(selectDayId);
        
  const handleClickDelete = (id) => {
    const deleteProduct = {
      dayId: dayId,
      eatenProductId: id,
    };
    dispatch(deleteEatenProduct(deleteProduct));
  };

  return (
    <ul className={css.list}>
      {eatenProductsForDay.map(({ id, title, weight, kcal }) => {
        const roundNumber = Math.round(kcal);
        return (
          <li key={id}>
            <div className={css.wrapper}>
              <p className={css.text__product}>{title}</p>
              <p className={css.text__weight}>{weight} g</p>
              <p className={css.text__kcal}>{roundNumber} kcal</p>
              <button
                className={css.button}
                type="button"
                onClick={()=>handleClickDelete(id)}
              >
                <MdOutlineClose size={12} />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
