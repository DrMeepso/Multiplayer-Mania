import './app.css'
import App from './App.svelte'

//@ts-ignore
window.location.hash = null

const app = new App({
  target: document.getElementById('app')!,
})

export default app
