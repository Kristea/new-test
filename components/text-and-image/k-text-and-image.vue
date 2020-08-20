<template>
  <section class="section" :class="wrapperClass" :style="wrapperStyle">
    <k-image :id="image" v-if="fullBleed" />
    <div class="columns">
      <div class="column is-one-third box">
        <h2 v-if="headline" class="title is-2">{{ headline }}</h2>
        <div v-if="content" class="content">{{ content }}</div>
        <nuxt-link v-if="cta" :to="cta.link">{{ cta.text }}</nuxt-link>
      </div>
      <div class="column is-two-thirds">
        <k-image :id="image" v-if="!fullBleed" />
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    components: {
      'k-image': () => import("@weflocc/kata-image"),
      // 'k-image': () => import("../../k-image/src/k-image"),
    },
    computed: {
      headline: function() {
        return this.sliceData.headline ? this.sliceData.headline : null
      },
      content: function() {
        return this.sliceData.content ? this.sliceData.content : null
      },
      image: function() {
        let path = this.sliceData.image ? this.sliceData.image : null

        return path[0] == '/' ? path.slice(1) : path

        // the leading trailing slash in the path from forestry breaks cloudinary URLs...


      },
      cta: function() {
        return this.sliceData.cta ? this.sliceData.cta : null
      },
      textPosition: function() {
        return this.sliceData.options.textPosition ? this.sliceData.options.textPosition : null
      },
      imageStyle: function() {
        return this.sliceData.options.imageStyle ? this.sliceData.options.imageStyle : null
      },
      wrapperClass: function() {
        let wrapperClass = ''
        if (this.textPosition) { wrapperClass += ' text-position-' + this.textPosition}
        if (this.imageStyle) { wrapperClass += ' img-style-' + this.imageStyle}

        return wrapperClass
      },
      fullBleed: function() {
        return this.imageStyle ? this.imageStyle.includes('full-bleed' ) : null
      },
      wrapperStyle: function() {
        // if ( this.fullBleed ) {
        //   const imgPathRoot = '//res.cloudinary.com/floccimages/image/upload/'
        //   const imgParams = 'w_auto/c_scale,dpr_auto,f_auto,q_auto,w_auto/'
        //   let imgUrl = imgPathRoot + imgParams + this.image
        //   return 'background-image : url(' + imgUrl + ')'
        // }
      }
    },
    props: {
      sliceData: {
        type: Object,
        required: true
      },
      // textPosition: {
      //   type: String,
      //   default: 'left',
      //   validator: function (value) {
      //     return ['left', 'right'].indexOf(value) !== -1
      //   }
      // },
      // imageStyle: {
      //   type: String,
      //   default: 'normal',
      //   validator: function (value) {
      //     return ['normal', 'tall', 'square', 'full-bleed-50', 'full-bleed-100'].indexOf(value) !== -1
      //   }
      // },


    },
  }
</script>

<style lang="scss">
  .text-position-right .columns {
    flex-direction: row-reverse;
  }

  .img-style-tall {
    img {
      height: 100vh;
      object-fit: cover;
    }
  }

  .img-style-full-bleed-100 {
    height: 100vh;
    position: relative;
    .columns {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }

</style>
