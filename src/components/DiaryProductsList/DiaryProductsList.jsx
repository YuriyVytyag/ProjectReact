import DiaryProductsListItem from "../DiaryProductsListItem/DiaryProductsListItem"
import css from '../DiaryProductsList/DiaryProductsList.module.css'

export default function DiaryProductsList (){
    return(
        <ul className={css.list}>
            <li>
                <DiaryProductsListItem />
            </li>
        </ul>
    )
}