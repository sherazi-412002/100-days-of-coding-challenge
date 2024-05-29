let studentProfile = (function () {
    let name = "shoaib";
    let idNumber = 1002;
    let fatherName = "Muzammil";
    return {
        displayInfo: function () {
            console.log(`Student "${name}" and Father Name "${fatherName}" with Id Number "${idNumber}"`);
        }
    };
})();
studentProfile.displayInfo();
export {};
