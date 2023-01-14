<template>
    <button
    v-bind="$attrs"
    type="submit" 
    class="green-btn">
        {{ label }}
    </button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        }
    }
}
</script>