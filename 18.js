function groupSeats(arr, n) 
{
    var count = 0;
    for (var i = 0; i < arr.length; i++)
    {
        for (var j = 0; j < arr[i].length; j++)
        {
            var num = 0;
            if (arr[i][j] == 0)
            {
                var index = j;
                while (index < arr[i].length && arr[i][index] == 0)
                {
                    num++;
                    index++;
                }
            }
            if (num >= n) count++;
        }
    }
    console.log(count);
}
groupSeats([
           [1,0,1,1,0,1,0],
           [0,1,0,1,1,1,1],
           [1,0,1,1,1,1,0],
           [1,1,1,1,1,1,1]
         ], 2);