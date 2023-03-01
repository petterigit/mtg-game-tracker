<script>
	import { io } from 'socket.io-client';

	/** @type {import('./$types').PageData} */
	export let data;

	/**
	 * @type {{ players: any; }}
	 */
	export let players;

	const socket = io('http://localhost:3000');
	socket.on('connect', function () {
		console.log('Connected');
		socket.emit('gameState', (/** @type {any} */ response) => (players = response.state.players));
	});
	socket.on('disconnect', function () {
		console.log('Disconnected');
	});
</script>

<h1>Welcome to Gametracker!</h1>

<h2>{data.lobby}</h2>

<div>
	Players: {players}!
</div>

<my-component first=":]" />
