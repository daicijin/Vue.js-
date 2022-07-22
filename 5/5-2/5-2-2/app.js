var Mybutton = {
  template: `
    <button>
      <slot>OK</slot>
    </button>
  `
}

new Vue({
  el: '#app',
  components: {
    Mybutton: Mybutton
  }
})