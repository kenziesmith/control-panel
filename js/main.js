// список студентов
const studentsList = [
  {
    name: "Вероника",
    surname: "Николаева",
    lastname: "Глебовна",
    dateOfBirth: new Date("09 02 2002"),
    startOfStudies: 2020,
    faculty: "Физика",
  },
  {
    name: "Ева",
    surname: "Озерова",
    lastname: "Александровна",
    dateOfBirth: new Date("02 17 1998"),
    startOfStudies: 2020,
    faculty: "Психология",
  },
  {
    name: "Марк",
    surname: "Гуляев",
    lastname: "Денисович",
    dateOfBirth: new Date("02 26 2000"),
    startOfStudies: 2019,
    faculty: "Астрономия",
  },
  {
    name: "Фёдор",
    surname: "Болдырев",
    lastname: "Артурович",
    dateOfBirth: new Date("08 11 1999"),
    startOfStudies: 2017,
    faculty: "Экономика",
  },
  {
    name: "Константин",
    surname: "Морозов",
    lastname: "Маркович",
    dateOfBirth: new Date("11 22 2000"),
    startOfStudies: 2021,
    faculty: "Социология",
  },
  {
    name: "Роман",
    surname: "Алексеев",
    lastname: "Денисович",
    dateOfBirth: new Date("07 21 2002"),
    startOfStudies: 2019,
    faculty: "История",
  },
  {
    name: "Ева",
    surname: "Котова",
    lastname: "Владиславовна",
    dateOfBirth: new Date("06 01 1998"),
    startOfStudies: 2016,
    faculty: "Журналистика",
  },
  {
    name: "Полина",
    surname: "Воронина",
    lastname: "Григорьевна",
    dateOfBirth: new Date("04 11 2003"),
    startOfStudies: 2023,
    faculty: "Политология",
  },
  {
    name: "Анна",
    surname: "Константинова",
    lastname: "Романовна",
    dateOfBirth: new Date("06 14 1999"),
    startOfStudies: 2022,
    faculty: "Философия",
  },
  {
    name: "Анастасия",
    surname: "Львова",
    lastname: "Максимовна",
    dateOfBirth: new Date("09 29 1997"),
    startOfStudies: 2015,
    faculty: "История",
  },
];

let currentSort = "FIO"; // хранит данные о последней сортировке

// создаем форму с полями ввода
function createForm() {
  const form = document.createElement("form"); // форма добавления студента

  const formInputWrapper = document.createElement("div"); // обертка для инпутов

  const formInpName = document.createElement("input"); // ввод имени
  const formInpSurname = document.createElement("input"); // ввод фамилии
  const formInpLastname = document.createElement("input"); // ввод отчества
  const formInpDateOfBirth = document.createElement("input"); // дата рождения
  const formInpStartOfStudies = document.createElement("input"); // год обучения
  const formInpFaculty = document.createElement("input"); // факультет

  const formBtnWrapper = document.createElement("div"); // обретка для кнопки
  const inputErrorMessage = document.createElement("p"); // сообщение об ошибке
  const formBtn = document.createElement("input"); // кнопка

  // классы и стили
  form.className = "form";
  formInputWrapper.className = "mb-3";
  formInputWrapper.style.display = "flex";
  formInputWrapper.style.flexDirection = "column";
  formBtnWrapper.className = "btn-wrapper";
  inputErrorMessage.className = "mb-2 mt-2 input-message input-error";
  formBtn.className = "btn btn-success";

  // атрибуты type
  formInpName.type = "text";
  formInpSurname.type = "text";
  formInpLastname.type = "text";
  formInpDateOfBirth.type = "date";
  formInpStartOfStudies.type = "number";
  formInpFaculty.type = "text";
  formBtn.type = "submit";

  // основные атрибуты
  formInpName.placeholder = "Имя студента*";
  formInpSurname.placeholder = "Фамилия студента*";
  formInpLastname.placeholder = "Отчество студента*";
  formInpStartOfStudies.placeholder = "Год начала обучения*";
  formInpFaculty.placeholder = "Факультет*";
  formBtn.value = "Добавить студента";

  // готовые значения (для теста)
  formInpName.value = "Константин";
  formInpSurname.value = "Лебедев";
  formInpLastname.value = "Алексеевич";
  formInpDateOfBirth.valueAsDate = new Date("2003-12-25");
  formInpStartOfStudies.value = "2021";
  formInpFaculty.value = "Химия";

  formBtnWrapper.append(inputErrorMessage, formBtn);

  formInputWrapper.append(
    formInpName,
    formInpSurname,
    formInpLastname,
    formInpDateOfBirth,
    formInpStartOfStudies,
    formInpFaculty
  );

  form.append(formInputWrapper, formBtnWrapper);

  return {
    form,
    formInpName,
    formInpSurname,
    formInpLastname,
    formInpDateOfBirth,
    formInpStartOfStudies,
    formInpFaculty,
    inputErrorMessage,
    formInputWrapper,
  };
}

