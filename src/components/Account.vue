<template>
  <span ref="container"></span>
</template>

<script>
import 'meteor-client'
import { Blaze } from 'meteor/blaze'
import { Template } from 'meteor/templating'

export default {
  name: 'Account',
  data () {
    return {
      view: null
    }
  },
  mounted () {
    this.view = Blaze.render(Template.loginButtons, this.$refs['container'])
  },
  beforeDestroy () {
    Blaze.remove(this.view)
  }
}
</script>
