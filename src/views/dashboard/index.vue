<template>
  <div id="user">
    <header>
   <section>
      <h2>All your records weekly</h2>
      <label for="">No records registed in this week.</label>
      <div class="content-dashboard"></div>
      <div class="dashboa">
        <ul>
          <li>
            <strong> Training </strong>
            <p>2</p>
          </li>
          <li>
            <strong> Calories </strong>
            <p>112</p>
          </li>
          <li>
            <strong> Minutes </strong>
            <p>255</p>
          </li>
          <li>
            <strong> Level </strong>
            <p>2</p>
          </li>
        </ul>
      </div>

          <ListDesafion />
      <div class="desafio">
        <button class="button-dashboard" to="">+ New Challange</button>
      </div>
    </section>
    </header>
 
  </div>
</template>

<script>
  import ListDesafion from '@/components/desafio/Tdesafio'
export default {
  name: 'desafio',
  components:{
    ListDesafion
  }
};
</script>

<style scoped>
section {
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
}
section .content-dashboard {
  margin-top: 5%;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
}
section label {
  display: flex;
  color: #fff;
  font-size: 90%;
  opacity: 0.7;
  font-weight: normal;
  opacity: 0.7;
  margin-bottom: 1em;
}
section h2 {
  display: flex;
  font-size: 100%;
  color: #fff;
  font-weight: bold;
  margin-bottom: 0.5em;
}

section .dashboa ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px; /* distanciamento entre os card */
  list-style: none;
}

section .dashboa ul li {
  color: #fff;
  background: #4d4d4d;
  opacity: 0.7;
  padding: 24px;
  border-radius: 8px;
  position: relative;
}
section .dashboa p {
  margin-top: 5px;
}

div .desafio {
  margin-top: 9%;
  
}
header{
  background: url("../../assets/Images/treinos.png");
  height: 250px;
}

.button-dashboard{

   padding: 8px 15px;
  width: 287px;
  font-weight: bold;
  height: 40px;
  border-radius: 8px;
  border: 2px solid #fff;
  margin: 2em 0 1em 0;
  color: rgb(255, 255, 255);
  text-align: center;
  cursor: pointer;
  background: #000000;
  opacity: 0.7;
  text-decoration: none;
}

</style>