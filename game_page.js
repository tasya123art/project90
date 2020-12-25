player1_name = localStorage.getItem("palyer1_name");
player2_name = localStorage.getItem("palyer2_name");

player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player1_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player1_question").innerHTML = "Question Turn -" + player1_name;
document.getElementById("player2_answer").innerHTML = "Answer Turn -" + player2_name;

function send ()
{
    get_word = document.getElementById("word").value;
    word = get_word.toLoweCase();
    console.log("word in LowerCase =" + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2)
    console.log(charAt2);

    length_minus_1 = word.length - 1;
    chartAt3 = word.chartAt(length_minus_1);
    console.log(charAt3);

    remove_chartAt1 = word.replace(chartAt1, "_");
    remove_chartAt12 = word.replace(chartAt2, "_");
    remove_chartAt3 = word.replace(chartAt3, "_");

    questionword = "<h4 id='word_display'>Q. "+remove_chartAt3+"</h4>";
    input_box = "<br>Answer " <input type = 'text' id ="input_check_box'>";
    check_button = "br>=<br>=button class= 'btn btn=info' onclick='check()'>Check</button>";
    row = question_word + inputbox + check_button;
    document.getElementById.getElementById("output").innerHTML = row;
    document.getElementById("word").value ="";
}
question_turn = "player1"
answer_turn = "player2"

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer_in_lower_case - "+ answer);

    if (answer == word)
    {
        
        if(answer_turn == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player_score").innerHTML = player2_score;
        }
        if(question_turn = "player1")
        {
            question_turn = "player2"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
        }
        else
        {
            question_turn = "player1"
            document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name

        if(answer_turn = "player2")
        {
            answer_turn = "player2"
            document.getElementById("player_answer").innerHTML = "Answer Turn - " - player2_name
        }
        else
        {
            answer_turn = "player1"
            document.getElementById("player_answer").innerHTML = "Answer Turn - " - player1_name   
        }
    }

    document.getElementById("output").innerHTML = "";
}