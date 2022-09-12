import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

// antd
import { Input, InputNumber, Select } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


import router from './router'
import store from './store'



const app = createApp(App)

app.use(store)
app.use(router)

app.use(Input)
app.use(InputNumber)
app.use(Select)

app.mount('#app')

