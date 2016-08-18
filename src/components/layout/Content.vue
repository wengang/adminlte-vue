<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        {{ title }}
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">

      <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
      </router-view>
    
    </section>
      <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
  module.exports = {
    name: 'Content',
    props: {
      title: String
    }
  }
</script>