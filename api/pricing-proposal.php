<?php
require_once 'config.php';
if (ENABLE_DB_SAVE) {
    require_once 'dbcon.php';
}

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
    'isMSME',
    'contactPerson',
    'designation',
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
$isMSME = sanitize_input($data['isMSME']);
$udyamNumber = !empty($data['udyamNumber']) ? sanitize_input($data['udyamNumber']) : 'Not provided';
$msmeProof = !empty($data['msmeProof']) ? sanitize_input($data['msmeProof']) : 'Not provided';
$contactPerson = sanitize_input($data['contactPerson']);
$department = !empty($data['department']) ? sanitize_input($data['department']) : 'Not provided';
$designation = sanitize_input($data['designation']);
$email = sanitize_input($data['email']);
$phone = sanitize_input($data['phone']);
$city = sanitize_input($data['city']);
$country = sanitize_input($data['country']);
$website = !empty($data['website']) ? sanitize_input($data['website']) : 'Not provided';
$keySoftware = !empty($data['keySoftware']) ? sanitize_input($data['keySoftware']) : 'Not provided';
$totalSoftware = !empty($data['totalSoftware']) ? sanitize_input($data['totalSoftware']) : 'Not provided';
$totalUsers = !empty($data['totalUsers']) ? sanitize_input($data['totalUsers']) : 'Not provided';
$timeline = !empty($data['timeline']) ? sanitize_input($data['timeline']) : 'Not provided';

// Create email content
$email_content = "
    <h3 style='color: #667eea; margin-top: 25px;'>Company Information</h3>

    <div class='field'>
        <span class='field-label'>Company Name:</span>
        <span class='field-value'>" . $companyName . "</span>
    </div>

    <div class='field'>
        <span class='field-label'>MSME Registered Company:</span>
        <span class='field-value'>" . strtoupper($isMSME) . "</span>
    </div>
";

// Add MSME details if applicable
if ($isMSME === 'yes') {
    $email_content .= "
    <div class='field'>
        <span class='field-label'>UDYAM Registration Number:</span>
        <span class='field-value'>" . $udyamNumber . "</span>
    </div>

    <div class='field'>
        <span class='field-label'>MSME Proof (Non-Indian):</span>
        <span class='field-value'>" . nl2br($msmeProof) . "</span>
    </div>
    ";
}

$email_content .= "
    <h3 style='color: #667eea; margin-top: 25px;'>Contact Information</h3>

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

    <h3 style='color: #667eea; margin-top: 25px;'>Project Timeline</h3>

    <div class='field'>
        <span class='field-label'>Timeframe of Purchase and Project Start:</span>
        <span class='field-value'>" . nl2br($timeline) . "</span>
    </div>
";

// Create email subject
$msmeText = ($isMSME === 'yes') ? ' [MSME]' : '';
$subject = "New Pricing Proposal Request" . $msmeText . " from " . $companyName . " - ESEC Website";

// Create full email template
$email_body = create_email_template("Pricing Proposal Request - " . $companyName, $email_content);

// Save to database if enabled
$db_saved = false;
if (ENABLE_DB_SAVE) {
    try {
        $conn = OpenCon();

        $sql = "INSERT INTO pricing_proposals (
            company_name, is_msme, udyam_number, msme_proof,
            contact_person, department, designation, email, phone,
            city, country, website, key_software, total_software,
            total_users, timeline, ip_address, user_agent
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $ip_address = $_SERVER['REMOTE_ADDR'];
        $user_agent = $_SERVER['HTTP_USER_AGENT'];

        $stmt = $conn->prepare($sql);
        $stmt->bind_param(
            "ssssssssssssssssss",
            $companyName, $isMSME, $udyamNumber, $msmeProof,
            $contactPerson, $department, $designation, $email, $phone,
            $city, $country, $website, $keySoftware, $totalSoftware,
            $totalUsers, $timeline, $ip_address, $user_agent
        );

        $db_saved = $stmt->execute();
        $stmt->close();
        CloseCon($conn);
    } catch (Exception $e) {
        error_log("Database save error: " . $e->getMessage());
        // Continue even if DB save fails
    }
}

// Send email
$email_sent = send_email($subject, $email_body, $email, $contactPerson);

if ($email_sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your proposal request has been submitted successfully. We will send you a customized proposal soon.',
        'db_saved' => $db_saved
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email. Please try again or contact us directly at ' . RECIPIENT_EMAIL_1
    ]);
}
?>
