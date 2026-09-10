// ============================================================
// УРОК 2 — Умови, цикли, функції, масиви
// ============================================================

// Задача №1
// Що потрапить в консоль?
//   let someVar = 0;
//   ++someVar;
//   if (someVar) { 
//      console.log(someVar); 
//   }
// Запишіть результат як число або null (якщо нічого не виведеться)

const task1Answer = 1; // <- ваша відповідь

// Задача №2
// За допомогою циклу FOR виведіть рядки: "Пункт №1", "Пункт №2", ... "Пункт №10"
// Функція має повертати масив з 10 рядків

function task2() {
  const result = [];
  // ваш код тут 
  for (let i = 1; i <= 10; i++) {
    result.push(`Пункт №${i}`);
  }
  return result;
}
console.log(task2());


// Задача №3
// Що потрапить в консоль?
//   if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
//     console.log('000');
//   }
//if(40 <= 10 || 15<5   && 10 <= "10" || 20 === "20")
//if(false || false &&  true || false)
//if (false || false || false)
//if (false || false )
//if ()


// Запишіть результат як рядок або null (якщо нічого не виведеться)

const task3Answer = null; // <- ваша відповідь


// Задача №4
// Функція ділення. Не має повертати NaN, Infinity або кидати помилку.
// Повертає рядок виду: "Результат ділення: 5"

function divide(a, b) {
  // ваш код тут

  const numberOne = Number(a);
  const numberThoo = Number(b);

  if(
  Number.isNaN(numberOne) ||
    Number.isNaN(numberThoo) ||
    numberThoo === 0 ||
    !Number.isFinite(numberOne / numberThoo))
  {
    return "Помилка: неможливо виконати ділення";
  }

  const result = numberOne / numberThoo;
  return `Результат ділення: ${result}`;
}

console.log(divide(15, 2));



// Задача №5
// Створіть масив із 5 елементів.
// За допомогою методу перебору перевірте,
// чи містить масив число 10.
// Поверніть true, якщо число знайдено, інакше false.

function task5() {
  const arr = []; // <- ваш масив (має містити число 10)
  // ваш код перебору тут
  for (let i = 0; i < 4; i++) {
    const randomNum = Math.floor(Math.random() * 20) + 1;
    arr.push(randomNum);
  }
  
  arr.push(10);

  console.log(arr.includes(10));
  
  return arr;
}

console.log(task5());

// повертає true якщо знайдено 10, інакше false





module.exports = { task1Answer, task2, task3Answer, divide, task5 };
