<template>
  <page>
    <template v-slot:main>
      <div>

      </div>
      <h2 class="container">Footer with call to action attached</h2>
      <k-footer :showCta="footer1"/>

      <h2 class="container">Basic no frills footer</h2>
      <k-footer/>

    </template>

  </page>
</template>


<script>

    export default {

        head() {
            return {
                title: this.pageContent.page_title + ' - ' + 'nrml',
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    {hid: 'description', name: 'description', content: 'My custom description'}
                ]
            }
        },
        data() {
            return {
                footer1: true,
                footer2: false
            }
        },
        async asyncData({params, payload}) {
            let pageContent = await require(`~/assets/content/pages/Home.json`)
            return {
                pageContent
            }
        },
    }
</script>
