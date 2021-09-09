let arr=[],arrEmpty=[];

function select(){
    arr=$(".block").map(function(){
        return $(this).text();
    });
    emptyArr()
}

function emptyArr()
{
    arrEmpty=arr.map(function(index){
        if(arr[index]==' ')
        {
            return index;
        }
    });
}

function random()
{
    let num=arrEmpty[Math.floor(Math.random()*arrEmpty.length)];
    $("#block"+"-"+num).text("o"); 
    $("#block"+"-"+num).css("pointer-events","none");
    arr[num]='o';
    emptyArr();
}

function win()
{

    if(arr[0]==arr[1] && arr[1]===arr[2] && arr[1]!==' ')
    {
        winner(arr[1]);
    }
    else if(arr[3]==arr[4] && arr[4]===arr[5] && arr[3]!==' ')
    {
        winner(arr[3])
    }
    else if(arr[6]==arr[7] && arr[7]===arr[8] && arr[6]!==' ')
    {
        winner(arr[6])
    }
    //vertically
    else if(arr[0]==arr[3] && arr[3]===arr[6] && arr[6]!==' ')
    {
        winner(arr[6]);
    }
    else if(arr[1]==arr[4] && arr[4]===arr[7] && arr[1]!==' ')
    {
        winner(arr[1])
    }
    else if(arr[2]==arr[5] && arr[5]===arr[8] && arr[8]!==' ')
    {
        winner(arr[8])
    }
    //diagonally
    else if(arr[0]==arr[4] && arr[4]===arr[8] && arr[4]!==' ')
    {
        winner(arr[4])
    }
    else if(arr[2]==arr[4] && arr[4]===arr[6] && arr[2]!==' ')
    {
        winner(arr[2])
    }
    else if(arrEmpty.length==0)
    {
        tie()
    }

}

function winner(letter)
{
    $(".block").css("pointer-events","none");
    $("#heading").text("Winner "+letter);
    if(letter=='x')
    {
        $("body").css("background","#bcff6f81");
    }
    else
    {
        $("body").css("background","#ff161681");
    }
}

function tie()
{
    $(".block").css("pointer-events","none");
    $("#heading").text("Tie");
    $("body").css("background","#ffa754d0");
}

$(document).ready(
    function(){
        $(".block").click(
            function(){
                $(this).text("x");
                $(this).css("pointer-events","none");
                select();

                $.when(select()).done(function(){
                    $.when(random()).done(
                        win()
                    );
                });
            }
        );

        $("#reset").click(
            function(){
                arr=[];
                arrEmpty=[];
                $("#heading").text("tic-tac-toe");
                $(".block").each(function(){
                    $(this).text(' ')
                });
                $(".block").css("pointer-events","all");
                $("body").css("background","#f6b4ff86");
            }
        )
        
        
    }
);