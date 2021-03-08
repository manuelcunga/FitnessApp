<template>
  <div class="home">
    <!-- tela inicial -->
    <section class="app">
      <div class="main-content">
        <img src="../../assets/Images/Logo.png" alt="Fitniss app" />
        <h1>Choose the goal you want to achive</h1>
            <br>
        <router-link to="/login" class="start"> Start Now </router-link>

      </div>
      <!-- <router-view /> -->
      <div class="contet-img">
        <img src="../../assets/Images/inicio.png" alt="image" />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.app {
  width: 1020px;
  min-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

section div.main-content {
  margin-top: -12%;
}
section div.main-content h1 {
  font-size: 90%;

  color: rgba(204, 204, 204, 0.808);
}
section div.main-content a.start {
  text-decoration: none;
  font-size: 90%;
  padding: 8px 25px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  background: #c30302;
  color: #fff;
  cursor: pointer;

 

}

section div.contet-img {
  justify-content: space-between;
}
</style>
