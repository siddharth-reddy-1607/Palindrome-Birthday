inputDate=document.querySelector("#birth-date");
checkButton=document.querySelector("#check");
output=document.querySelector("#output");

checkButton.addEventListener("click",clickHandler)


function clickHandler()
{
    output.innerText="Checking...";
    if(inputDate.value)
    {
      setTimeout(outputDisplay,2000);
    }
    else
    {
      output.innerText="Please select a date"
    }
    
    
}
function outputDisplay()
{
  dob=inputDate.value.split("-");
    dateOfBirth={
        date:dob[2],
        month:dob[1],
        year:dob[0]
    }
    
      if(checkPalindrome(dateArray(dateOfBirth)))
      {
        output.innerText="Yaay!Your Brithday is a palindrome🥳🥳🥳"
      }
      else
      {
          text="Unlucky!Your Birthday is not a palindrome😢"+prevPalindromeDate(dateOfBirth)+" ";
          dateOfBirth={
            date:dob[2],
            month:dob[1],
            year:dob[0]
        }
        text=text+nextPalindromeDate(dateOfBirth);
        output.innerText=text;

      }
    }
  

function dateArray(dat)
{
    var arr=[1,2,3,4,5,6];
    arr[0]=dat.date+dat.month+dat.year;
    arr[1]=dat.month+dat.date+dat.year;
    arr[2]=dat.year+dat.month+dat.date;
    var yr=dat.year.split('');
    var year=(yr.slice(2,4)).join('');
    arr[3]=dat.date+dat.month+year;
    arr[4]=dat.month+dat.date+year; 
    arr[5]=year+dat.month+dat.date;
    return arr
}

function rev(str)
{
    var list=str.split("");
    var rev_list=list.reverse();
    var rev_str=rev_list.join('')
    return rev_str;
}

function checkPalindrome(array)
{
   var flag=false;
   for(i=0;i<array.length;i++)
    {
        rev_str=rev(array[i]);
        if(array[i] === rev_str)
        {
            flag=true;
            break;
        }
        else
        {
        }
  }
    return flag;
} 

function nextDay(dat)
  {
    date=Number(dat.date)+1;
    month=Number(dat.month);
    year=Number(dat.year);
    var numOfDaysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];
    if(year%4 === 0)
    {
      numOfDaysInMonth[1]=29; //Leap Year
    }
    if(date>numOfDaysInMonth[month-1])
    {
      date=1;
      month++;
    }
    if(month>12)
    {
      month=1;
      year++
    }
    dat.date=date;
    dat.month=month;
    dat.year=year;
    return dat;
  }

function nextPalindromeDate(dat)
  {
    flag=true
    var i=0;
    var add="s";
    while(flag)
      {
      palindromeDate=nextDay(dat);
      if(checkPalindrome(dateArray(datetoString(palindromeDate))))
      {
        flag=false;
      }
        i++;
      }
      if(i === 1)
      {
        add="";
      }
      nextText="and the next Palindromic date is "+palindromeDate.date+"-"+palindromeDate.month+"-"+palindromeDate.year+", you missed it by "+i+" day"+add;
    return nextText;
  }

function prevDate(dat)
{
  date=Number(dat.date)-1;
  month=Number(dat.month);
  year=Number(dat.year);
  var numOfDaysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];

  if(month === 3)
  {
    if(Number(dat.year)%4 === 0)
    {
    numOfDaysInMonth[1]=29;
    }
  }

  if(date<1)
  {
    var i=0;
    if(month === 1)
    {
      i=12;
    }
    date=numOfDaysInMonth[month-2+i];
    month--;
  }

  if(month < 1)
  {
    month=12;
    year--;
  }
  dat.date=date;
  dat.month=month;
  dat.year=year;
  return dat;
} 
function prevPalindromeDate(dat)
 {
   flag=true;
   var i=0;
   var add="s";
   while(flag)
   {
    palindromeDate=prevDate(dat);
     if(checkPalindrome(dateArray(datetoString(palindromeDate))))
     {
       flag=false;
     }
     i++;
   }
   if(i === 1)
   {
     add="";
   }
   prevText="The previous Palindromic date was "+palindromeDate.date+"-"+palindromeDate.month+"-"+palindromeDate.year+", you missed it by "+i+" day"+add;
   return prevText;
 } 

  function datetoString(dat)
  {
    if(dat.date < 10)
    {
      dat.date="0"+dat.date;
    }
    else
    {
     dat.date=dat.date.toString();
    }

    if(dat.month < 10)
    {
      dat.month="0"+dat.month;
    }
    else
    {
     dat.month=dat.month.toString();
    }
    dat.year=dat.year.toString();
    return dat
  }