# Email Configuration Setup Instructions

All three forms (Contact, PricingProposal, and PartnerRequest) have been successfully configured to send emails to: ****

## Setup Steps

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

### 2. Add Email Service

1. Go to **Email Services** in the EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email
5. Copy the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Templates

You need to create **3 email templates** (one for each form). For each template:

1. Go to **Email Templates** in the EmailJS dashboard
2. Click **Create New Template**
3. Use the template content below for each form

#### Template 1: Contact Form (Demo/Sales Request)

**Template ID:** `template_contact_form`

**Subject:** New Demo/Sales Request from {{company_name}}

**Content:**
```
New Demo/Sales Request

Form Type: {{form_type}}
Request Type: {{request_type}}

Company Information:
- Company Name: {{company_name}}
- Contact Person: {{contact_person}}
- Department: {{department}}
- Designation: {{designation}}
- Email: {{email}}
- Phone: {{phone}}
- Location: {{city}}, {{country}}

Software & User Details:
- Key Software: {{key_software}}
- Total Software Applications: {{total_software}}
- Total Users: {{total_users}}

Demo Scheduling:
{{demo_dates}}
```

#### Template 2: Pricing Proposal

**Template ID:** `template_pricing_proposal`

**Subject:** Pricing Proposal Request from {{company_name}}

**Content:**
```
New Pricing Proposal Request

Form Type: {{form_type}}

Company Information:
- Company Name: {{company_name}}
- MSME Registered: {{is_msme}}
- UDYAM Number: {{udyam_number}}
- MSME Proof: {{msme_proof}}

Contact Information:
- Contact Person: {{contact_person}}
- Department: {{department}}
- Designation: {{designation}}
- Email: {{email}}
- Phone: {{phone}}
- Location: {{city}}, {{country}}

Software & User Details:
- Key Software: {{key_software}}
- Total Software Applications: {{total_software}}
- Total Users: {{total_users}}

Project Timeline:
{{timeline}}
```

#### Template 3: Partner Request

**Template ID:** `template_partner_request`

**Subject:** Partnership Request from {{company_name}}

**Content:**
```
New Partnership Request

Form Type: {{form_type}}

Company & Contact Information:
- Company Name: {{company_name}}
- Contact Person: {{contact_person}}
- Designation: {{designation}}
- Partnership Type: {{partnership_type}}
- Email: {{email}}
- Phone: {{phone}}
- Location: {{city}}, {{country}}

Business Information:
- Target Industries: {{industries}}
- Current Products/Solutions: {{current_products}}
- Total Customers: {{total_customers}}
- Industries Operating: {{industries_operating}}
- Employees & Sales Team: {{employees}}
```

### 4. Get Your Public Key

1. Go to **Account** > **General** in the EmailJS dashboard
2. Copy your **Public Key** (e.g., `abc123XYZ`)

### 5. Update Configuration File

Open the file: `src/utils/emailConfig.ts`

Replace the placeholder values with your actual EmailJS credentials:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'YOUR_ACTUAL_PUBLIC_KEY_HERE',
  SERVICE_ID: 'YOUR_ACTUAL_SERVICE_ID_HERE',
  TEMPLATES: {
    CONTACT: 'template_contact_form',
    PRICING_PROPOSAL: 'template_pricing_proposal',
    PARTNER_REQUEST: 'template_partner_request'
  }
}
```

### 6. Test the Forms

1. Run your application: `npm start`
2. Navigate to each form:
   - Contact Form: `/contact`
   - Pricing Proposal: `/pricing-proposal`
   - Partner Request: `/partner-request`
3. Fill out and submit each form to test
4. Check your email () for the submissions

## Features Implemented

### All Forms Include:

1. **Form Validation** - All required fields are validated
2. **Loading State** - Shows "Submitting..." while sending
3. **Success/Error Messages** - User-friendly feedback after submission
4. **Form Reset** - Automatically clears form after successful submission
5. **Email Delivery** - All form data sent to your email address

### Security Notes

- EmailJS credentials are stored in a config file
- For production, consider using environment variables
- Free tier allows 200 emails/month
- All form submissions are logged in EmailJS dashboard

## Troubleshooting

### Email not received?
1. Check EmailJS dashboard for failed sends
2. Verify all template IDs match exactly
3. Check spam folder
4. Ensure email service is properly connected

### Form submission error?
1. Open browser console (F12) to see error details
2. Verify PUBLIC_KEY and SERVICE_ID are correct
3. Check that template IDs match in config file
4. Ensure you're not exceeding the 200 emails/month limit

## Upgrade Options

If you need more emails or features:
- **Personal Plan** ($7/month): 1,000 emails/month
- **Business Plan** ($15/month): 10,000 emails/month
- Visit: [https://www.emailjs.com/pricing/](https://www.emailjs.com/pricing/)

---

Need help? Contact EmailJS support at: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
