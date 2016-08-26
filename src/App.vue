<template>
  <div id='app' class="wrapper">  
    <!--{{msg}}-->
    <app-header></app-header>
    
    <!-- Left side column. contains the logo and sidebar -->
    <app-sidebar :menu='menu'></app-sidebar>
     <!-- Content Wrapper. Contains page content -->
    <app-content></app-content>
     <!-- /.content-wrapper -->
    <app-footer></app-footer>
     <!-- Control Sidebar -->
    <app-control-sidebar></app-control-sidebar>
     <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
       immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
    <!--<app-side></app-side>-->
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import MainSidebar from './components/MainSidebar.vue'
  import Content from './components/Content.vue'
  import Footer from './components/Footer.vue'
  import ControlSidebar from './components/ControlSidebar.vue'
  import Menu from './components/Menu.vue'
export default {
  data () {
    return {
      msg: 'Hello Vue!',
      menu: require('./config/menu.js')
    }
  },
  components: {
      'app-header': Header,
      'app-sidebar': MainSidebar,
      'app-content': Content,
      'app-footer': Footer,
      'app-control-sidebar': ControlSidebar,
      'app-menu': Menu      
    }
}
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
</style>