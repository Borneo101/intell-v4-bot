import { Bot } from "grammy";
import dotenv from "dotenv";

dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN);

// === Command START ===
bot.command("start", async (ctx) => {
  await ctx.reply(
`🔐 *Secure Intelligence Access v4*

Perintah yang tersedia:
/start - Mulai akses bot
/help - Lihat bantuan
/info - Informasi bot

Silakan pilih perintah.`,
    { parse_mode: "Markdown" }
  );
});

// === HELP ===
bot.command("help", async (ctx) => {
  await ctx.reply(
`📘 *Menu Bantuan*

/start - Memulai bot
/help - Bantuan
/info - Info bot
  `,
    { parse_mode: "Markdown" }
  );
});

// === INFO ===
bot.command("info", async (ctx) => {
  await ctx.reply("🔎 *Bot aktif dan siap!*\nMode: Secure Intelligence Access", {
    parse_mode: "Markdown",
  });
});

// === Launch ===
bot.start();
console.log("Bot is running...");
