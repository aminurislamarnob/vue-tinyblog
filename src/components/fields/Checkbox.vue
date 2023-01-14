<template>
    <input 
    :id="fieldID"
    v-bind="$attrs"
    type="checkbox" 
    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
    :checked="modelValue"
    @input="$emit('update:modelValue', $event.target.checked)"
    >
    <label :for="fieldID" v-if="label" class="ml-2 block text-sm text-gray-900">{{ label }} </label>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        checked: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        fieldID(){
            return this.label.replace(/[^A-Z0-9]+/ig, "_"); //remove space and special character
        }
    }
}
</script>