import dotenv from "dotenv"
import path from "path"
dotenv.config({path:path.join(__dirname,'.env')})

import { adjective, verbs } from "./words.js"
import nodemailer from "nodemailer"
import sgTransport from "nodemailer-sendgrid-transport"

export const secretGenerator = () => {
  const randomNumber = Math.floor(Math.random() * adjective.length);
  return `${adjective[randomNumber]} ${verbs[randomNumber]}`
}

export const sendMail = (email) => {
  const options = {
    auth: {
      api_user:process.env.SENDGRID_USERNAME,
      api_key:process.env.SENDGRID_PASSWORD
    }
  }
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};



export const sendSecretMail = (adress, secret) => {
  const email = {
    from: "insta_clone@prismagram.com",
    to: adress,
    subject: "Login secret for prismagram",
    html: `Hello your login secret it ${secret},<br/> copy paste on the app/website to login`
  }
  return sendMail(email);
}
