@<template>
    <div class="input-system__container w100 f fdc ais">
        <div 
            v-if="typeInput === 'text' && logoInput"
            class="text-input--search w100">
            <div class="icon--search text-input__icon"></div>
            <input 
                class="text-input__el w100" 
                :class="validateInput ? 'border-error' : null"
                :type="typeInput"
                :placeholder="placeholderInput"
                v-model="valueInput"
                @change="valueInput === '' && requireInput ? validateInput = true : validateInput = false"
                @keyup="updateInput">
            <div
                v-if="requireInput && valueInput === '' && validateInput"
                class="p7 error align-l mt025">
                Bạn đã nhập sai
            </div>
        </div>

        <div 
            v-else-if="typeInput === 'text' && !logoInput"
            class="text-input--search w100">
            <input 
                class="w100" :type="typeInput"
                :placeholder="placeholderInput"
                v-model="valueInput"
                @keyup="updateInput">
            <div
                v-if="requireInput && valueInput === '' && validateInput"
                class="p7 error align-l mt025">
                Bạn đã nhập sai
            </div>
        </div>

        <div 
            v-else-if="typeInput === 'money'"
            class="input-number w100">
            <a-input-number
                class="item"
                style="width : 100%"
                v-model:value="value1"
                :controls='false'
                :bordered='false'
                :formatter="value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                :parser="value => value.replace(/\$\s?|(,*)/g, '')"
            />
        </div>

    </div>
</template>

<script>
export default {
    props : {
        typeInput : {
            type : String,
            default() {
                return 'text'
            }
        },

        placeholderInput : {
            type : String,
            default() {
                return 'Nhập vào đây'
            }
        },

        requireInput : {
            type : Boolean,
            default() {
                return false
            }
        },

        logoInput : {
            type : Boolean,
            default() {
                return false
            }
        },

        modelValue : String
    },

    methods: {
        updateInput () {
            this.$emit('update', this.valueInput)
        },

        handleValidateInput () {
            this.valueInput === '' && this.requireInput ? this.validateInput = true : this.validateInput = false
        },

    },

    watch : {
        'valueInput' : function () {
            this.handleValidateInput()
        },
    },

    data () {
        return {
            validateInput : false,
            value1 : 1000,
            valueInput : '',
        }
    },
}
</script>

<style scoped lang='scss'>
    @import 'input_system.scss';
</style>