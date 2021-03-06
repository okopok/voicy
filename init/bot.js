// Dependencies
const Telegraf = require('telegraf')
const { report } = require('../helpers/report')
const cluster = require('cluster')
const uuid = require('uuid/v4')
const PORT = process.env.PORT || 5000
// Create bot
const bot = new Telegraf(process.env.TOKEN, {
  channelMode: true,
})
bot.webhookReply = false
// Get bot's username
bot.telegram
  .getMe()
  .then(info => {
    bot.options.username = info.username
  })
  .catch(console.info)
// Bot catch
bot.catch(err => {
  report(bot, err, 'bot.catch')
})
// Start bot
function startBot() {
  if (cluster.isMaster) {
    // Start bot
    if (process.env.USE_WEBHOOK === 'true') {
      const domain = process.env.WEBHOOK_DOMAIN
      const url = process.env.APP_URL;
      bot.telegram
        .deleteWebhook()
        .then(async () => {
          const secretPath = uuid()
          bot.startWebhook(`/${secretPath}`, undefined, PORT)
          await bot.telegram.setWebhook(`${url}/${secretPath}`)
          const webhookInfo = await bot.telegram.getWebhookInfo()
          console.info('Bot is up and running with webhooks', webhookInfo)
        })
        .catch(err => console.info('Bot launch error', err))
    } else {
      bot.telegram
        .deleteWebhook()
        .then(async () => {
          bot.startPolling()
          // Console that everything is fine
          console.info('Bot is up and running')
        })
        .catch(err => console.info('Bot launch error', err))
    }
  }
}
// Export bot
module.exports = { bot, startBot }
