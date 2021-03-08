<template>
  <div id="app">
    <Theader />
    <router-view/>
  </div>
</template>
<script>
   import Theader from '@/components/Hedaer/Theader'
export default {
  name: 'menu',
  components:{
   Theader

  },
  data(){

  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
  list-style: none;
  border: none;

}

.button-all{
  padding: 8px 15px;
  width: 287px;
  font-weight: bold;
  height: 40px;
  border-radius: 8px;
  background: #c30302;
  margin: 2em 0 1em 0;
  color: #fff;
  text-align: center;
  cursor: pointer;
}
 input{
    font-size: 14px;
  height: 40px;
  font-weight: bold;
  opacity: 0.7;
  margin-bottom: 0.5em;
  padding: 8px 33px 8px 10px;
  width: 287px;
  border-radius: 8px;
  background: #272626;
  color: rgba(255, 255, 255, 0.7);
  margin: 0.5em 0em 1em 0;
  display: flex;
}

#app {
  font-family:'poppins' Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
::-webkit-scrollbar{
  width: 5px;
  background-color: #202024;
}
::-webkit-scrollbar-thumb{
  background-color: #C30302;
}

body{
  background: #020202;
    font-family:'Roboto', 'Poppins', sans-serif;
}

</style>
