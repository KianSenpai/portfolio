<script setup lang="ts">
import Container from './components/Container.vue'
import Header from './components/Header.vue'
</script>

<template>
    <div class="flex min-h-screen w-full justify-center bg-slate-50">
        <Container>
            <Header />
            <RouterView />
        </Container>
    </div>
</template>
