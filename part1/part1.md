1. i gets logged because it is a var and its scope is global.
2. We logged the last discountedPrice because var ignores the block scope.
3. The last value of finalprice in the for loop executes and is logged.
4. [50,100,150] because we iterate through the [100,200,300] and apply a 50% discount to each value.
5. Reference error because i is out of scope.
6. Reference error becuase discountedPrice is out of scope.
7. Logs the expected value, the last value of finalprice that the for loop executes.
8. [50,100,150] because we iterate through the [100,200,300] and apply a 50% discount to each value.
9. Reference errore because i is out of scope.
10. It is out of scope because we are creating the variable each time and it is no longer found when trying to log it.
11. Error because we are attempting to reasigning the value of finalPrice but it is const so we arent allowed to change its value.
12. The function wont return anything since we have an error where we try to reassing a const variable.
13. 
    a. student.name
    b. student["Grad Year"]
    c. student.greeting()
    d. student['Favorite Teacher'].name
    e. student.courseLoad[0]

14. 
    a. '32' because we are trying to add a string with an int so we end up concatenating them
    b. 1 because you cant subtract strings so we treat '3' as an int and subtract 2 from it
    c. 3 because we treat null as 0
    d. 3null because '3' is a string and we are concatenating null to it
    e. 4 because true is technically 1
    f. 0 because both false and null are 0
    g. 3undefined because '3' is a string so we concatenate undefined to it
    h. Nan becuase we cant subtract undefined from the string '3'

15. 
    a. true because we treat '2' as an integer and its greater than 1
    b. false because we compare in lexicographical order and '2' does not come before '1'
    c. true because we treat '2' as an integer and it is equal to 2
    d. false because === is strictly equality operator that doesnt convert types so '2' is treated as string and not converted to integer
    e. false because true does not equal to 2 as it is converted to 1
    f. true because calling Boolean on 2 converts this to true which is strictly equal to true

16. == allows for type conversion where as === does not do type conversion and it is a more stricty equality checker
17. logs 'How are you?' since 2 gets type converted to true

18. The result should be [6,8,10] since we call modifyArray([1,2,3],doSomething) we loop through every number in the array, we call doSomething on the number in the array for example 1, do something calls function passing in the number 1 + 2 which is function(3) that then returns the number multiplied by 2, so 6 that gets pushed onto the new array that is later returned.

19. 
    1 
    4 
    3 
    2
