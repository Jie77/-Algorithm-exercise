function bigSum(num1,num2){
	let	c = null,
		res = ''
	num1 = num1.split('')
	num2 = num2.split('')
	while(num1.length>0 || num2.length>0 || c){
		c += ~~num1.pop() + ~~num2.pop()
		res = c%10 + res
		c = c>9 ? 1: 0
	}
	return res
}
console.log(bigSum('492','615'))

function bigMulti(num1,num2){
	let num1_arr = num1.split('').reverse(),
		num2_arr = num2.split('').reverse(),
		c = 0,
		res = '',
		res_arr = []
	for(let i=0;i<num2_arr.length;i++){
		c = 0 
		res = ''
		for(let j=0;j<num1_arr.length;j++){
			c = ~~num2_arr[i] * ~~num1_arr[j] + c
			res = c%10 + res
			c = Math.floor(c/10)
		}
		res_arr.push(res)
	}
	let temp = '',
		zero_num = ''
	for(let i=0;i<res_arr.length;i++){
		temp = bigSum(temp,res_arr[i]+zero_num)
		zero_num += '0'
	}
	return temp
}

console.log(bigMulti('12363873912739829','4523279812739823'))