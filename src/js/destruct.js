/* eslint-disable linebreak-style */

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание 'засекречено'
    },
  ],
};

export default function destructuringObject(obj) {
  const result = [];

  for (const {
    id = 'Айди недоступно',
    name = 'Имя недоступно',
    icon = 'Иконка недоступна',
    description = 'Описание недоступно',
  } of obj.special) {
    result.push({
      id, name, description, icon,
    });
  }
  return result;
}

destructuringObject(character);
