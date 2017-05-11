import ECharts from 'echarts'
import {blue, dark} from 'configs/EChartTheme.es6'
import { store } from 'xStore/xStore.es6'

export default {
    
    ECharts,
    
    init(id, change) {
        let el = document.getElementById(id),
            theme = blue
        /**
        if(store.state.theme !== 'blue') {
            theme = dark 
        }
        **/
        if(change) {
            theme = dark
        }
        let  chart = ECharts.init(el, theme)
        return chart
    }
    
}