import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// Function to generate Chatbase JWT token for user identification
export const generateChatbaseToken = createServerFn({ method: "POST" })
  .inputValidator(z.object({ 
    userId: z.string().optional(),
    email: z.string().email().optional(),
  }))
  .handler(async ({ data }) => {
    const secret = process.env.CHATBOT_IDENTITY_SECRET;
    
    // If no secret is configured, return null (Chatbase works without authentication too)
    if (!secret) {
      return { token: null, error: "Chatbase secret not configured" };
    }

    try {
      // Dynamic import to avoid shipping jwt to client
      const { default: jwt } = await import("jsonwebtoken");
      
      const token = jwt.sign(
        {
          user_id: data.userId || "anonymous",
          email: data.email || undefined,
          // Add more custom attributes as needed:
          // stripe_accounts: user.stripe_accounts,
          // organization_id: user.organizationId,
        },
        secret,
        { expiresIn: "1h" }
      );

      return { token, error: null };
    } catch (error) {
      console.error("Failed to generate Chatbase token:", error);
      return { token: null, error: "Failed to generate token" };
    }
  });
