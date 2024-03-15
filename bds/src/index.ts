import * as components from './components'
import PrimeVue from 'primevue/config';
import Tailwind from "primevue/passthrough/tailwind";
import 'primeicons/primeicons.css'
import './tailwind.css'
import './presets/lara';
const componentsList = components?.default
const BdsComponents = {
    install(Vue) {
        Vue.use(PrimeVue, {
            unstyled: true, pt: Tailwind
        })
        Object.keys(componentsList).forEach((name) => {
            Vue.component(name, componentsList[name])
        })
    }
}

export default BdsComponents

export { BdsButton } from './components//bds/Button'
export { BdsChips } from './components/bds/Chips'
export { BdsDropdown } from './components/bds/Dropdown'
export { BdsSplitButton } from './components/bds/SplitButton'