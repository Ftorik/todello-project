// Объявление типа для глобального RootState. Сам тип выводится через store в index.ts (typeof store.getState)
// странная штука, не особо вписывается в концепцию FSD
// declare type RootState = ReturnType<typeof import('./index').store.getState>;
declare type RootState = ReturnType<typeof import('./index').rootReducer>;
