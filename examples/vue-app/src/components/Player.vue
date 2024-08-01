<script setup>
import { onMounted } from 'vue'
import Mp4Player from '@ezuikit/player-mp4'

let player = null

onMounted(() => {
  // 默认自动播放
  player = new Mp4Player({
    id: 'container',
    url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  })
  // player.play()
})
</script>

<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<style>
#container {
  width: 600px;
  height: 400px;
  background: #000;
}
</style>
