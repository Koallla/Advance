'use strict';

// function expresion

const userList = ['admin', 'manager', 'employe'];

const isUserPresent = function(user, listOfUser) {
  return listOfUser.incluses(user);
};

console.log(isUserPresent('manager', userList));