function createFormFilter() {
  const formFilter = document.createElement("form"); // форма с фильтрами

  const formFilterInpFIO = document.createElement("input");
  const formFilterInpFaculty = document.createElement("input");
  const formFilterInpStartOfStudies = document.createElement("input");
  const formFilterInpEndOfStudies = document.createElement("input");

  formFilterInpFIO.className = "inp-filter-fio";
  formFilterInpFaculty.className = "inp-filter-faculity";
  formFilterInpStartOfStudies.className = "inp-filter-star-of-studies";
  formFilterInpEndOfStudies.placeholder = "inp-filter-end-of-studies";

  formFilterInpFIO.placeholder = "Ф.И.О";
  formFilterInpFaculty.placeholder = "Факультет";
  formFilterInpStartOfStudies.placeholder = "Начало обучения";
  formFilterInpEndOfStudies.placeholder = "Конец обучения";

  formFilter.className = "form";
  formFilter.style.marginLeft = "50px";
  formFilter.style.marginTop = "auto";

  formFilter.append(
    formFilterInpFIO,
    formFilterInpFaculty,
    formFilterInpStartOfStudies,
    formFilterInpEndOfStudies
  );

  return {
    formFilter,
    formFilterInpFIO,
    formFilterInpFaculty,
    formFilterInpStartOfStudies,
    formFilterInpEndOfStudies,
  };
}

// создаем основные элементы таблицы
function createTable() {
  const table = document.createElement("table"); // сама таблицы
  table.className = "table table-dark table-striped"; // bootstrap стили

  const tableHead = document.createElement("thead"); // шапка таблицы
  const tableBody = document.createElement("tbody"); // тело таблицы

  const tableHeadRow = document.createElement("tr");

  const tableHeadCellFIO = document.createElement("th");
  const tableHeadCellFaculty = document.createElement("th");
  const tableHeadCellDateOfBirth = document.createElement("th");
  const tableHeadCellYearOfStudy = document.createElement("th");

  tableHeadCellFIO.textContent = "Ф.И.О. студента";
  tableHeadCellFaculty.textContent = "Факультет";
  tableHeadCellDateOfBirth.textContent = "Дата рождения";
  tableHeadCellYearOfStudy.textContent = "Год обучения";

  tableHeadRow.append(
    tableHeadCellFIO,
    tableHeadCellFaculty,
    tableHeadCellDateOfBirth,
    tableHeadCellYearOfStudy
  );

  tableHead.append(tableHeadRow);

  table.append(tableHead, tableBody);

  return {
    table,
    tableBody,
    tableHeadCellFIO,
    tableHeadCellFaculty,
    tableHeadCellDateOfBirth,
    tableHeadCellYearOfStudy,
  };
}

