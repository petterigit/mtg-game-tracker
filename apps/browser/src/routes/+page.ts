/** @type {import('./$types').PageLoad} */
export async function load() {
	const request = await fetch('http://localhost:3000/');

	const res = await request.text();

	console.log(res);

	return { lobby: res };
}
