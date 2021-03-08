<template>
  <div id="hea">
    <header class="menu">
      <div id="header-center">
        <div id="logo-octoplus" className="notranslate">
          <router-link to="/" class="starts">
            <img
              src="../../assets/Images/Logo.png"
              class="logotipo"
              width="200"
              alt="Fitniss app"
            />
          </router-link>
        </div>
        <nav id="header-menu">
          <ul id="menu_ul">
            <li>
              <!-- <a to="/team">Sign In</a> -->
             <router-link to="/login" class="starts"> Sign In </router-link>
            </li>
            <li>
              <!-- <a to="/cursos">Sign Up</a> -->
             <router-link to="/cadastrar" class="starts"> Sign Up </router-link>
            </li>
          </ul>
        </nav>
        <!-- <div id="menu-hamburguer">
                    <a onClick={showMenu} to="#">|||</a>
                </div> -->
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  color: #cfcfcf;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
}
#header-center {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 1000px;
}
#header-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

#header-menu ul {
  display: flex;
}
#header-menu ul li {
  padding: 10px;
}
#header-menu ul li a {
  display: block;
  padding: 10px;
  color: white;
  text-decoration: none;
}

/* header nav ul a {
  color: #fff;
  margin-right: 20px;
  text-decoration: none;
  margin-top: -20px;
}

.logotipo {
  margin-right: 44%;
  margin-top: 20px;
} */
</style>