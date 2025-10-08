export async function fetchApiData(id: string) {
    try {
        const res = await fetch(`https://forum.mr-group.ru/api/page/?id=${id}`, {
            next: { revalidate: 60 }
        });
        
        if (!res.ok) {
            return null;
        }
        
        const api = await res.json();
        return api;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return null;
    }
}