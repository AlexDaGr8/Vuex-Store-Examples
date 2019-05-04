<template>
    <div class="actions">
      <p class="counter">{{ $store.getters.counter }}</p>
      <div class="btn-group">
        <button @click="increment"><div class="up arrow"></div></button>
        <button @click="decrement"><div class="down arrow"></div></button>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    increment: function() {
      this.$store.commit('increment')
    },
    decrement: function() {
      this.$store.commit('decrement')
    }
  },
}
</script>


<style lang="sass">
.actions
    padding-bottom: 10px
    height: 3em
    display: flex
    align-items: center
    justify-content: center
    & p
        margin: 0
        display: inline-block
        padding: 10px
        width: 20px
.btn-group
    display: inline-block
button
    padding: 6px
    border-radius: 5px
    display: block
    background-color: #333
.arrow
    width: 0
    height: 0
    border: 10px solid
    position: relative
    &.up
        top: -5px
        border-color: transparent transparent #84E296
    &.down
        top: 5px
        border-color: #BD4F6C transparent transparent
</style>