// возвращает возраст студента (принимает дату рождения в виде строки)
function getAge(dateString) {
  let day = parseInt(dateString.substring(0, 2));
  let month = parseInt(dateString.substring(3, 5));
  let year = parseInt(dateString.substring(6, 10));

  let today = new Date();
  let birthDate = new Date(year, month - 1, day); // 'month - 1' т.к. нумерация месяцев начинается с 0
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

// генерирует строку с новым студентом
function createStudentRow(student) {
  const now = new Date();

  const studentRow = document.createElement("tr");

  const studentCellFIO = document.createElement("td");
  const studentCellfaculty = document.createElement("td");
  const studentCelldateOfBirth = document.createElement("td");
  const studentCellStartOfStudies = document.createElement("td");

  studentCellFIO.innerText = student.FIO;
  studentCellfaculty.innerText = student.faculty;

  // значение даты из массива переводим в необходимый для отображения формат
  studentCelldateOfBirth.innerHTML = `${student.dateOfBirth.toLocaleString(
    "ru",
    (options = {
      month: "numeric",
      year: "numeric",
      day: "numeric",
    })
  )} (${getAge(student.dateOfBirth.toLocaleString())})`;

  const educationEndDate = new Date(parseInt(student.startOfStudies) + 4, 8, 1); // дата, когда студент окончил обучение

  let educationStatus = new Date(educationEndDate - now).getFullYear() - 1970;

  educationStatus = educationStatus < 0 ? "закончил/а" : 4 - educationStatus;

  educationStatus = educationStatus <= 0 ? "не начал/а" : educationStatus;

  studentCellStartOfStudies.innerText = `${
    student.startOfStudies
  }-${educationEndDate.getFullYear()} (${educationStatus} курс)`;

  studentRow.append(
    studentCellFIO,
    studentCellfaculty,
    studentCelldateOfBirth,
    studentCellStartOfStudies
  );

  return studentRow;
}

// отрисовка тела таблицы студентов
function renderTableBody(array, formFilter) {
  const tbody = document.querySelector("tbody"); // получим наш tbody

  tbody.innerHTML = ""; // очищаем все содержимое таблицы

  let copyArray = [...array]; // создаем копию массива

  // запишем свойство FIO для более удобной работы с копией
  for (const student of copyArray) {
    student.FIO = `${student.name} ${student.surname} ${student.lastname}`;
    student.endOfStudies = student.startOfStudies + 4;
  }

  // сортируем
  copyArray = copyArray.sort((a, b) => {
    if (currentSort == "dateOfBirth") {
      return a[currentSort] < b[currentSort] ? 1 : -1;
    } else {
      return a[currentSort] > b[currentSort] ? 1 : -1;
    }
  });

  // фильтруем
  if (formFilter) {
    if (formFilter.formFilterInpFIO.value.trim() !== "") {
      copyArray = copyArray.filter((student) => {
        if (
          student.FIO.toLowerCase().includes(
            formFilter.formFilterInpFIO.value.trim().toLowerCase()
          )
        ) {
          return true;
        }
      });
    }

    if (formFilter.formFilterInpFaculty.value.trim() !== "") {
      copyArray = copyArray.filter((student) => {
        if (
          student.faculty
            .toLowerCase()
            .includes(
              formFilter.formFilterInpFaculty.value.trim().toLowerCase()
            )
        ) {
          return true;
        }
      });
    }

    if (formFilter.formFilterInpStartOfStudies.value.trim() !== "") {
      copyArray = copyArray.filter((student) => {
        if (
          String(student.startOfStudies).includes(
            formFilter.formFilterInpStartOfStudies.value.trim()
          )
        ) {
          return true;
        }
      });
    }

    if (formFilter.formFilterInpEndOfStudies.value.trim() !== "") {
      copyArray = copyArray.filter((student) => {
        if (
          String(student.endOfStudies).includes(
            formFilter.formFilterInpEndOfStudies.value.trim()
          )
        ) {
          return true;
        }
      });
    }
  }

  // отрисовываем строки с информацией
  for (const student of copyArray) {
    tbody.append(createStudentRow(student));
  }
}

// валидация формы
function formValidation(
  formInpName,
  formInpSurname,
  formInpLastname,
  formInpDateOfBirth,
  formInpstartOfStudies,
  formInpFaculty,
  inputErrorMessage
) {
  let result = false;

  if (
    formInpName.value.trim() != "" &&
    formInpSurname.value.trim() != "" &&
    formInpLastname.value.trim() != "" &&
    formInpstartOfStudies.value.trim() != "" &&
    formInpFaculty.value.trim() != ""
  ) {
    if (formInpName.value.length >= 2 && formInpName.value.length < 17) {
      if (
        formInpSurname.value.length >= 2 &&
        formInpSurname.value.length < 17
      ) {
        if (
          formInpLastname.value.length >= 2 &&
          formInpLastname.value.length < 17
        ) {
          if (
            formInpDateOfBirth.valueAsDate != null &&
            formInpDateOfBirth.valueAsDate >= new Date("1900-01-01") &&
            formInpDateOfBirth.valueAsDate <= new Date()
          ) {
            if (
              formInpstartOfStudies.value >= 2000 &&
              formInpstartOfStudies.value <= new Date().getFullYear()
            ) {
              result = true; // если проверки пройдены, result = true
            } else if (formInpstartOfStudies.value < 2000) {
              inputErrorMessage.innerHTML =
                "Дата начала обучение не может быть раньше 2000-го года!";
            } else if (formInpstartOfStudies.value > new Date().getFullYear()) {
              inputErrorMessage.innerHTML =
                "Дата начала обучение не может быть позднее текущего года!";
            }
          } else if (formInpDateOfBirth.valueAsDate > new Date()) {
            inputErrorMessage.innerHTML =
              "Ошибка! Укажите дату рождения не позднее текущей даты!";
          } else if (formInpDateOfBirth.valueAsDate < new Date("1900-01-01")) {
            inputErrorMessage.innerHTML =
              "Ошибка! Укажите дату рождения не ранее 01.01.1900";
          } else {
            inputErrorMessage.innerHTML =
              "Ошибка! Укажите корректную дату рождения!";
          }
        } else if (formInpLastname.value.length > 17) {
          inputErrorMessage.innerHTML = "Ошибка! Отчество слишком длинное!";
        } else {
          inputErrorMessage.innerHTML = "Ошибка! Отчество слишком короткое!";
        }
      } else if (formInpSurname.value.length > 17) {
        inputErrorMessage.innerHTML = "Ошибка! Фимилия слишком длинная!";
      } else {
        inputErrorMessage.innerHTML = "Ошибка! Фимилия слишком короткая!";
      }
    } else if (formInpName.value.length > 17) {
      inputErrorMessage.innerHTML = "Ошибка! Имя слишком длинное!";
    } else {
      inputErrorMessage.innerHTML = "Ошибка! Имя слишком короткое!";
    }
  } else {
    inputErrorMessage.innerHTML =
      "Ошибка! Пожалуйста, заполните все поля отмеченные звездочкой (*)";
  }

  return result;
}

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app"); // тег app
  const formGroup = document.createElement("div"); // обёртка для форм
  formGroup.style.display = "flex";

  const appForm = createForm(); // форма
  const appFormFilter = createFormFilter(); // форма с фильтрами

  const appTable = createTable(); // таблица

  formGroup.append(appForm.form, appFormFilter.formFilter);
  app.append(formGroup, appTable.table); // добавим форму и таблицу

  renderTableBody(studentsList); // вызываем функцию отрисовки tableBody

  // отправка формы
  appForm.form.addEventListener("submit", (event) => {
    event.preventDefault(); // хз че это

    // если валидация пройдена (в функцию formValidation передаем поля ввода)
    if (
      formValidation(
        appForm.formInpName,
        appForm.formInpSurname,
        appForm.formInpLastname,
        appForm.formInpDateOfBirth,
        appForm.formInpStartOfStudies,
        appForm.formInpFaculty,
        appForm.inputErrorMessage
      )
    ) {
      // тест
      console.log("Validation Passed!");

      // убираем сообщение об ошибке
      appForm.inputErrorMessage.textContent = "";

      // добавляем в массив нового студента
      studentsList.push({
        name: appForm.formInpName.value.trim(),
        surname: appForm.formInpSurname.value.trim(),
        lastname: appForm.formInpLastname.value.trim(),
        dateOfBirth: appForm.formInpDateOfBirth.valueAsDate,
        startOfStudies: appForm.formInpStartOfStudies.value.trim(),
        faculty: appForm.formInpFaculty.value.trim(),
      });

      // очищаем поля ввода
      for (const input of appForm.formInputWrapper.querySelectorAll("input")) {
        input.value = "";
      }

      // очищаем поля ввода фильтров
      for (const input of appFormFilter.formFilter.querySelectorAll("input")) {
        input.value = "";
      }

      // проверям были ли сортировки
      renderTableBody(studentsList); // вызываем функцию отрисовки tableBody
    }
  });

  appFormFilter.formFilter.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  // обработка событий на колонках для сортировки
  appTable.tableHeadCellFIO.addEventListener("click", () => {
    currentSort = "FIO";
    renderTableBody(studentsList, appFormFilter);
  });

  appTable.tableHeadCellFaculty.addEventListener("click", () => {
    currentSort = "faculty";
    renderTableBody(studentsList, appFormFilter);
  });

  appTable.tableHeadCellDateOfBirth.addEventListener("click", () => {
    currentSort = "dateOfBirth";
    renderTableBody(studentsList, appFormFilter);
  });

  appTable.tableHeadCellYearOfStudy.addEventListener("click", () => {
    currentSort = "startOfStudies";
    renderTableBody(studentsList, appFormFilter);
  });

  // обработка событий для фильтров
  appFormFilter.formFilterInpFIO.addEventListener("input", () => {
    renderTableBody(studentsList, appFormFilter);
  });

  appFormFilter.formFilterInpFaculty.addEventListener("input", () => {
    renderTableBody(studentsList, appFormFilter);
  });

  appFormFilter.formFilterInpStartOfStudies.addEventListener("input", () => {
    renderTableBody(studentsList, appFormFilter);
  });

  appFormFilter.formFilterInpEndOfStudies.addEventListener("input", () => {
    renderTableBody(studentsList, appFormFilter);
  });
});
