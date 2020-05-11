let myNum = "#";
for (let num = 1; num <= 7; num++) {
  while (myNum.length <= num) {
    console.log(myNum);
    myNum += "#";
  }
}

/* OUTPUT

#
##
###
####
#####
######
#######

*/
