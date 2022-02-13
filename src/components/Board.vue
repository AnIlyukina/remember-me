<template>
  <div class="board">
    <BoardItem v-for="field in fields" :field ="field" :key="'field-' + field.id"/>
    <p class="board__difficult">Сложность: <strong>{{ difficult }}</strong></p>
    <button class="board__button" @click="onStart">Старт</button>
    <button>ddf
<button class="board__button" @click="onStart">Старт</button>
    </button>
  </div>
  
</template>

<script>

import BoardItem from './BoardItem.vue'
import {ref, onBeforeMount} from 'vue'

export default {
  name:'Board',
  props:{},
  components:{
    BoardItem
  },
  setup(){
    let difficult = ref(3)
    let fields = ref([])

    const number = 25

    const init = () => {

      fields.value = []

      for (let i = 0; i< number; i++){

      fields.value.push({
        id: i,
        clicked:false,
        value:0
       })
      }
    }

  

    onBeforeMount(init)

    return {
      difficult,
      fields,
      number,
      init
    }

  },
  methods:{
    onStart(){
      console.log('hvjhs')
      this.init();
      this.prepareGame()
    },
    prepareGame(){
      for( let i = 0; i < this.difficult; i++){
        const index = this.getRandom(0, this.number - 1);

        if(this.fields[index].value !== 1){
          this.fields[index].value = 1
        } else{
          i--;
        }
      }
    },
    getRandom(min,max){
      return Math.floor(Math.random()*(max - min))+min
    }
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