export async function getMenu() {
  try {
    const res = await fetch('http://localhost:3000/menu');
    if (!res.ok) {
      throw new Error('Failed getting menu');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}
