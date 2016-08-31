export default {
  beforeRouteLeave (route, redirect, next) {
    console.log('beforeRouteLeave')
    if (typeof this.onleave === 'function' && this.onleave()) {
      next()
    }
  },
  beforeRouteEnter (route, redirect, next) {
    console.log('beforeRouteEnter')
  }
}
