<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
</script>

<template>
	<Header />
	<RouterView />
</template>

<style>
@import '@/assets/root.css';

#app {
}
</style>
