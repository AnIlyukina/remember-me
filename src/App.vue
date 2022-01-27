<template>
<div class="game">
  <img class="game__logo" alt="vue-logo" src="./assets/logo.png">
  <h1>Remember me, Vue 3</h1>
  <p>Запомни и открой все розовые клетки</p>
  <Board/>
</div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  name: 'App',
  components: {
    Board,
  }
}
</script>

<style>

.game{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.game__logo{
  max-width: 150px;
}
</style>
