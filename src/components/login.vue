<template>
    <div class='page'>
        
    </div>
</template>
<script type="text/javascript">
    import axios from 'axios';
    export default {
        data(){
            return {

            }
        },
        created(){
            axios.get('/miaomiaoapi/in_theaters').then(res=>{

                console.log(res)
            })
        }
    }

</script>