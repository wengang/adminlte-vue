<template>
    <li :class="liclass" @click='menuItemClicked'>
        <template v-if='item.children'>
            <a href="#">
                <i class="fa" :class="item.icon"></i>
                <span>{{ item.name }}</span>
                <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu">
                <menu-item v-for='child in item.children' :item='child' :parents='navigationBars'></menu-item>
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
   console.debug(bus)
   var bars=null;
    export default {
        name: 'menu-item',
        props: ['item','parents'],
        created () {
             bars=_.clone(this.parents)
             bars.push(this.item)
        },
        computed: {
            liclass: function (){
                return this.item.children?'treeview':''
            },
            navigationBars: function(){
               return bars;
            }
        },
        methods: {
            menuItemClicked: function(){
                bus.$emit('menu-switched',bars);
            }
        }

    }
</script>