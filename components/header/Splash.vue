<script setup lang="ts">
	const route = useRoute();
</script>

<template>
	<div
		v-if="route.path === '/'"
		class="relative flex aspect-[7/5] max-h-[500px] w-full items-center justify-center overflow-hidden md:h-auto md:max-h-[500px] lg:justify-end">
		<img
			src="assets/img/model-horse-1.webp"
			alt="Model of a horse facing left"
			class="splash-slide animate-slide-1 md:object-[0%_20%] lg:object-[0%_14%]" />
		<img
			src="assets/img/model-horse-4.webp"
			alt="Model horse facing right"
			class="splash-slide animate-slide-2 md:object-[0%_30%] lg:object-[0%_20%]" />
		<img
			src="assets/img/model-horse-3.webp"
			alt="Model of a horse facing left"
			class="splash-slide animate-slide-3 md:object-[0%_5%]" />
		<img
			src="assets/img/model-horse-2.webp"
			alt="Model of a horse and rider"
			class="splash-slide animate-slide-4 md:object-[0%_20%]" />
		<div
			class="absolute h-full w-full bg-[linear-gradient(to_right,rgba(222,145,29,0.9),rgba(247,201,72,0.7),rgba(247,201,72,0.8),rgba(64,195,247,0.7))]"></div>
		<HeaderTaglines />
	</div>
</template>
