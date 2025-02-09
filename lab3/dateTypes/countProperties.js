function count(user){
    return Objects.keys(user).length;
}
let user = {
    name: 'John',
    age: 30
};
  
alert( count(user) );