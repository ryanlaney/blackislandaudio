# Installation / Testing

Install dependencies:

`npm i`

Run:

`npm run dev`

Then open *0.0.0.0:3000* in your browser.

# Deploying

This site can be deployed using the [Serverless Application Framework](https://www.serverless.com)

You will need to configure environment variables (ex: in `.env.local`):
```
AWS_ACCESS_KEY_ID=XXXXX
AWS_SECRET_ACCESS_KEY=XXXXX
```

To deploy, simply run:

`npm run deploy:produciton`
