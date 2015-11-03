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
	}, false);


	number_person_btn_plus.addEventListener('click', function(event){
		// Отменяем обработку по умолчанию
		event.preventDefault();

		increment(number_person_input, _max_person_value);
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
})();