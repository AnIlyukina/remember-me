<template>
  <div class="board">
    <BoardItem
        :game-status ='gameStatus'
        v-for="field in fields" :field ="field"
        :key="'field-' + field.id"
        @selectField = 'selectField($event)'
    />
    <p class="board__difficult">Сложность: <strong>{{ difficult }}</strong></p>
    <p v-if = "isWin" class="board__win"> Давай давай продолжай </p>
    <p v-if ='isFail' class="board__fail"> Ничего страшного нажми на старт и будет репит </p>

    <button class="board__button" @click="onStart" :disabled = '!canStartGame'>Старт</button>
  </div>

</template>

<script>

import {ref} from "vue";
import BoardItem from './BoardItem.vue'
import useGameInit from "@/components/composables/useGameInit";
import useGameStart from "@/components/composables/useGameStart";
import useGameProcess from "@/components/composables/useGameProcess";
import {GAME_STATUS} from "@/constants";

export default {
  name:'Board',
  props:{},
  components:{
    BoardItem
  },
  setup(){
    const gameStatus = ref(GAME_STATUS.NONE)
    const number = 25

    const { difficult, fields,init} = useGameInit(number)
    const { onStart, canStartGame } = useGameStart(init, difficult, fields,number, gameStatus)
    const { selectField, isWin, isFail} = useGameProcess(fields, gameStatus, difficult, onStart )


    return {
      difficult,
      fields,
      number,
      init,
      onStart,
      gameStatus,
      canStartGame,
      selectField,
      isWin,
      isFail
    }

  },
  methods:{

  }
}
</script>

<style>

.board{
  width: 300px;
  background-color: rgba(63, 221, 213, 0.37);
  text-align: center;
}

.board__difficult{
  margin: 0 0 10px 0;
}

</style>