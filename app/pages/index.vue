<template>
  <div>
    <h1>FISH</h1>
    <form @submit.prevent="handlePress">
      <input
        v-model="msg"
        type="text"
        placeholder="Enter message..."
      >
      <UButton
        type="submit"
        color="primary"
      >
        Submit
      </UButton>
    </form>
    <p v-if="serverResponse">
      {{ serverResponse }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('')
const serverResponse = ref('')

const handlePress = async () => {
  if (!msg.value) return

  try {
    const response = await $fetch('/api/echo', {
      method: 'POST',
      body: {
        text: msg.value
      }
    })

    serverResponse.value = response.msg
    msg.value = ''
  }
  catch (error) {
    console.error('API error: ', error)
  }
}
</script>

<style scoped></style>
