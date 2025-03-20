import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
        Miguel Angel
      </TwitterFollowCard>

      <TwitterFollowCard userName="elonmusk">Elon Musk</TwitterFollowCard>
    </section>
  )
}
