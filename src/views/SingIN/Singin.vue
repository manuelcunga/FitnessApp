<template>
  <div id="main">
    <div class="container">
      <div class="content-sign">
        <h2>Sign In</h2>
        <p>Continue your Training</p>
        <form action="">
          <input 
          type="text"
          v-model="email"
           placeholder="E-mail" />
          <input 
          type="password"
          v-model="password"
           placeholder="password"  />
          <button class="button-all">Sign In</button>
          <router-link to="/cadastrar" class="starts"> Or Sign Up </router-link>
        </form>
      </div>
      <div class="image-singIn">
        <img src="../../assets/Images/womem.png" alt="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sign in',
  data(){
    return{
       email: '',
        password: ''
    }
  },
  methods:{
    ValidarCampo(){
       
      
    }
  }
};
</script>

<style scoped>
.container {
  width: 1020px;
  min-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content-sign {
  margin-top: -15%;
}
.content-sign h2 {
  font-size: 187%;
  color: #fff;
  font-weight: bold;
  margin-bottom: 0.4em;
}
.content-sign p {
  color: #fff;
  font-weight: normal;
  opacity: 0.7;
  margin-bottom: 1em;
}


.content-sign a {
  display: flex;
  font-size: 90%;
  justify-content: center;
  color: #ffffff;
}
</style>