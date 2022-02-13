<template>
  <div :class="getBoardItemClasses" @click="select(field.id)"></div>
</template>

<script>

import {FIELD, GAME_STATUS} from "@/constants";
import {computed} from "vue";

export default {
  name:'BoardItem',
  props:{
    field:{
      type: Object,
      required: true
    },
    gameStatus:{
      type: Number,
      required: false,
      default:GAME_STATUS.NONE
    }
  },
  setup(props){

    const getBoardItemClasses = computed(() =>{
      let classes = 'item';

      if( props.field.value === FIELD.FILLED &&
          props.gameStatus === GAME_STATUS.PREVIEW ||
          props.field.clicked &&
          props.field.value === FIELD.FILLED
      ){
        classes += ' item__active'
      }
      if(props.field.clicked &&
          props.field.value === FIELD.EMPTY){
        classes += ' item__error'
      }

      return classes
    });
    return{
      getBoardItemClasses
    }
  },
  methods:{
    select(id){

      if(this.gameStatus === GAME_STATUS.STARTED){
        this.$emit('selectField', id)
      }
    }
  }


}
</script>

<style>

 .item{
   width: 50px;
   height: 50px;
   position: relative;
   background-color: rgba(224, 192, 224, 0.849);
   display: inline-block;
   margin: 5px;
   cursor:pointer;
   transition: .4s;
   transform-style: preserve-3d ;
 }

 .item__active{
    background-color: rgba(255, 0, 212, 0.849);
    transform: rotateX(180deg);
 }

 .item__error{
   background-color: red;
   transform: rotateX(180deg);
 }
</style>