const API_URL = 'https://forum.mr-group.ru/api/index/';

export async function getCmsData() {
    const res = await fetch(API_URL);

    if (!res.ok) {
        throw new Error('Не получилось получить данные!');
    }
    console.log('Данные получены');
    return await res.json();
}