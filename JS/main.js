var money = prompt("Ваш бюджет на месяц?"),
   time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
   budjet: money,
   timeData: time,
   expenses: {
      question1: question1
   },
   optionalExpenses: {},
   income: [],
   saving: false,

};

var question1 = prompt("Введите обязательную статью расходов в этом месяце"),
   question1 = prompt("Во сколько обойдется?"),
   question3 = prompt("Введите обязательную статью расходов в этом месяце"),
   question4 = prompt("Во сколько обойдется?");


alert(appData.budjet / 30);