'use server'

import { useAuthenticatedActionProcedure } from "@/lib/hooks/safe-actions"
import sendEmail from "./server";
import { SendReminderEmail } from "./sendReminderEmail";

export const sendReminderEmail = useAuthenticatedActionProcedure
  .createServerAction()
  .handler(
      
        async () => {
          try {
                await sendEmail(
                    "takella6315@gmail.com",
                    "kevink3535@gmail.com",
                    "Message send",
                    await SendReminderEmail(),
                );
          } catch (e) {
            throw e;
          }
        },
  );