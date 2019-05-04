<template>
    <div>
        <p>You choose ??</p>
        <p class="display-item">{{ $store.getters.flavor }}</p>
    </div>
</template>

<style lang="sass">
.display-item
    width: 30vw
    margin: 0 auto 10px
    height: 20px
</style>
