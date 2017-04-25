<template>
  <ul>
    <li :class="{ check: task.checked, private: task.private }" v-for="task in tasks" v-if="!task.private || (currentUser && currentUser._id === task.owner)">
      <button class="delete" @click="deleteThisTask(task)">
        &times;
      </button>
      <input type="checkbox" readOnly :value="task.checked" @click="toggleChecked(task)">
      <template v-if="currentUser && currentUser._id === task.owner">
        <button class="toggle-private" @click="togglePrivate(task)">{{ task.private ? 'Private' : 'Public' }}</button>
      </template>
      <span class="text">
        <strong>{{ task.username }}</strong>: {{ task.text }}
      </span>
    </li>
  </ul>
</template>

<script>
import { Meteor } from 'meteor/meteor'

export default {
  name: 'Tasks',
  props: {
    tasks: {
      type: Array,
      default: () => []
    },
    currentUser: {
      type: Object,
      default: () => null
    }
  },
  methods: {
    toggleChecked (task) {
      // Set the checked property to the opposite of its current value
      Meteor.call('tasks.setChecked', task._id, !task.checked)
    },
    deleteThisTask (task) {
      Meteor.call('tasks.remove', task._id)
    },
    togglePrivate (task) {
      Meteor.call('tasks.setPrivate', task._id, !task.private)
    }
  }
}
</script>
