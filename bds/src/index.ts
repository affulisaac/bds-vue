import * as components from './components'

const componentsList  = components?.default
const BdsComponents = {
    install (Vue) {
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