<template>
    <ul class='sidebar-menu'>
        <li class="header">MAIN NAVIGATION</li>
         <menu-item v-for='item in menu' :item='item' :parents='root'></menu-item>
    </ul>
</template>
<script>
    import MenuItem from './MenuItem.vue'
    export default {
        props: ['menu','top'],
        computed: {
            root: function(){
                return [{name: 'Home',link: '/',icon: 'fa-home'}];
            }           
        },
        components: {
            'menu-item': MenuItem
        },
        methods: {
           
        }

    }
</script>   