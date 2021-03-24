import { useState } from "react"
import s from "./paginator.module.css"

const Paginator = (props) => {
	let pagesCount = Math.ceil(props.totalCount / props.itemsInPage)
	let pagesArray = []
	for (let i = 1; i <= pagesCount; i++) {
		pagesArray.push(i)
	}
	let portionCount = Math.ceil(pagesCount / props.portionSize)
	let [portionNumber, setPortionNumber] = useState(1)
	let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
	let rightPortionPageNumber = portionNumber * props.portionSize


	return (
		<div>
			{portionNumber > 2 && <button onClick={() => setPortionNumber(1)}>---</button>}
			{leftPortionPageNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>BACK</button>}
			{pagesArray
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map(p => <span onClick={(e) => { props.onPageNumberClick(p) }} className={props.currentPage === p ? s.currentPage : s.page} > {p}</span>)
			}
			{portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
			{portionNumber < portionCount - 1 && <button onClick={() => setPortionNumber(portionCount)}>+++</button>}
		</div>
	)
}

// let Paginator = ({ totalCount, itemsInPage, currentPage, onPageNumberClick, portionSize = 10 }) => {

// 	let pagesCount = Math.ceil(totalCount / itemsInPage);

// 	let pages = [];
// 	for (let i = 1; i <= pagesCount; i++) {
// 		pages.push(i);
// 	}

// 	let portionCount = Math.ceil(pagesCount / portionSize);
// 	let [portionNumber, setPortionNumber] = useState(1);
// 	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
// 	let rightPortionPageNumber = portionNumber * portionSize;


// 	return <div className={s.paginator}>
// 		{portionNumber > 1 &&
// 			<button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}

// 		{pages
// 			.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
// 			.map((p) => {
// 				return <span className={({
// 					[s.selectedPage]: currentPage === p
// 				}, s.pageNumber)}
// 					key={p}
// 					onClick={(e) => {
// 						onPageNumberClick(p);
// 					}}>{p}</span>
// 			})}
// 		{portionCount > portionNumber &&
// 			<button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}


// 	</div>
// }
export default Paginator