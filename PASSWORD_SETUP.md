# Password Protection Setup

This website is now protected with a password authentication system. Users must enter the correct password to access any page.

## 🔐 Current Password
**Default Password:** `agents4science2025`

## 📝 How to Change the Password

### Option 1: Quick Change (Recommended)
Edit the file `app/config/auth.ts` and change the `WEBSITE_PASSWORD` value:

```typescript
export const AUTH_CONFIG = {
  // Change this to your desired password
  WEBSITE_PASSWORD: 'your_new_password_here',
  // ... other settings
};
```

### Option 2: Environment Variable (Advanced)
Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_WEBSITE_PASSWORD=your_new_password_here
```

Then update `app/config/auth.ts`:

```typescript
export const AUTH_CONFIG = {
  WEBSITE_PASSWORD: process.env.NEXT_PUBLIC_WEBSITE_PASSWORD || 'agents4science2025',
  // ... other settings
};
```

## ⚙️ Customization Options

You can customize various aspects of the authentication system in `app/config/auth.ts`:

```typescript
export const AUTH_CONFIG = {
  // Website access password
  WEBSITE_PASSWORD: 'agents4science2025',
  
  // Session storage key (change if you want a different localStorage key)
  STORAGE_KEY: 'agents4science_auth',
  
  // Session timeout in milliseconds (0 = no timeout)
  SESSION_TIMEOUT: 24 * 60 * 60 * 1000, // 24 hours
  
  // Website title shown on login page
  WEBSITE_TITLE: 'Agents4Science 2025',
  
  // Contact information for access requests
  CONTACT_INFO: 'Contact organizers for access credentials'
};
```

## 🔄 Session Management

- **Session Duration:** By default, users stay logged in for 24 hours
- **Auto-logout:** Users are automatically logged out when the session expires
- **Manual Logout:** Users can click the red "Logout" button in the top-right corner
- **Persistent Login:** Users remain logged in when refreshing the page or navigating between pages

## 🚀 Deployment

After changing the password:

1. **Test locally:** Run `npm run dev` to test the new password
2. **Build and deploy:** The changes will be automatically deployed when you push to GitHub
3. **Verify:** Check that the new password works on the live site

## 🔒 Security Notes

- This is a **client-side** password protection system
- The password is stored in the browser's localStorage
- **For production use with sensitive content, consider implementing server-side authentication**
- The current system is suitable for basic access control and conference previews

## 📱 User Experience

- **First Visit:** Users see a password entry form
- **Correct Password:** Users gain access to all pages
- **Incorrect Password:** Error message is shown
- **Logged In:** Users see a logout button in the top-right corner
- **Session Expired:** Users are automatically logged out and must re-enter the password

## 🆘 Troubleshooting

If users can't access the website:

1. **Check the password** in `app/config/auth.ts`
2. **Clear browser storage** - users can clear localStorage to reset their session
3. **Verify deployment** - ensure changes are pushed and deployed
4. **Check console errors** - look for JavaScript errors in browser developer tools

## 📞 Support

For technical issues with the password system, check:
- Browser console for JavaScript errors
- Network tab for failed requests
- Local storage in browser developer tools
