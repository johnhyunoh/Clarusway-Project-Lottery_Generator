let num = document.getElementById('num');
let button = document.getElementById('getNumbers');
let ticket = document.getElementById("result");


button.addEventListener('click', function () {
    // Default empty field + array for ticket
    ticket.innerHTML = "";
    var numbers = [];

    // Use a nested for loop to generate the tickets and append to array
    for (let i = 0; i < num.value; i++) {
        for (var j = 0; numbers.length < 6; j++) {
        let number = Math.floor(Math.random() * 90) + 1;
        if(numbers.indexOf(number) === -1) {
            numbers.push(number);
        }
    }

    // Use sort function to order array
let sorted = numbers.sort((a,b) => a - b)

for (var k = 0; numbers.length < 7; k++) {
    let number = Math.floor(Math.random() * 90) + 1;
    if(numbers.indexOf(number) === -1) {
      numbers.push(number);
    }
  }
  numbers.push(Math.trunc(Math.random() * 90) + 1);

  // Update innerHTML of result p
  ticket.innerHTML += sorted[0]+ '-' + sorted[1]+ '-' + sorted[2]+ '-' + sorted[3]+ '-' + sorted[4]+ '-' + sorted[5]+ ' |     ' + numbers[6]+ '   |   ' + numbers[7] + '<br>';
  ticket.innerHTML += '<hr>';
numbers = []  
    }
});