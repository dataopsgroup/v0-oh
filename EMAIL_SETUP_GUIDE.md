# Email Delivery Setup Guide

## Quick Setup Options

### Option 1: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add to your `.env.local` file:
   \`\`\`
   RESEND_API_KEY=re_your_api_key_here
   \`\`\`

### Option 2: Gmail SMTP
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: Google Account → Security → App passwords
3. Add to your `.env.local` file:
   \`\`\`
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_16_character_app_password
   SMTP_FROM=noreply@dataopsgroup.com
   \`\`\`

## Testing Email Delivery

1. Run the test script:
   \`\`\`bash
   node scripts/test-email-delivery.js
   \`\`\`

2. Check admin@dataopsgroup.com inbox (and spam folder)

3. Submit a test form through the website

## Troubleshooting

### Email Not Received
1. **Check Environment Variables**: Ensure all required variables are set
2. **Verify Credentials**: Test API key or SMTP credentials
3. **Check Spam Folder**: Emails might be filtered
4. **Review Console Logs**: Check server logs for detailed errors
5. **DNS/Domain Issues**: Ensure sending domain is properly configured

### Common Issues
- **Resend**: Invalid API key or domain not verified
- **Gmail**: App password not generated or 2FA not enabled
- **Outlook**: Less secure app access needs to be enabled
- **Corporate Email**: May require specific SMTP settings

### Fallback System
The API includes multiple fallback mechanisms:
1. Primary: Resend API
2. Fallback: SMTP (Gmail/Outlook)
3. Final: Console logging for manual follow-up
