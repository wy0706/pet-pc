import zhLocale from './lang/zh'; //引入本地语言  locales/lang/zh.ts
import enLocale from './lang/en';
let zh = {
    ...zhLocale,
};
let en = {
    ...enLocale,
};
export { zh, en }; //导出
