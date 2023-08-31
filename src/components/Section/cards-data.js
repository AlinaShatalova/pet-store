import uniqueId from "lodash/uniqueId";

export const data = [
  {
    id: uniqueId(),
    name: 'Нямушка',
    taste: 'с фуа-гра',
    amount: '10 порций',
    gift: 'мышь в подарок',
    weight: {
      value: '0,5',
      unit: 'кг',
    },
    description: {
      default: 'Чего сидишь? Порадуй котэ,',
      selected: 'Печень утки разварная с артишоками.',
      disabled: 'Печалька, с фуа-гра закончился.',
    },
    action: 'купи.',
    isDisabled: false,
  },
  {
    id: uniqueId(),
    name: 'Нямушка',
    taste: 'с рыбой',
    amount: '40 порций',
    gift: '2 мыши в подарок',
    weight: {
      value: '2',
      unit: 'кг',
    },
    description: {
      default: 'Чего сидишь? Порадуй котэ,',
      selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      disabled: 'Печалька, с рыбой закончился.',
    },
    action: 'купи.',
    isDisabled: false,
  },
  {
    id: uniqueId(),
    name: 'Нямушка',
    taste: 'с курой',
    amount: '100 порций',
    gift: '5 мышей в подарок',
    isCustomerHappy: 'заказчик доволен',
    weight: {
      value: '5',
      unit: 'кг',
    },
    description: {
      default: 'Чего сидишь? Порадуй котэ,',
      selected: 'Филе из цыплят с трюфелями в бульоне.',
      disabled: 'Печалька, с курой закончился.',
    },
    action: 'купи.',
    isDisabled: true,
  },
];