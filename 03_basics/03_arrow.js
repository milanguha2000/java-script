const user = {
    username : "milan",
    price : 999,
    welcomemessage : function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }
}
user.welcomemessage()       //output : milan , welcome to the website
user.username = "sam"
user.welcomemessage()       //output : sam , welcome to the website

/*
this indicates current content . line no 9 will print username : "milan" , but the 10 line we assign
username value is : "sam" . so now current content is "sam". so line no 11 print username : "sam" .
*/


//console.log(this);     //in this line output will be : {} , because there is no current content globally.
