var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
		

		else if(operators.indexOf(btnVal) > -1) {

			var lastChar = inputVal[inputVal.length - 1];
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		
		else {
			input.innerHTML += btnVal;
		}
		
		e.preventDefault();
	} 
}

const num__Number = document.querySelectorAll('.num__number');
      num__box = document.querySelector('.num__box');



window.addEventListener('scroll', function stopNum() {
    console.log(pageYOffset); 
    if (pageYOffset >= (num__box.offsetTop - num__box.clientHeight * 3)) {
        num__Number.forEach((num)=>{
            let number = num.getAttribute('data-num')
            function numPlus(i = 0) {
                num.innerHTML = i
                i++
                if (i <= number) {
                    setTimeout(()=>{
                        numPlus(i)
                    },85)
                }
            }
            numPlus()
        })
        this.removeEventListener('scroll', stopNum)
    }
})

    


