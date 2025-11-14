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
    'designation',
    'partnershipType',
    'email',
    'phone',
    'city',
    'country'
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
$designation = sanitize_input($data['designation']);
$partnershipType = sanitize_input($data['partnershipType']);
$email = sanitize_input($data['email']);
$phone = sanitize_input($data['phone']);
$city = sanitize_input($data['city']);
$country = sanitize_input($data['country']);
$website = !empty($data['website']) ? sanitize_input($data['website']) : 'Not provided';
$industries = !empty($data['industries']) ? sanitize_input($data['industries']) : 'Not provided';
$currentProducts = !empty($data['currentProducts']) ? sanitize_input($data['currentProducts']) : 'Not provided';
$totalCustomers = !empty($data['totalCustomers']) ? sanitize_input($data['totalCustomers']) : 'Not provided';
$industriesOperating = !empty($data['industriesOperating']) ? sanitize_input($data['industriesOperating']) : 'Not provided';
$employees = !empty($data['employees']) ? sanitize_input($data['employees']) : 'Not provided';

// Map partnership type codes to full names
$partnershipTypes = [
    'var' => 'VAR (Value Added Reseller)',
    'si' => 'SI (System Integrator)',
    'msp' => 'MSP (Managed Service Provider)',
    'referral' => 'Referral Consultant'
];
$partnershipTypeName = isset($partnershipTypes[$partnershipType]) ? $partnershipTypes[$partnershipType] : $partnershipType;

// Create email content
$email_content = "
    <div class='field'>
        <span class='field-label'>Partnership Type:</span>
        <span class='field-value'>" . $partnershipTypeName . "</span>
    </div>

    <h3 style='color: #667eea; margin-top: 25px;'>Company & Contact Information</h3>

    <div class='field'>
        <span class='field-label'>Company Name:</span>
        <span class='field-value'>" . $companyName . "</span>
    </div>

    <div class='field'>
        <span class='field-label'>Contact Person:</span>
        <span class='field-value'>" . $contactPerson . "</span>
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

    <h3 style='color: #667eea; margin-top: 25px;'>Business Information</h3>

    <div class='field'>
        <span class='field-label'>Industries of Interest:</span>
        <span class='field-value'>" . nl2br($industries) . "</span>
    </div>

    <div class='field'>
        <span class='field-label'>Current Products/Solutions:</span>
        <span class='field-value'>" . nl2br($currentProducts) . "</span>
    </div>

    <div class='field'>
        <span class='field-label'>Total Number of Customers:</span>
        <span class='field-value'>" . $totalCustomers . "</span>
    </div>

    <div class='field'>
        <span class='field-label'>Industries Currently Operating:</span>
        <span class='field-value'>" . $industriesOperating . "</span>
    </div>

    <div class='field'>
        <span class='field-label'>Total Employees & Sales Team:</span>
        <span class='field-value'>" . $employees . "</span>
    </div>
";

// Create email subject
$subject = "New Partnership Request - " . $partnershipTypeName . " from " . $companyName . " - ESEC Website";

// Create full email template
$email_body = create_email_template("Partnership Request - " . $companyName, $email_content);

// Send email
if (send_email($subject, $email_body, $email, $contactPerson)) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your partnership request has been submitted successfully. We will review and contact you soon.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email. Please try again or contact us directly at ' . RECIPIENT_EMAIL_1
    ]);
}
?>
