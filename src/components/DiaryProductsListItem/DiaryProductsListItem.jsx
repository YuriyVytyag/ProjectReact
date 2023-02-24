import css from '../DiaryProductsListItem/DiaryProductsListItem.module.css'
import { MdOutlineClose } from 'react-icons/md';

export default function DiaryProductsListItem (){


    return(
       <div className={css.wrapper}>
        <p className={css.text__product}>Nut</p>
        <p className={css.text__weight}>100 g</p>
        <p className={css.text__kcal}>250 kcal</p>
        <button className={css.button} type="button">
            <MdOutlineClose size={12} />
        </button>
       </div>
    )
}