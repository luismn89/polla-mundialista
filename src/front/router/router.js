import HomePage from '../pages/home/Home.vue'
import FixturePage from '../pages/fixture/Fixture.vue'
import HowplayPage from '../pages/how-play/Howplay.vue'
import MechanicsPage from '../pages/mechanics/Mechanics.vue'
import MyprofilePage from '../pages/my-profile/Myprofile.vue'
import WinnersPage from '../pages/winners/Winners.vue'
import ChangePage from '../pages/change/Change.vue'

export const routes = [
  { path: '/mundial/polla/', component: HomePage },
  { path: '/mundial/polla/fixture/', component: FixturePage },
  { path: '/mundial/polla/como-jugar/', component: HowplayPage },
  { path: '/mundial/polla/mecanica/', component: MechanicsPage },
  { path: '/mundial/polla/mi-perfil/', component: MyprofilePage },
  { path: '/mundial/polla/ganadores/', component: WinnersPage },
  { path: '/mundial/polla/recover/:hash', component: ChangePage, props: true },
  { path: '*', redirect: '/mundial/polla/' }
]
