function fizzBuzz (number)
{
    var fizz = number % 3 == 0;
    var buzz = number % 5 == 0;

    if(fizz && buzz){return "fizz buzz";}
    if(fizz){return "fizz";}
    if(buzz){return "buzz";}

    return number;
}