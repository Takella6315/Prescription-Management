/* import { useAuthenticatedActionProcedure } from "@/lib/hooks/safe-actions";
import sendEmail from "./server";
import { RenderSendReminderEmail } from "./sendReminderEmail"; // Assuming this is a function to get email content

export const sendReminderEmail = useAuthenticatedActionProcedure
  .createServerAction()
  .handler(
    async () => {
      try {
        const emailContent = await RenderSendReminderEmail(); // Make sure this returns a string or content, not JSX

        await sendEmail(
          "takella6315@gmail.com",
          "kevink3535@gmail.com",
          "Message send",
          emailContent, // Make sure this is a valid string or data that represents email content
        );

        return { success: true }; // Return a result that matches the expected type (e.g., JSON or an object)
      } catch (e) {
        throw e; 
      }
    },
  );
 */