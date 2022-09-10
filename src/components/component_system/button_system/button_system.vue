@<template>
    <div class="button-system">
        <div 
            v-if="buttonType === 'main-button'"
            class="button__item-blue f aic border-radius cursor"
            :class="buttonPadding">
            <div 
                v-if="buttonIcon"
                class="mr05"
                :class="'icon--' + buttonIcon">
            </div>
            <div
                :class="buttonFont">
                {{ this.buttonContent }}
            </div>
        </div>
        <div 
            v-else-if="buttonType === 'extra-button'"
            class="button__item-extra f aic border-radius cursor"
            :class="buttonPadding">
            <div 
                v-if="buttonIcon"
                class="mr05"
                :class="'icon--' + buttonIcon">
            </div>
            <div
                :class="buttonFont">
                {{ this.buttonContent }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        buttonIcon : {
            type : String,
            default() {
                return null
            }
        },

        buttonContent : {
            type : String,
            default() {
                return ''
            }
        },

        buttonType : {
            type : String,
            default() {
                return 'main-button'
            }
        },

        buttonStatus : {
            type : Boolean,
            default() {
                return true
            }
        },

        buttonSize : {
            type : String,
            default() {
                return 'small'
            }
        }
    },

    mounted () {
        if (this.buttonSize === 'big') {
            this.buttonFont = 'h6'
            this.buttonPadding = 'pt075 pb075 pl1 pr1'
        }
    },

    data () {
        return {
            buttonFont : 'p5',
            buttonPadding : 'pt05 pb05 pl075 pr075'
        }
    }
}
</script>

<style scoped lang='scss'>
    @import 'button_system';
</style>