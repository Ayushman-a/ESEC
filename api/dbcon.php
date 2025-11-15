<?php
// Database Configuration
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'xpqhtmvi_wecare');
define('DB_PASSWORD', '@mv844PzrSv1');
define('DB_NAME', 'xpqhtmvi_wecare');

// Function to open database connection
function OpenCon() {
    $conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

    // Check connection
    if ($conn->connect_error) {
        error_log("Database connection failed: " . $conn->connect_error);
        die(json_encode([
            'success' => false,
            'message' => 'Database connection failed. Please try again later.'
        ]));
    }

    // Set charset to utf8mb4 for better character support
    $conn->set_charset("utf8mb4");

    return $conn;
}

// Function to close database connection
function CloseCon($conn) {
    if ($conn) {
        $conn->close();
    }
}

// Function to execute prepared statement safely
function executePreparedStatement($conn, $sql, $types, $params) {
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        error_log("Prepare failed: " . $conn->error);
        return false;
    }

    if (!empty($params)) {
        $stmt->bind_param($types, ...$params);
    }

    $result = $stmt->execute();

    if (!$result) {
        error_log("Execute failed: " . $stmt->error);
    }

    $stmt->close();
    return $result;
}
?>
