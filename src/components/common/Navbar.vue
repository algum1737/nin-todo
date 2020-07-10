<template>
  <nav>
    <!-- 스낵바!!! 이게 팝업 같은 느낌이더라 -->
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>
        Awesome! You added a new project.
      </span>
      <v-btn text color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-toolbar flat>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!--드롭다운 메뉴-->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" color="grey">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- 옆에서 나오는 나브바 -->
    <v-navigation-drawer
      temporary
      absolute
      v-model="drawer"
      app
      class="primary"
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar-1.png" alt="" />
          </v-avatar>
          <p class="white--text subheading mt-1">
            The Net Ninja
          </p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <Popup @projectAdded="snackbar = true"></Popup>
        </v-flex>
      </v-layout>
      <v-list flat>
        <v-list-item-group v-model="link" color="primary">
          <v-list-item
            v-for="(link, i) in links"
            :key="i"
            router
            :to="link.route"
          >
            <v-list-item-action>
              <v-icon class="white--text" v-text="link.icon"></v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="white--text"
                v-text="link.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from '@/components/common/Popup';
export default {
  components: {
    Popup,
  },
  data() {
    return {
      drawer: false,
      link: 1,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/' },
        { icon: 'folder', text: 'My Projects', route: '/projects' },
        { icon: 'person', text: 'Team', route: '/team' },
      ],
      snackbar: false,
    };
  },
};
</script>

<style>
.project.complete {
  border-left: 10px solid #3cd1c2;
}
.project.ongoing {
  border-left: 10px solid orange;
}
.project.overdue {
  border-left: 10px solid tomato;
}
</style>
