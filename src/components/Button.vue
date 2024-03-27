<script setup lang="ts">
interface IButton {
    variant?: 'primary' | 'secondary'
}

withDefaults(defineProps<IButton>(), {
    variant: 'primary',
})

function varClass(variant: 'primary' | 'secondary') {
    switch (variant) {
        case 'primary':
            return 'bg-gray-200 text-gray-900 hover:bg-indigo-900 hover:text-white'
        case 'secondary':
            return 'hover:bg-gray-200 hover:text-gray-900 bg-indigo-900 text-white'
        default:
            return ''
    }
}
</script>

<template>
    <div
        :class="`cursor-pointer rounded-xl px-6 py-2 transition-all duration-300 ${varClass(variant)}`"
    >
        <slot />
    </div>
</template>
