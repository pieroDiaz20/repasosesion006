require("colors");
/**const {inquirerMenu}=require('./helpers/inquirer');



const main= async()=>
{
    console.log(inquirerMenu());
}
main(); 

 */
const persona=()=>
[
    {
        type:'',
        word:'',
        choices:
        [
            {
                name:'piero',
                apell:'dias',
            },
            {
                name:'alonso',
                apell:'curi',
            },
            {
                name:'yacomo',
                apell:'soprano',
            }
        ]
    }

]

console.log(persona().map(i=>i.choices))
//console.log(preguntas.map(i=>i.choices));


