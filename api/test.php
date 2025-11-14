<?php
/**
 * Simple Test Script
 * Use this to verify your server configuration
 */
?>
<!DOCTYPE html>
<html>
<head>
    <title>PHP API Test</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: #f5f5f5;
        }
        .test-section {
            background: white;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .success { color: #4CAF50; font-weight: bold; }
        .error { color: #f44336; font-weight: bold; }
        .info { color: #2196F3; }
        h1 { color: #333; }
        h2 { color: #666; border-bottom: 2px solid #667eea; padding-bottom: 10px; }
        pre { background: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto; }
        .status { padding: 10px; margin: 10px 0; border-radius: 4px; }
        .status.ok { background: #e8f5e9; border-left: 4px solid #4CAF50; }
        .status.fail { background: #ffebee; border-left: 4px solid #f44336; }
    </style>
</head>
<body>
    <h1>🔧 PHP API Configuration Test</h1>

    <div class="test-section">
        <h2>1. PHP Configuration</h2>

        <div class="status <?php echo function_exists('mail') ? 'ok' : 'fail'; ?>">
            <strong>PHP mail() function:</strong>
            <?php
            if (function_exists('mail')) {
                echo '<span class="success">✓ Available</span>';
            } else {
                echo '<span class="error">✗ Not Available - Contact your hosting provider</span>';
            }
            ?>
        </div>

        <div class="status ok">
            <strong>PHP Version:</strong>
            <span class="info"><?php echo phpversion(); ?></span>
            <?php if (version_compare(PHP_VERSION, '7.0.0') >= 0): ?>
                <span class="success">✓ Compatible</span>
            <?php else: ?>
                <span class="error">✗ Upgrade to PHP 7.0+</span>
            <?php endif; ?>
        </div>

        <div class="status ok">
            <strong>JSON Support:</strong>
            <?php
            if (function_exists('json_encode') && function_exists('json_decode')) {
                echo '<span class="success">✓ Available</span>';
            } else {
                echo '<span class="error">✗ Not Available</span>';
            }
            ?>
        </div>
    </div>

    <div class="test-section">
        <h2>2. File Permissions</h2>

        <?php
        $files = ['config.php', 'contact.php', 'partner-request.php', 'pricing-proposal.php'];
        foreach ($files as $file) {
            $exists = file_exists($file);
            $readable = is_readable($file);
            echo "<div class='status " . ($exists && $readable ? 'ok' : 'fail') . "'>";
            echo "<strong>$file:</strong> ";
            if ($exists) {
                echo '<span class="success">✓ Exists</span> ';
                echo $readable ? '<span class="success">✓ Readable</span>' : '<span class="error">✗ Not Readable</span>';
                echo " <span class='info'>(Permissions: " . substr(sprintf('%o', fileperms($file)), -4) . ")</span>";
            } else {
                echo '<span class="error">✗ Not Found</span>';
            }
            echo "</div>";
        }
        ?>
    </div>

    <div class="test-section">
        <h2>3. Email Configuration</h2>

        <?php
        if (file_exists('config.php')) {
            require_once 'config.php';
            echo "<div class='status ok'>";
            echo "<strong>Recipient Emails:</strong><br>";
            echo "<span class='info'>• " . RECIPIENT_EMAIL_1 . "</span><br>";
            echo "<span class='info'>• " . RECIPIENT_EMAIL_2 . "</span>";
            echo "</div>";

            echo "<div class='status ok'>";
            echo "<strong>Sender Email:</strong> <span class='info'>" . SENDER_EMAIL . "</span>";
            echo "</div>";

            echo "<div class='status ok'>";
            echo "<strong>Sender Name:</strong> <span class='info'>" . SENDER_NAME . "</span>";
            echo "</div>";
        } else {
            echo "<div class='status fail'>";
            echo "<span class='error'>✗ config.php not found</span>";
            echo "</div>";
        }
        ?>
    </div>

    <div class="test-section">
        <h2>4. Test Email Send</h2>

        <?php
        if (isset($_GET['test_email'])) {
            $test_to = $_GET['test_email'];
            if (filter_var($test_to, FILTER_VALIDATE_EMAIL)) {
                $subject = "Test Email from ESEC API";
                $message = "
                    <html>
                    <body style='font-family: Arial, sans-serif;'>
                        <h2>Test Email Successful!</h2>
                        <p>If you received this email, your PHP mail() function is working correctly.</p>
                        <p><strong>Server Information:</strong></p>
                        <ul>
                            <li>PHP Version: " . phpversion() . "</li>
                            <li>Server Time: " . date('Y-m-d H:i:s') . "</li>
                        </ul>
                    </body>
                    </html>
                ";
                $headers = "MIME-Version: 1.0" . "\r\n";
                $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
                $headers .= "From: " . SENDER_NAME . " <" . SENDER_EMAIL . ">" . "\r\n";

                if (mail($test_to, $subject, $message, $headers)) {
                    echo "<div class='status ok'>";
                    echo "<span class='success'>✓ Test email sent to: $test_to</span><br>";
                    echo "<span class='info'>Check your inbox (and spam folder)</span>";
                    echo "</div>";
                } else {
                    echo "<div class='status fail'>";
                    echo "<span class='error'>✗ Failed to send test email</span><br>";
                    echo "<span class='info'>Check PHP error logs or contact hosting provider</span>";
                    echo "</div>";
                }
            } else {
                echo "<div class='status fail'>";
                echo "<span class='error'>✗ Invalid email address</span>";
                echo "</div>";
            }
        }
        ?>

        <form method="GET" style="margin-top: 20px;">
            <label for="test_email" style="display: block; margin-bottom: 10px;">
                <strong>Send a test email to verify mail() function:</strong>
            </label>
            <input
                type="email"
                name="test_email"
                id="test_email"
                placeholder="your-email@example.com"
                required
                style="padding: 10px; width: 300px; border: 1px solid #ddd; border-radius: 4px;"
            >
            <button
                type="submit"
                style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 4px; cursor: pointer; margin-left: 10px;"
            >
                Send Test Email
            </button>
        </form>
    </div>

    <div class="test-section">
        <h2>5. API Endpoints Test</h2>

        <p>Test your API endpoints using cURL or Postman:</p>

        <h3>Contact Form:</h3>
        <pre>curl -X POST <?php echo 'http://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']); ?>/contact.php \
  -H "Content-Type: application/json" \
  -d '{"requestType":"Demo","companyName":"Test Co","contactPerson":"John","department":"IT","designation":"Manager","email":"test@example.com","phone":"1234567890","city":"Mumbai","country":"India","website":"","keySoftware":"Test","totalSoftware":"5","totalUsers":"100","demoDates":"Next week"}'</pre>

        <h3>Partner Request:</h3>
        <pre>curl -X POST <?php echo 'http://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']); ?>/partner-request.php \
  -H "Content-Type: application/json" \
  -d '{"companyName":"Test Co","contactPerson":"John","designation":"Manager","partnershipType":"var","email":"test@example.com","phone":"1234567890","city":"Mumbai","country":"India","website":"","industries":"IT","currentProducts":"Software","totalCustomers":"50","industriesOperating":"Tech","employees":"100"}'</pre>

        <h3>Pricing Proposal:</h3>
        <pre>curl -X POST <?php echo 'http://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']); ?>/pricing-proposal.php \
  -H "Content-Type: application/json" \
  -d '{"companyName":"Test Co","isMSME":"no","udyamNumber":"","msmeProof":"","contactPerson":"John","department":"IT","designation":"Manager","email":"test@example.com","phone":"1234567890","city":"Mumbai","country":"India","website":"","keySoftware":"Test","totalSoftware":"5","totalUsers":"100","timeline":"Q1 2025"}'</pre>
    </div>

    <div class="test-section">
        <h2>6. Next Steps</h2>

        <ol>
            <li>✓ Verify all checks above are passing</li>
            <li>✓ Send a test email using the form above</li>
            <li>✓ Update CORS settings in config.php with your domain</li>
            <li>✓ Test API endpoints using cURL commands above</li>
            <li>✓ Deploy your React frontend and test forms</li>
            <li>✓ Delete this test.php file after testing</li>
        </ol>
    </div>

    <div style="text-align: center; margin-top: 40px; color: #999;">
        <p>📧 ESEC API Test Page | Generated: <?php echo date('Y-m-d H:i:s'); ?></p>
    </div>
</body>
</html>
