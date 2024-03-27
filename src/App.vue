<script setup lang="ts">
import Container from './components/Container.vue'
</script>

<template>
    <div class="flex min-h-screen w-full justify-center bg-slate-50">
        <Container>
            <RouterView />
        </Container>
    </div>
</template>
