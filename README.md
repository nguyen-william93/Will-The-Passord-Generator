# Password Generator Starter Code

This challenge is about using javascript to generate a random password base on the user specification.
1) the code will ask the user for a length of the password.
2) the user has multiple criteria to pick from (uppercase, lowercase, numeric and/or special character).
3) the code will generate a random password based on the user spefication.

The key for this code is the object user (to reset data after each generated password) and the passwordBank.
The code will obtain the user's desire for the length of the password. It will, then, create a passwordBank (include all the possible character base on the user's specification). Afterward, a random number function will obtain a random value base on the length of the passwordBank and that will be the index of character for the password generated. The generated password then get concat() and store into userChoice. 

The input that needed checking was the length. The code achieved this through check the lower and upper limit for the lenghth. It is, then, use typeof(NaN) and the strict equality operation to ensure that the user enter a number and not any other character.
The other input that needed checking was the speficiation. The user need to specified at least 1 type of criteria. The code does this by keeping a counter. For every non-wanted criteria, the counter increase by 1. As long as the counter is below 4 (there are 4 criterias), the user must have specified at least 1 critera and the code can generate a random password.

The user then can refresh the page, the code will reset the length, the password bank, the counter, and the generated password for another generated password.

link:
screenshot: ./Finish-Product.png

