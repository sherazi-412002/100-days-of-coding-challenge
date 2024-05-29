"use strict";
function differentHobbies(...hobby) {
    hobby.forEach(hobby => {
        console.log(`I Enjoy ${hobby}!`);
    });
}
differentHobbies("Playing", "Reading", "Codding");
