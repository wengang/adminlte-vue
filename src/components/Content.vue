<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
               Dashboard
            </h1>
            
            <ol class="breadcrumb">
                <!--<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                <li class="active">Dashboard</li>-->
                <li v-for='item in nbars'><a v-if='item.link' :href="item.link"></a><i v-if='item.icon' class="fa" :class="item.icon"></i>{{item.name}}</li>
            </ol>

             <!--<pre>{{ JSON.stringify($route, null, 2) }}</pre>-->
        </section>

        <!-- Main content -->
        <transition><keep-alive><router-view></router-view></keep-alive></transition>
        <!-- /.content -->
    </div>
</template>
<script>
    import { bus } from './util'
    export default {
        data (){
            return {nbars:[]};
        },
        props: {
            title: String
        },
        created () {
            bus.$on('menu-switched',function(bars){
                this.nbars=bars;
            })
        }
    }
</script>