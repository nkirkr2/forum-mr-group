export async function fetchApiData(id: string) {
    try {
        const res = await fetch(`https://forum.mr-group.ru/api/page/?id=${id}`, {
            next: { revalidate: 60 }
        });
        
        if (!res.ok) {
            console.error(`HTTP error! status: ${res.status}`);
            return null;
        }
        
        const api = await res.json();
        return api;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}