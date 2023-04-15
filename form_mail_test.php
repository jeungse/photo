<?
    $DB_SERVER    = "localhost";
    $DB_USER_NAME = "saeeun";
    $DB_USER_PW   = "anvktk0037!!";
    $DB_NAME      = "saeeun";

    // 데이터베이스 mysql 접속(Connection) 함수(method) => mysqli_connect();
    $conn = mysqli_connect($DB_SERVER, $DB_USER_NAME, $DB_USER_PW, $DB_NAME);
    mysqli_set_charset($conn, 'utf8');

    if($conn == true){
        echo("데이터베이스 접속을 축하드립니다.");
    } else {
        echo("데이터베이스 접속 실패, 다시 시도해주세요.");
    }
?>