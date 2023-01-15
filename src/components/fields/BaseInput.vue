<template>
    <label
        v-if="label"
        :for="fieldID">
        {{ label }} 
        <span class="text-red" v-if="isRequired">*</span>
    </label>
    <input 
        :id="fieldID" 
        v-bind="$attrs"
        class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-green focus:outline-none focus:ring-primary-green"
        :class="{ 'border-red-500 focus:ring-red-500 focus:border-red-500': clientSideErrors.$error || serverSideErrors.length > 0 }"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
    <!--Client side error-->
    <template v-if="clientSideErrors">    
        <div
            v-for="(error, index) in clientSideErrors.$errors"
            :key="index"
            class="text-red-500 text-sm"
        >
            {{ error.$message }}
        </div>
    </template>

    <!--Server side error for string message -->
    <div v-if="!Array.isArray(serverSideErrors) && serverSideErrors.length > 0" class="text-red-500 text-sm">{{ serverSideErrors }}</div>
    <!-- <template v-if="serverSideErrors.length > 0">    
        <div
            v-for="(error, index) in serverSideErrors"
            :key="index"
            class="text-red-500 text-sm"
        >
            {{ error.username }}
        </div>
    </template> -->
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        isRequired: {
            type: Boolean,
            default: true
        },
        placeholder: {
            type: String,
            required: true
        },
        modelValue: {
            type: [String, Number],
            default: ''
        },
        clientSideErrors: {
            type: [Array, Object],
            default() {}
        },
        serverSideErrors: {
            type: [Array, String],
            default: []
        }
    },
    computed: {
        fieldID(){
            return this.label.replace(/[^A-Z0-9]+/ig, "_"); //remove space and special character
        }
    }
}
</script>