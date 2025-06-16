<template lang="pug">
.item(
  :class="classes"
  :style="{ '--level': item.level }"
)
  a(:href="'#' + item.id" @click.prevent="onItemClick" :data-item-index="item.itemIndex") {{ item.textContent }}
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
})
const emit = defineEmits(['item-click'])
const classes = computed(() => {
  return {
    'is-active': props.item.isActive && !props.item.isScrolledOver,
    'is-scrolled-over': props.item.isScrolledOver,
  }
})
const onItemClick = (event) => {
  emit('item-click', event, props.item.id)
}
</script>
<style lang="less" scoped>
.item {
  border-radius: 0.25rem;
  padding-left: calc(0.875rem * (var(--level) - 1));
  transition: all 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);

  &:hover {
    background-color: var(--bg-color-gray);
  }
}
.is-active a {
  font-weight: 600;
}

.is-scrolled-over a {
  font-weight: 600;
}

a {
  color: var(--text-color);
  display: flex;
  gap: 0.25rem;
  line-height: 1.5rem;
  text-decoration: none;

  &::before {
    content: attr(data-item-index) ".";
  }
}
</style>