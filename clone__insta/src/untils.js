import { adjective, verbs } from "./words.js"

export const secretGenerator = () => {
  const randomNumber = Math.floor(Math.random() * adjective.length);
  return `${adjective[randomNumber]} ${verbs[randomNumber]}`
}
