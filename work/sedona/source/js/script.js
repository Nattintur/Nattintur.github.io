(function(){
	var _max_days_value = 31;
	var _max_person_value = 5;

	//Поиск элементов для блока "Дни пребывания"
	var info_trvl_btn_minus = document.querySelector(".info-travel .quantity__button--left");
	var info_trvl_btn_plus = document.querySelector(".info-travel .quantity__button--right");
	var info_trvl_input = document.querySelector(".info-travel .quantity__input input[type='text']");

	//Поиск элементов для блока "Количество путешественников"
	var number_person_btn_minus = document.querySelector(".number-person .quantity__button--left");
	var number_person_btn_plus = document.querySelector(".number-person .quantity__button--right");
	var number_person_input = document.querySelector(".number-person .quantity__input input[type='text']");

	info_trvl_btn_minus.addEventListener('click', function(event){
		// Отменяем обработку по умолчанию
		event.preventDefault();

		decrement(info_trvl_input);
	}, false);

	info_trvl_btn_plus.addEventListener('click', function(event){
		// Отменяем обработку по умолчанию
		event.preventDefault();

		increment(info_trvl_input, _max_days_value);
	}, false);

	//Событие input срабатывает сразу при изменении значения текстового элемента
	//IE8+
	info_trvl_input.addEventListener('input',function(event){
		
		filter(info_trvl_input, _max_days_value);
	}, false);


	number_person_btn_minus.addEventListener('click', function(event){
		// Отменяем обработку по умолчанию
		event.preventDefault();

		decrement(number_person_input);

		var elements = document.querySelectorAll(".data-travel__wrap .data-travel__item-person");
		//var countElements = parseInt(elements.length) + 1;

		var countElements = parseInt(number_person_input.value) + 1;
		if(parseInt(elements.length)>0){
			removeChild(countElements);
		}

	}, false);


	number_person_btn_plus.addEventListener('click', function(event){
		// Отменяем обработку по умолчанию
		event.preventDefault();

		increment(number_person_input, _max_person_value);

        //var countElements = parseInt(elements.length) + 1;
        var countElements = parseInt(number_person_input.value);
        var elements = document.querySelectorAll(".data-travel__wrap .data-travel__item-person");

        if(parseInt(elements.length) < _max_person_value){
        	addChild(countElements);  
        }
        
      }, false);


	//Событие input срабатывает сразу при изменении значения текстового элемента
	//IE8+
	number_person_input.addEventListener('input',function(event){
		
		filter(number_person_input, _max_person_value);

	}, false);

	function decrement(input){
		// Значение поля ввода
		var value = parseInt(input.value);

		// Если в поле введен текст или неположительное число,
		if(isNaN(value) || value <= 0){
			//  то в поле ввода устанавливаем "0"
			input.value = 0;
		} else {
			//  иначе уменьшаем значение поля ввода на 1.
			input.value = value - 1;
		}
	}

	function increment(input, max_value){
		// Значение поля ввода
		var value = parseInt(input.value);

		// Если в поле введен текст, то устанавливаем значение "0"
		if(isNaN(value)){
			input.value = 0;
		} else {
			//иначе, если значение больше ограничения, то устанавливаем 
			//максимальное значение ввода 
			if(value >= max_value){
				input.value = max_value;
			} else {
				//иначе увеличиваем значение ввода на 1.
				input.value = value + 1;
			}
		}
	}

	function filter(input, max_value){
		var value = parseInt(input.value);

		if(isNaN(value) || value<=0){
			input.value = 0;
		} else {
			if(value>max_value){
				input.value = max_value;
			}
			else{
				input.value = value;
			}
		}
	}


    // Добавление элемнта в DOM-дерево
    function addChild(number){
        
        /* Создаем родительский элемент <div class="data-travel__last-name"> */
        var parentLastName = document.createElement("div");
        parentLastName.className = "data-travel__last-name";

	        // Создаем дочерний элемент label для фамилии
	        var newElemLastNameLabel = document.createElement("label");
	        newElemLastNameLabel.htmlFor = "last-name__person" + number;
	        newElemLastNameLabel.innerText = "Фамилия:";

	        // Создаем дочерний элемент input для фамилии
	        var newElemLastNameInput = document.createElement("input");
	        newElemLastNameInput.type = "text";
	        newElemLastNameInput.name = "last-name";
	        newElemLastNameInput.id = "last-name__person" + number;
	        newElemLastNameInput.value = "Иванов";

	        // Добавляем дочерние элементы label и input в родительский div
	        parentLastName.appendChild(newElemLastNameLabel);
	        parentLastName.appendChild(newElemLastNameInput);

        /* Создаем родительский элемент <div class="data-travel__first-name"> */
        var parentFirstName = document.createElement("div");
        parentFirstName.className = "data-travel__first-name";

	        // Создаем дочерний элемент label для имени
	        var newElemFirstNameLabel = document.createElement("label");
	        newElemFirstNameLabel.htmlFor = "first-name__person" + number;
	        newElemFirstNameLabel.innerText = "Имя:";

	        // Создаем дочерний элемент input для имени
	        var newElemFirstNameInput = document.createElement("input");
	        newElemFirstNameInput.type = "text";
	        newElemFirstNameInput.name = "first-name";
	        newElemFirstNameInput.id = "first-name__person" + number;
	        newElemFirstNameInput.value = "Пётр";

	        // Добавляем дочерние элементы label и input в родительский div
	        parentFirstName.appendChild(newElemFirstNameLabel);
	        parentFirstName.appendChild(newElemFirstNameInput);


	      /* Создаем родительский элемент <div class="data-travel__patronymic">*/
	      var parentPatronymic = document.createElement("div");
	      parentPatronymic.className = "data-travel__patronymic";

	      	// Создаем дочерний элемент label для отчества
	      	var newElemPatronymicLabel = document.createElement("label");
	      	newElemPatronymicLabel.htmlFor = "patronymic__person" + number;
	        newElemPatronymicLabel.innerText = "Отчество:";

	        // Создаем дочерний элемент input для имени
	        var newElemPatronymicInput = document.createElement("input");
	        newElemPatronymicInput.type = "text";
	        newElemPatronymicInput.name = "patronymic";
	        newElemPatronymicInput.id = "patronymic__person" + number;
	        newElemPatronymicInput.value = "Александрович";

	        // Добавляем дочерние элементы label и input в родительский div
	        parentPatronymic.appendChild(newElemPatronymicLabel);
	        parentPatronymic.appendChild(newElemPatronymicInput);

	      /* Создаем родительский элемент <div class="data-travel__person-name">*/
	      var parentPersonName = document.createElement("div");
	      parentPersonName.className = "data-travel__person-name"

	      	// Добавляем в div.data-travel__person-name дочерние элементы
	      	// div.data-travel__last-name, div.data-travel__first-name, div.data-travel__patronymic
	      	parentPersonName.appendChild(parentLastName);
	      	parentPersonName.appendChild(parentFirstName);
	      	parentPersonName.appendChild(parentPatronymic);

	      /* Создаем родительский элемент <div class="data-travel__number">*/
	      var parentNumber = document.createElement("div");
	      parentNumber.className = "data-travel__number";

	      	// Создаем дочерний элемент label для номера
	      	var newElemNumberLabel = document.createElement("label");
	      	newElemNumberLabel.htmlFor = "number-travel" + number;
	        newElemNumberLabel.innerText = "№";

	        // Создаем дочерний элемент div для номера
	        var newElemNumberDiv = document.createElement("input");
	        newElemNumberDiv.id = "number-travel" + number;
	        newElemNumberDiv.value = number;
			newElemNumberDiv.readonly = true;

	        // Добавляем в div.data-travel__number дочерние элементы label и div
	        parentNumber.appendChild(newElemNumberLabel);
	        parentNumber.appendChild(newElemNumberDiv);


        // Добавляем в div.data-travel__item-person дочерние элементы
        // div.data-travel__number, div.data-travel__person-name

        var parentItemPerson = document.createElement("div");
        parentItemPerson.className = "data-travel__item-person";
        parentItemPerson.appendChild(parentNumber);
        parentItemPerson.appendChild(parentPersonName);


        // Добавяляем в div.data-travel__wrap дочерний элемент div.data-travel__item-person

        // Поиск главного родительского элемента для нашего создаваемого блока
        var parentWrap = document.querySelector(".data-travel .data-travel__wrap");

        parentWrap.appendChild(parentItemPerson);
 
      }

      function removeChild(number){
      	var ElemItenPerson = document.querySelector(".data-travel__wrap .data-travel__item-person:nth-of-type(" + number + ")")
      	ElemItenPerson.remove();
      }

    })();