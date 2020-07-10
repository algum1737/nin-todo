<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on" class="success">Add new project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Infomation"
            v-model="content"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-textarea>

          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                :rules="inputRules"
                :value="formattedDate"
                clearable
                label="Due date"
                prepend-icon="date_range"
                v-on="on"
              >
              </v-text-field>
            </template>
            <v-date-picker v-model="due" @change="menu = false"></v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn
            text
            class="success mx-0 mt-3"
            @click="submit"
            :loading="loading"
            >Add project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { format, parseISO } from 'date-fns';
import db from '@/fb';

export default {
  data() {
    return {
      title: '',
      content: '',
      due: null,
      menu: false,
      inputRules: [
        v => (v && v.length >= 3) || 'Minimum length is 3 characters',
      ],
      loading: false,
      dialog: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: format(parseISO(this.due), 'do MMMM yyyy'),
          person: 'The Net Ninja',
          status: 'ongoing',
        };
        db.collection('projects')
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit('projectAdded');
          });
      }
    },
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), 'do MMMM yyyy') : '';
    },
  },
};
</script>

<style></style>
