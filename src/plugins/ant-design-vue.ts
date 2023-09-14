import {
    Button,
    ConfigProvider,
    Tooltip,
    Dropdown,
    Menu,
    Row,
    Col,
    Form,
    Input,
    Checkbox,
    Divider,
} from 'ant-design-vue'; //局部功能使用
// import Antd from 'ant-design-vue'; //全局使用
export default defineNuxtPlugin((nuxtApp) => {
    // nuxtApp.vueApp.use(Antd); //全局使用
    nuxtApp.vueApp
        .use(Button)
        .use(ConfigProvider)
        .use(Menu)
        .use(Tooltip)
        .use(Row)
        .use(Col)
        .use(Form)
        .use(Input)
        .use(Checkbox)
        .use(Divider)
        .use(Dropdown); //局部功能使用
});
