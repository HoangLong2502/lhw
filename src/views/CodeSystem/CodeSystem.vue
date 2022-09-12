@<template>
    <div class="code-system__container">
        <!-- Button -->
        <div class="button-system">
            <div class="h1 blue">Nút bấm</div>
            <div class="pr2 pl2 f fdc ais" style="gap: 1em">
                <div class="f aic" style=" gap:1em">
                    <div class="p2">
                        Nút bấm chính:
                    </div>
                    <ButtonSystem 
                        />
                    <ButtonSystem 
                        buttonIcon="info"
                        buttonContent='Click 1'/>
                    <ButtonSystem 
                        :buttonStatus='false'
                        buttonIcon="info"
                        buttonContent='Click 2'/>
                </div>
                <div class="f aic" style=" gap:1em">
                    <div class="p2">
                        Nút bấm phụ:
                    </div>
                    <ButtonSystem 
                        buttonType='extra-button'
                        />
                    <ButtonSystem 
                        buttonType='extra-button'
                        buttonIcon="info"
                        buttonContent='Click 1'/>
                    <ButtonSystem 
                        buttonType='extra-button'
                        :buttonStatus='false'
                        buttonIcon="info"
                        buttonContent='Click 2'/>
                </div>
                <div class="f aic" style=" gap:1em">
                    <div class="p2">
                        Nút bấm hỗ trợ:
                    </div>
                    <ButtonSystem 
                        buttonType='support-button-orange'
                        />
                    <ButtonSystem 
                        buttonType='support-button-orange'
                        buttonIcon="info"
                        buttonContent='Click 1'/>
                    <ButtonSystem 
                        buttonType='support-button-orange'
                        :buttonStatus='false'
                        buttonIcon="info"
                        buttonContent='Click 2'/>
                </div>
                <div class="f aic" style=" gap:1em">
                    <div class="p2">
                        Nút bấm hỗ trợ:
                    </div>
                    <ButtonSystem 
                        buttonType='support-button-black'
                        />
                    <ButtonSystem 
                        buttonType='support-button-black'
                        buttonIcon="info"
                        buttonContent='Click 1'/>
                    <ButtonSystem 
                        buttonType='support-button-black'
                        :buttonStatus='false'
                        buttonIcon="info"
                        buttonContent='Click 2'/>
                </div>
                <div class="f aic" style=" gap:1em">
                    <div class="p2">
                        Nút bấm mini:
                    </div>
                    <ButtonSystem 
                        buttonType='mini-button'
                        />
                    <ButtonSystem 
                        buttonType='mini-button'
                        buttonIcon="info"
                        buttonContent='Click 1'/>
                    <ButtonSystem 
                        buttonType='mini-button'
                        :buttonStatus='false'
                        buttonIcon="info"
                        buttonContent='Click 2'/>
                </div>
            </div>
        </div>

        <!-- Input -->
        <div class="input-system f fdc ais" style="gap: 1em">
            <div class="h1 blue w100 align-c">Nhập thông tin</div>
            <div class="f fdc ais pl2 pr2 w100" style="gap: 0.25em">
                <label for="">Mặc định: {{foo}}</label>
                <InputSystem 
                   :v-model="foo" 
                   @update="foo = $event"/>
            </div>
            <div class="f fdc ais pl2 pr2 w100" style="gap: 0.25em">
                <label for="">Mặc định (Logo)</label>
                <InputSystem 
                    :logoInput="true"/>
            </div>
            <div class="f fdc ais pl2 pr2 w100" style="gap: 0.25em">
                <label for="">Định dạng tiền tệ</label>
                <InputSystem 
                    typeInput='number'/>
            </div>
        </div>
    </div>
</template>

<script>
import button_system from '@/components/component_system/button_system/button_system.vue'
import input_system from '@/components/component_system/input_system/input_system.vue'

export default {
    components : {
        ButtonSystem : button_system,
        InputSystem : input_system
    },

    data () {
        return {
            value1 : null,
            foo : '',
        }
    }
}
</script>

<style>

</style>