import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { add } from '../redux/Slices/cardSlice';

export function CardItem() {
  const { card } = useSelector((state: { card: number[] }) => state);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('cart :', card);
  // });

  const addF = () => {
    dispatch(add(Math.floor(Math.random() * 10)));
  };

  return (
    <div>
      <button onClick={addF} type="button">
        Add
      </button>
      <div className="flex flex-col gap-2">
        {card.map((item) => (
          <p className=" text-purple-700 font-semibold mx-2" key={item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default CardItem;
