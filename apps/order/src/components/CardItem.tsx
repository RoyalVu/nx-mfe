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
    <div className="flex items-center justify-center flex-col">
      <button
        className="button p-2 rounded-md mx-auto bg-accent"
        onClick={addF}
        type="button"
      >
        Add
      </button>
      <div className="flex gap-2">
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
