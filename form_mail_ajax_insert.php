<?
    $DB_SERVER    = "localhost";
    $DB_USER_NAME = "saeeun";
    $DB_USER_PW   = "anvktk0037!!";
    $DB_NAME      = "saeeun";

    $conn = mysqli_connect($DB_SERVER, $DB_USER_NAME, $DB_USER_PW, $DB_NAME);
    mysqli_set_charset($conn, 'utf8');

    //AJAX 폼데이터 파라미터 => 변수
    $user_name      = $_POST['이름'];
    $user_email     = $_POST['이메일'];
    $user_message   = $_POST['메시지'];
    $user_date      = $_POST['날짜'];


    $sql = "INSERT INTO form_mail_table(user_name, user_email, user_message, user_date) 
            VALUES('$user_name', '$user_email', '$user_message', '$user_date')";
    $result = mysqli_query($conn, $sql);

    // 저장확인
    if($result == true){
        echo($user_name."님 데이터 저장 성공!");
    } else {
        echo($user_name."님 데이터 저장 실패, 다시 시도하세요.");
    }




?>