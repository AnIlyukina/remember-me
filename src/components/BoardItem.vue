<template>
  <div :class="'item ' + (field.value == 1 ? 'item__active' : '')"></div>
</template>

<script>
export default {
  name:'BoardItem',
  props:{
    field:{
      type: Object,
      required: true
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
    background: rgba(255, 0, 212, 0.849);
    transform: rotateX(180deg);
 }
</style>