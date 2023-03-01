/** @type {import('./$types').PageLoad} */
export async function load() {
	const request = await fetch('http://localhost:3000/');

	const json = await request.json();

	const res = json;

	return res;
}
