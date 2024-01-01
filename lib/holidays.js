function updateHolidayMessage(){
	const holidays = [
		{date: '0101', event: 'newyear', message: '&#127878; Happy new year! &#127878;'},
		{date: '0214', event: 'valentines', message: '&#10084; Happy valentines! &#10084;'},
		{date: '0412', event: 'birthday', message: '&#127881; Happy birthday, Tribes! &#127881;'},
		{date: '12**', event: 'christmas', message: '&#10052; Happy holidays! &#10052;'}
	];

	let current_date = new Date();
	let current_month = (current_date.getMonth() + 1).toString();
	current_month = current_month.padStart(2, '0');
	let current_day = current_date.getDate().toString();
	current_day = current_day.padStart(2, '0');

	holidays.forEach((holiday) => {
		if(
			(holiday.date.substring(0,2) == current_month || holiday.date.substring(0,2) == '**') &&
			(holiday.date.substring(2,4) == current_day || holiday.date.substring(2,4) == '**')
		){
			document.getElementById('landing_title').classList.add('holiday_' + holiday.event);
			document.getElementById('landing_subtitle').innerHTML = holiday.message;
		}
	});
}
updateHolidayMessage();
