(function(){

	var menu_open = document.querySelector(".logo .menu-open");
	var menu_close = document.querySelector(".navigation .menu-close");
	var navigation = document.querySelector(".navigation");

	menu_open.addEventListener('click', function(event){
		// Отменяем обработку по умолчанию
		event.preventDefault();
		
		// Если элемент скрыт, то отображаем его, иначе - скрываем
		navigation.classList.toggle('navigation-show');

	}, false);

	menu_close.addEventListener('click', function(event){
		// Отменяем обработку по умолчанию
		event.preventDefault();
		
		// Если элемент скрыт, то отображаем его, иначе - скрываем
		navigation.classList.remove('navigation-show');

	}, false);

})();