
var string="";
var v=document.querySelectorAll(".key").length;

for(i=0;i<v;i++){
document.querySelectorAll(".key")[i].addEventListener('click', function(){
                      console.log(this.innerHTML);

          try{

        if(this.innerHTML==='='){
            string=eval(string);
            // checking whether the given value is null or not
            if(isNaN(string)){
                // then throw a error 
                throw new Error("INTPUT ERROR");
            }
            document.querySelector('input').value=string;
        }
        else if(this.innerHTML==='C'){
            string='';
            document.querySelector('input').value=string;
            return ;
        }

        else if(this.innerHTML==='x'||this.innerHTML==='X'){
            string=string.slice(0,-1);
            document.querySelector('input').value=string;

}                          
        else{

        
              string=string + this.innerHTML;
          document.querySelector('input').value=string;
        }
    }
    catch(error){
        string='Invalid';
        document.querySelector('input').value=string;
        setTimeout(function(){
            string="";
            document.querySelector('input').value=string;
          },1000);
    
    }



})
}
document.addEventListener("keydown",function(e){
             try{

                if(e.key==='='){
                    string=eval(string);
                    // checking whether the given value is null or not
                    if(isNaN(string)){
                        // then throw a error 
                        throw new Error("INTPUT ERROR");
                    }
                    document.querySelector('input').value=string;
                }
                else if(e.key==='C'||e.key=='c'){
                    string='';
                    document.querySelector('input').value=string;
                }
                else if(e.key==='x'||e.key==='X'){
                                    string=string.slice(0,-1);
                                    document.querySelector('input').value=string;

                }
               
                                            
                else{
        
                
                      string=string +e.key;
                  document.querySelector('input').value=string;
                }
            }
            catch(error){
                string='Invalid';
                document.querySelector('input').value=string;
                setTimeout(function(){
                    string="";
                    document.querySelector('input').value=string;
                  },1000);
            }

});




