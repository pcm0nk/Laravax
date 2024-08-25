<script>
export default {
  data() {
    return {
      firstnav: true,
      hoverit: true,
      menuarray: [
        {
          id: 0,
          text: "Organization Chart",
          icon: "mdi-family-tree",
          iconappend: "mdi-chevron-right",
          active: false,
          to: "",
        },
        {
          id: 99,
          text: "Logout",
          icon: "mdi-logout",
          iconappend: "",
          active: false,
          to: "",
        },
      ],
      submenuarray: [
        {
          id: 0,
          menuid: 0,
          text: "Actions",
          value: "actions",
          menuoption: [
            {
              opid: 0,
              icon: "mdi-circle-small",
              text: "Charts",
              to: "/charts",
            },
          ],
        },
        {
          id: 1,
          menuid: 0,
          text: "Basic Info",
          value: "basicinfo",
          menuoption: [
            {
              text: "Levels",
              opid: 0,
              to: "/basicinfo",
              icon: "mdi-circle-small",
            },
            {
              text: "Top Chart",
              opid: 1,
              to: "/topchart",
              icon: "mdi-circle-small",
            },
          ],
        },
        {
          id: 2,
          menuid: 0,
          value: "reports",
          text: "Reports",
          menuoption: [],
        },
      ],
      secondnav: false,
      open: ["actions", "basicinfo", "reports"],
      admins: [
        ["Management", "mdi-account-multiple-outline"],
        ["Settings", "mdi-cog-outline"],
      ],
      cruds: [
        ["Create", "mdi-plus-outline"],
        ["Read", "mdi-file-outline"],
        ["Update", "mdi-update"],
        ["Delete", "mdi-delete"],
      ],
    };
  },

  methods: {
    onClickOutside() {
      this.secondnav = false;
    },
    onCloseConditional() {
      return true;
    },
    runsecondnav(index, id) {
      if (id == 99) {
        useApi().logout();
        return false;
      }
      this.hoverit = false;
      this.secondnav = true;
      this.menuarray[index]["active"] = true;
    },
  },
};
</script>
<template>
  <div>
    <v-navigation-drawer
      rail
      @mouseleave="hoverit = true"
      :model-value="firstnav"
      :expand-on-hover="hoverit"
      color="navcolor"
    >
      <v-list-item
        nav
        :class="{ 'ml-2': hoverit }"
        prepend-avatar="https://randomuser.me/api/portraits/women/34.jpg"
      ></v-list-item>
      <v-divider></v-divider>

      <v-list density="compact" nav class="px-0">
        <template v-for="(item, index) in menuarray" :key="index">
          <v-list-item
            class="body-1"
            :active="item.active"
            @click="runsecondnav(index, item.id)"
          >
            <template v-slot:prepend>
              <v-icon class="ml-2">{{ item.icon }}</v-icon>
            </template>
            <template v-slot:title>
              <span class="text-body-1">{{ item.text }}</span>
            </template>
            <template v-slot:append v-if="item.iconappend != ''">
              <v-icon class="ml-2">{{ item.iconappend }}</v-icon>
            </template>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-no-ssr>
      <v-navigation-drawer
        :temporary="true"
        color="secondnavcolor"
        @mouseleave="secondnav = false"
        :model-value="secondnav"
      >
        <v-list
          v-click-outside="{
            handler: onClickOutside,
            closeConditional: onCloseConditional,
          }"
          v-if="secondnav"
          v-model:opened="open"
          open-strategy="multiple"
        >
          <v-list-group
            v-for="(sitem, index) in submenuarray"
            :value="sitem.value"
            :key="sitem.value"
          >
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                class="text-body-2 text--on-surface"
                :title="sitem.text"
                color="on-surface"
              >
              </v-list-item>
            </template>
            <v-list-item
              v-for="(mitem, index) in sitem.menuoption"
              :key="mitem.opid"
              @click="secondnav = false"
              :to="mitem.to"
            >
              <v-list-item-title class="text-subtitle-2">
                <v-icon :icon="mitem.icon"></v-icon>
                {{ mitem.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </v-no-ssr>
  </div>
</template>
