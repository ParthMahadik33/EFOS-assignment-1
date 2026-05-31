# Chatbase Integration Guide

This project now integrates **Chatbase** for an AI-powered chat widget on your landing page.

## Setup Instructions

### 1. Get Your Chatbase Credentials

1. Go to [Chatbase Dashboard](https://www.chatbase.co)
2. Navigate to **Settings → Security**
3. Copy your `CHATBOT_IDENTITY_SECRET`
4. The Chatbase ID is already configured: `VFo3rPyORQ_NroNKog-fj`

### 2. Configure Environment Variables

Add your secret to `.env.local`:

```bash
CHATBOT_IDENTITY_SECRET=your_secret_key_from_chatbase
```

(A template file `.env.example` is provided for reference)

### 3. Install Dependencies

```bash
npm install
```

This installs `jsonwebtoken` needed for token generation.

### 4. Start Development Server

```bash
npm run dev
```

The Chatbase chat widget will appear automatically at the bottom-right of your page.

## How It Works

- **FloatingChat Component** (`src/components/FloatingChat.tsx`)
  - Loads the Chatbase embed script on mount
  - Generates and sends JWT tokens for secure user identification
  - Renders as `null` (Chatbase manages its own UI)

- **Chatbase API Function** (`src/lib/api/chatbase.functions.ts`)
  - Server function that generates JWT tokens
  - Runs only on the server (token secret never shipped to client)
  - Supports optional user identification (userId, email)

## Customization

### Add User Authentication

To identify users in the chat, update the token generation in `FloatingChat.tsx`:

```typescript
const result = await generateChatbaseToken({
  data: {
    userId: currentUser?.id,     // Add your user ID
    email: currentUser?.email,   // Add your user email
  },
});
```

### Customize Chatbase Widget

Visit [Chatbase Embed Documentation](https://www.chatbase.co/docs/embed) for options like:
- Custom styling
- Message history
- Webhook integrations
- Analytics

### Make Requests to Chatbase API

```typescript
window.chatbase?.("identify", { token });  // Identify user
window.chatbase?.("setCustomAttributes", { /* data */ });  // Set custom data
window.chatbase?.("openChat");  // Open chat programmatically
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `CHATBOT_IDENTITY_SECRET` | No | Secret key for generating JWT tokens (from Chatbase Settings) |

**Note:** If not set, Chatbase still works in guest mode without identification.

## Troubleshooting

- **Chat widget not appearing?**
  - Check browser console for errors
  - Verify Chatbase embed script loads (check Network tab)
  - Ensure `CHATBOT_IDENTITY_SECRET` is properly set in `.env.local`

- **Token generation failing?**
  - Verify `CHATBOT_IDENTITY_SECRET` is set
  - Check that `jsonwebtoken` is installed: `npm ls jsonwebtoken`

- **Widget styling issues?**
  - Check [Chatbase customization guide](https://www.chatbase.co/docs/embed)
  - May need CSS adjustments for your design system

## Files Modified

- `src/components/FloatingChat.tsx` - Updated to load Chatbase
- `src/lib/api/chatbase.functions.ts` - New server function for JWT token generation
- `package.json` - Added `jsonwebtoken` dependency
- `.env.local` - Environment configuration
- `.env.example` - Template for environment variables

---

**Chatbase Embed ID:** `VFo3rPyORQ_NroNKog-fj`

For more info: [Chatbase Docs](https://www.chatbase.co/docs)
