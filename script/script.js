'use strict';
 //присвоение значений переменным
 let money = +prompt('Ваш месячный доход?', '12000');
 console.log(money);

 let income = 'фриланс';

 let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
 console.log(addExpenses);

 let deposit = confirm('Есть ли у вас депозит в банке?');
 console.log(deposit);
 
 let showTypeOf = function(data) {
     console.log(typeof(data));
 };
 showTypeOf(money);
 showTypeOf(income);
 showTypeOf(deposit);

 let expenses1 = prompt('Введите обязательную статью расходов?');
 console.log(confirm(expenses1));
 let amount1 = +prompt('Во сколько это обойдется?', '1000');
 console.log(confirm(amount1));
 let expenses2 = prompt('Введите обязательную статью расходов?');
 console.log(confirm(expenses2));
  let amount2 = +prompt('Во сколько это обойдется?', '1000');
 console.log(confirm(amount2));

 let mission = 200000;

 function getExpensesMonth(a, b) {
     return a + b;
 }
  console.log(getExpensesMonth(amount1, amount2));
  

 function getAccumulatedMonth(a, b) {
     return a-b;
 }
 console.log(getAccumulatedMonth(money, getExpensesMonth(amount1, amount2)));


 let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount2));
 
 function getTargetMonth(a, b) {
     return a / b;
 }
 console.log(getTargetMonth(mission, accumulatedMonth));

 let budgetDay = function(a){
    return Math.floor(a/30);
 };
 console.log(budgetDay(accumulatedMonth));
 
 let getStatusIncome = function(a){
if (a > 1200){
    return ('У вас высокий уровень дохода');
} else if (a >= 600 && a <= 1200) {
   return ('У вас средний уровень дохода');
} else if (a >= 0 && a < 600) {
    return('К сожалению ваш уровень дохода ниже среднего');
} else {
    return ('Что то пошло не так');
}
 };
 console.log(getStatusIncome(budgetDay(accumulatedMonth)));