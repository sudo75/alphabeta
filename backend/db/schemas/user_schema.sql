CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(32),
    `password` VARCHAR(32),

    session_token VARCHAR(255),
    session_timestamp DATETIME
)