@<template>
    <div class="button-system">

        <!-- Nút bấm chính -->
        <button 
            v-if="buttonType === 'main-button'">
            <div
                v-if="buttonStatus"
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
                v-else
                class="button__item-blue-disable f aic border-radius cursor"
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
        </button>

        <!-- Nút bấm phụ -->
        <button 
            v-else-if="buttonType === 'extra-button'">
             <div
                v-if="buttonStatus"
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
            <div
                v-else
                class="button__item-extra-disable f aic border-radius cursor"
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
        </button>

        <!-- Nút bấm hỗ trợ (cam) -->
        <button 
            v-if="buttonType === 'support-button-orange'">
            <div
                v-if="buttonStatus"
                class="button__item-orange f aic border-radius cursor"
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
                v-else
                class="button__item-orange-disable f aic border-radius cursor"
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
        </button>

        <!-- Nút bấm hỗ trợ (đen) -->
        <button 
            v-if="buttonType === 'support-button-black'">
            <div
                v-if="buttonStatus"
                class="button__item-black f aic border-radius cursor"
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
                v-else
                class="button__item-black-disable f aic border-radius cursor"
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
        </button>

        <!-- Nút bấm chính -->
        <button 
            v-if="buttonType === 'mini-button'">
            <div
                v-if="buttonStatus"
                class="button__item-mini f aic border-radius cursor">
                <div
                    :class="buttonFont">
                    {{ this.buttonContent }}
                </div>
            </div>
            <div
                v-else
                class="button__item-mini-disable f aic border-radius cursor">
                <div
                    :class="buttonFont">
                    {{ this.buttonContent }}
                </div>
            </div>
        </button>
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
                return 'Nút bấm'
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