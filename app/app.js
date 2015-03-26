var App = function(){

    this.add = function(str){

       if(str === ''){
           return 0
       }else{

           var delim;
           if(str[0] === '/' && str[1] === '/'){
               delim = str[2];
               str = str.substring(4);
           }else{
               delim = new RegExp('[,|\n]')
           }

           var numbers = str.split(delim);
           var total = 0;
           var error = 'is not a valid number';

           for(var i = 0; i<numbers.length; i++){
               if(Number(numbers[i]) < 0){
                   error = numbers[i]+', ' + error;
               }else{
                   total += Number(numbers[i]);
               }
           }

           if(error != 'is not a valid number'){
               throw new Error(error);
           }

           return total;
       }



    };

};