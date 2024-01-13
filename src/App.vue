<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n({
  useScope: 'global',
  messages: {
    nl: {
      hello: "Hallo"
    },
    en: {
      hello: "Hello"
    }
  }
})
</script>

<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100dvh">
    {{ t('hello') }}
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  color: #cad3f5;
  background: #181926;
}
</style>