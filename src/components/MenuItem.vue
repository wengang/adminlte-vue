<template>
    <li :class="liclass" @click.capture='menuItemClicked'>
        <template v-if='item.children'>
            <a href="#">
                <i class="fa" :class="item.icon"></i>
                <span>{{ item.name }}</span>
                <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu">
                <menu-item v-for='child in item.children' :item='child' :parents='bars'></menu-item>
            </ul>
        </template>
        <template v-else>
            <!--<a v-link="{ path: item.link, exact: true }">
                <i class="fa" :class="item.icon"></i>
                <span>{{ item.name }}</span>
            </a>-->
            <router-link :to="item.link">
                <i class="fa" :class="item.icon"></i>
                <span>{{ item.name }}</span></router-link>
        </template>
    </li>
</template>
<script>
   import { bus } from './util'
   import _ from 'lodash/lang'  
   
    export default {
        name: 'menu-item',
        data(){
            return {bars:[]}
        },
        props: ['item','parents'],
        created () {
             this.bars=_.clone(this.parents)
             this.bars.push({name:this.item.name})            
        },
        computed: {
            liclass: function (){
                return this.item.children?'treeview':''
            },

        },
        methods: {
            menuItemClicked: function(){
                bus.$emit('menu-switched',this.bars);
            }
        }

    }
</script>