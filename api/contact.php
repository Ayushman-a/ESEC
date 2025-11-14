<?php
require_once 'config.php';

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get JSON data from request body
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate required fields
$required_fields = [
    'companyName',
    'contactPerson',
    'department',
    'designation',
    'email',
    'phone',
    'city',
    'country',
    'keySoftware',
    'totalSoftware',
    'totalUsers',
    'demoDates',
    'requestType'
];

foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Missing required field: $field"]);
        exit();
    }
}

// Validate email
if (!validate_email($data['email'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit();
}

// Sanitize inputs
$companyName = sanitize_input($data['companyName']);
$contactPerson = sanitize_input($data['contactPerson']);
$department = sanitize_input($data['department']);
$designation = sanitize_input($data['designation']);
$email = sanitize_input($data['email']);
$phone = sanitize_input($data['phone']);
$city = sanitize_input($data['city']);
$country = sanitize_input($data['country']);
$website = !empty($data['website']) ? sanitize_input($data['website']) : 'Not provided';
$keySoftware = sanitize_input($data['keySoftware']);
$totalSoftware = sanitize_input($data['totalSoftware']);
$totalUsers = sanitize_input($data['totalUsers']);
$demoDates = sanitize_input($data['demoDates']);
$requestType = sanitize_input($data['requestType']);

// Create email content
$email_content = "
    <div class='field'>
        <span class='field-label'>Request Type:</span>
        <span class='field-value'>" . $requestType . "</span>
    </div>

    <h3 style='color: #667eea; margin-top: 25px;'>Company Information</h3>

    <div class='field'>
        <span class='field-label'>Company Name:</span>
        <span class='field-value'>" . $companyName . "</span>
    </div>

    <div class='field'>
        <span class='field-label'>Contact Person:</span>
        <span class='field-value'>" . $contactPerson . "</span>
    </div>

    <div class='field'>
        <span class='field-label'>Department/Division:</span>
        <span class='field-value'>" . $department . "</span>
    </div>

    <div class='field'>
        <span class='field-label'>Designation:</span>
        <span class='field-value'>" . $designation . "</span>
    </div>

    <div class='field'>
        <span class='field-label'>Email:</span>
        <span class='field-value'><a href='mailto:" . $email . "'>" . $email . "</a></span>
    </div>

    <div class='field'>
        <span class='field-label'>Phone:</span>
        <span class='field-value'><a href='tel:" . $phone . "'>" . $phone . "</a></span>
    </div>

    <div class='field'>
        <span class='field-label'>Location:</span>
        <span class='field-value'>" . $city . ", " . $country . "</span>
    </div>

    <div class='field'>
        <span class='field-label'>Website:</span>
        <span class='field-value'>" . $website . "</span>
    </div>

    <h3 style='color: #667eea; margin-top: 25px;'>Software & User Details</h3>

    <div class='field'>
        <span class='field-label'>Key Software to be Optimized:</span>
        <span class='field-value'>" . nl2br($keySoftware) . "</span>
    </div>

    <div class='field'>
        <span class='field-label'>Total Number of Software Applications:</span>
        <span class='field-value'>" . $totalSoftware . "</span>
    </div>

    <div class='field'>
        <span class='field-label'>Total Number of Unique Users:</span>
        <span class='field-value'>" . $totalUsers . "</span>
    </div>

    <h3 style='color: #667eea; margin-top: 25px;'>" . ($requestType === 'Demo' ? 'Demo Scheduling' : 'Sales Inquiry') . "</h3>

    <div class='field'>
        <span class='field-label'>" . ($requestType === 'Demo' ? 'Demo Dates & Times:' : 'Message:') . "</span>
        <span class='field-value'>" . nl2br($demoDates) . "</span>
    </div>
";

// Create email subject
$subject = "New " . $requestType . " Request from " . $companyName . " - ESEC Website";

// Create full email template
$email_body = create_email_template($requestType . " Request - " . $companyName, $email_content);

// Send email
if (send_email($subject, $email_body, $email, $contactPerson)) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your ' . strtolower($requestType) . ' request has been submitted successfully. We will contact you soon.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email. Please try again or contact us directly at ' . RECIPIENT_EMAIL_1
    ]);
}
?>
