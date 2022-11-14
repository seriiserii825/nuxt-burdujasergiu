<template>
  <div class="page-services">
      <section-header title="Мои преимущества" subtitle="Услуги"/>
      <div class="page-services__wrap">
        <div class="page-services__item">
          <Service url="https://ru.vuejs.org/" title="Vue" text="Vue (произносится /vjuː/, примерно как view) — это прогрессивный фреймворк для создания пользовательских интерфейсов. В отличие от фреймворков-монолитов, Vue создан пригодным для постепенного внедрения.">
            <img src="/svg/vue.svg" alt="">
          </Service>
        </div>
        <div class="page-services__item">
          <Service url="https://ru.vuejs.org/" title="Vue" text="Vue (произносится /vjuː/, примерно как view) — это прогрессивный фреймворк для создания пользовательских интерфейсов. В отличие от фреймворков-монолитов, Vue создан пригодным для постепенного внедрения.">
            <img src="/svg/vue.svg" alt="">
          </Service>
        </div>
        <div class="page-services__item">
          <Service url="https://ru.vuejs.org/" title="Vue" text="Vue (произносится /vjuː/, примерно как view) — это прогрессивный фреймворк для создания пользовательских интерфейсов. В отличие от фреймворков-монолитов, Vue создан пригодным для постепенного внедрения.">
            <img src="/svg/vue.svg" alt="">
          </Service>
        </div>
        <div class="page-services__item">
          <Service url="https://ru.vuejs.org/" title="Vue" text="Vue (произносится /vjuː/, примерно как view) — это прогрессивный фреймворк для создания пользовательских интерфейсов. В отличие от фреймворков-монолитов, Vue создан пригодным для постепенного внедрения.">
            <img src="/svg/vue.svg" alt="">
          </Service>
        </div>
        <div class="page-services__item">
          <Service url="https://ru.vuejs.org/" title="Vue" text="Vue (произносится /vjuː/, примерно как view) — это прогрессивный фреймворк для создания пользовательских интерфейсов. В отличие от фреймворков-монолитов, Vue создан пригодным для постепенного внедрения.">
            <img src="/svg/vue.svg" alt="">
          </Service>
        </div>
      </div>
  </div>
</template>
<script>
import Service from "@/elements/Service";
import SectionHeader from "@/ui/SectionHeader";

export default {
  components: {Service, SectionHeader},
  layout: 'default'
}
</script>
<style lang="scss">
.page-services {
  &__wrap {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    grid-gap: 8rem;
    padding: 8rem;
  }
  &__item {
    padding: 4rem;
    box-shadow: 0 4px 14px -2px rgba(0,0,0,.4);
    border-radius: 1rem;
    overflow: hidden;
  }
}
</style>
