var countdown = function(end, elements, callback){
	var _second = 1000,
	_minutes = _second*60,
	_hours = _minutes*60,
	_days = _hours*24,
	
	end = new Date(end),
	timer,
	
	calculate = function(){
		var now = new Date(),
		remaining = end.getTime() - now.getTime(),
		data;
		if(isNaN(end)){
			console.log('Invalid date/time');
			return
		};
		
		if(remaining <= 0){
			clearInterval(timer);
			if(typeos(callback) === 'function'){
				callback();
			};
		}else{
			if(!timer){
				timer = setInterval(calculate,_second);
			};
		}
		data = {
			'days':Math.floor(remaining/_days),
			'hours':Math.floor((remaining % _days)/_hours),
			'minutes':Math.floor((remaining % _hours)/_minutes),
			'seconds':Math.floor((remaining % _minutes)/_second)	
		}
		if(elements.length){
			for(x in elements){
				var x = elements[x];
				data[x] = ('00' + data[x]).slice(-2);
				document.getElementById(x).innerHTML = data[x];
			}
		};
	}
	calculate();
}