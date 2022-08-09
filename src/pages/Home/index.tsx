import { Banner } from './components/Banner'
import { Store } from './components/Store'

export function Home() {
  return (
    <div>
      <Banner />

      <main>
        <Store />
      </main>
    </div>
  )
}
