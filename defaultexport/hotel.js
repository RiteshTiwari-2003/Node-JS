export default paidWater="minaral water bottle"
export const freeWater="regular water"
/**so issue is not default export while export default and in which variable where i use default we can not use const 
 * but again show error so waht is solution basically first you in above ine define or decalre varible then export default it 
 * 
 * like 
 * const paidWater="minaral water bottle"
 * export default paidWater
 * export const freeWater="regular water"
 * 
 * now in main.js if we write like this 
 * impoet water form "./hotel.js"
 * console.log(water) // then here default variable value print from hotel.js
 **/