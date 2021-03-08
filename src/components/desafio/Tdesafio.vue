<template>
  <div id="ap">
         <h3>Challanges</h3>
    <div class="content-desafio">
 
      <ul>
        <li class="circule">
          <a href="">
            <img src="../../assets/Images/bigenner.png"  alt="" />
            <p>Biggner</p>
          </a>
        </li> <li class="circule">
          <a href="">
            <img src="../../assets/Images/advancd.png"  alt="" />
              <p>Intermediate</p>
          </a>
        </li> <li class="circule">
          <a href="">
            <img src="../../assets/Images/intermediate.png"  alt="" />
              <p>Advanced</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content-desafio {
   margin-top: 10%;
  display: flex;
  align-items: center;

}
.content-desafio ul {
    
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px; /* distanciamento entre os card */
  list-style: none;

   align-items: center;
   justify-content: center;
   margin: auto;
}
 h3 {
  display: flex;
  margin-top: 37px;
  color: #fff;
}
.content-desafio ul li.circule {
  
  border-radius: 50%;
  background: #4d4d4d;
   opacity: 0.7;
   width: 80px;
   height: 80px;
}
.content-desafio ul li.circule img{
   margin-top: 10px;
    width: 67px;
    height: 67px;
    align-items: center;
    margin: auto;
}
.content-desafio  p{
  color: #fff;
  margin-top: 20%;
}
</style>