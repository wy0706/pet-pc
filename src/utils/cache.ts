import localforage from 'localforage';

const Cache = localforage.createInstance({
    name: 'DOG',
    // INDEXEDDB | LOCALSTORAGE | WEBSQL default:INDEXEDDB
    driver: localforage.LOCALSTORAGE,
});

export default Cache;
