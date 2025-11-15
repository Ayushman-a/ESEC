<?php
// Email Configuration
// Email recipients
define('RECIPIENT_EMAIL_1', 'sales@nibanasolutions.com');
define('RECIPIENT_EMAIL_2', 'narendar.reddy@nibanasolutions.com');

// Email sender (use your domain email for better deliverability)
define('SENDER_EMAIL', 'narendar.reddy@nibanasolutions.com');
define('SENDER_NAME', 'Nibana Solutions - ESEC');

define('RECAPTCHA_SECRET_KEY', '6LeWcA0sAAAAAN-DTkr8JGDKuJWFtn-00bZONBFx');
define('RECAPTCHA_SITE_KEY', '6LeWcA0sAAAAAN-DTkr8JGDKuJWFtn-00bZONBFx'); // REPLACE THIS with your actual site key
define('ENABLE_DB_SAVE', true); // Database saving is now enabled

$allowed_origins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://your-production-domain.com' // Replace with your actual domain
];

// Get the origin of the request
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

// Check if origin is allowed
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Function to sanitize input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Function to validate email
function validate_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Function to verify Google reCAPTCHA
function verify_recaptcha($recaptcha_response) {
    if (empty($recaptcha_response)) {
        return [
            'success' => false,
            'message' => 'Please complete the reCAPTCHA verification'
        ];
    }

    $secret_key = RECAPTCHA_SECRET_KEY;
    $ip = $_SERVER['REMOTE_ADDR'];

    // Verify with Google
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = [
        'secret' => $secret_key,
        'response' => $recaptcha_response,
        'remoteip' => $ip
    ];

    $options = [
        'http' => [
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        ]
    ];

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    $response_keys = json_decode($result, true);

    if ($response_keys['success']) {
        return ['success' => true];
    } else {
        return [
            'success' => false,
            'message' => 'reCAPTCHA verification failed. Please try again.'
        ];
    }
}

// Function to send email to multiple recipients
function send_email($subject, $message, $reply_to_email = '', $reply_to_name = '') {
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: " . SENDER_NAME . " <" . SENDER_EMAIL . ">" . "\r\n";

    if (!empty($reply_to_email) && validate_email($reply_to_email)) {
        $headers .= "Reply-To: " . $reply_to_name . " <" . $reply_to_email . ">" . "\r\n";
    }

    // Send to both recipients
    $recipients = RECIPIENT_EMAIL_1 . ',' . RECIPIENT_EMAIL_2;

    return mail($recipients, $subject, $message, $headers);
}

// Function to create HTML email template
function create_email_template($title, $content) {
    return "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
            .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 10px 10px 0 0;
            }
            .content {
                background: #f9f9f9;
                padding: 30px;
                border: 1px solid #ddd;
                border-radius: 0 0 10px 10px;
            }
            .field {
                margin-bottom: 15px;
                padding: 10px;
                background: white;
                border-radius: 5px;
                border-left: 4px solid #667eea;
            }
            .field-label {
                font-weight: bold;
                color: #667eea;
                display: block;
                margin-bottom: 5px;
            }
            .field-value {
                color: #333;
            }
            .footer {
                margin-top: 20px;
                text-align: center;
                color: #666;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div class='header'>
            <h2>" . $title . "</h2>
        </div>
        <div class='content'>
            " . $content . "
        </div>
        <div class='footer'>
            <p>This email was sent from Nibana Solutions - ESEC Website</p>
            <p>Received on " . date('F j, Y, g:i a') . "</p>
        </div>
    </body>
    </html>
    ";
}
?>
