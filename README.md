[![Voicybot](/img/logo.png?raw=true)](http://voicybot.com/)

# [@voicybot](https://t.me/voicybot) main repository

This repository contains the code for one of the most popular bots I've ever built for Telegram — [@voicybot](https://t.me/voicybot). Please, feel free to fork, add features and create pull requests so that everybody (over 600 000 chats) can experience the features you've built.

You can also help by translating the bot to other languages or fixing some texts in existing languages by modifying the `locales` folder.

# List of repositories

- [Voicy](https://github.com/backmeupplz/voicy) — the main [@voicybot](https://t.me/voicybot) code
- [Voicy payments](https://github.com/backmeupplz/voicy-payments) — payments service that used stripe to process payments for the Google Speech seconds of recognition; currently retired as the stats server for [voicybot.com](http://voicybot.com)
- [Voicy landing](https://github.com/backmeupplz/voicy-landing) — [voicybot.com](http://voicybot.com) landing page

# Installation and local launch

1. Clone this repo: `git clone https://github.com/backmeupplz/voicy`
2. Launch the [mongo database](https://www.mongodb.com/) locally
3. Create `.env` file with the environment variables listed below
4. Install ffmpeg on your machine
5. Run `yarn install` in the root folder
6. Run `yarn start`

# google 

- Select or create a `Cloud Platform project`. Go to the [projects](https://console.cloud.google.com/project) page.
- Enable billing for your project. Enable [billing](https://support.google.com/cloud/answer/6293499#enable-billing).
- Enable the `Google Cloud Speech API`. Enable the [speech API](https://console.cloud.google.com/flows/enableapi?apiid=speech.googleapis.com).
- Enable the `Google Cloud Storage API`. Enable the [storage API](https://console.cloud.google.com/flows/enableapi?apiid=storage-api.googleapis.com).
- [Set up authentication](https://console.cloud.google.com/apis/credentials/serviceaccountkey) with a service account with Project>Owner role so you can access the API and select `.json` file format.
- Send `/google` to voicybot.
- `Reply` with the `.json` file you’ve downloaded 

# Heroku
```
 heroku create
 heroku buildpacks:add https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
```

# Environment variables in `.env` file

- `MONGODB_URI` — Url for the mongo database used
- `TOKEN` — Telegram bot token
- `SALT` — Random salt to generate various encrypted stuff
- `ADMIN_ID` — Chat id of the person who shall receive valuable logs
- `WIT_LANGUAGES` — A map of language names to Wit.ai tokens

Extra info is available in `.env.sample` file.

# Continuous integration

Any commit pushed to master gets deployed to [@voicybot](https://t.me/voicybot) via [CI Ninja](https://github.com/backmeupplz/ci-ninja).

# License

MIT — use for any purpose. Would be great if you could leave a note about the original developers. Thanks!

# As seen on

[![Habrahabr](/img/habr.png?raw=true)](https://habrahabr.ru/post/316824/)
[![Spark](/img/spark.png?raw=true)](https://spark.ru/startup/voicy/blog/19008/kak-zapustit-proekt-v-odinochku/)
[![Reddit](/img/reddit.png?raw=true)](https://redd.it/5iduzy)
[![Bot Store](/img/bs.png?raw=true)](https://storebot.me/bot/voicybot)
[![Product Hunt](/img/ph.png?raw=true)](https://www.producthunt.com/posts/voicy)
