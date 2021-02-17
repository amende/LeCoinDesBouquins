<template>
    <div>
        <hero></hero>
        <basic-elements></basic-elements>
        <inputs></inputs>
        <custom-controls></custom-controls>
        <navigation></navigation>
        <javascript-components></javascript-components>
        <icons></icons>
        <examples></examples>
        <download-section></download-section>
        <carousel></carousel>
    </div>
</template>
<script>
import Hero from '@/components/argon/Hero'
import BasicElements from '@/components/argon/BasicElements'
import Inputs from '@/components/argon/Inputs'
import CustomControls from '@/components/argon/CustomControls'
import Navigation from '@/components/argon/Navigation'
import JavascriptComponents from '@/components/argon/JavascriptComponents'
import Carousel from '@/components/argon/Carousel'
import Icons from '@/components/argon/Icons'
import Examples from '@/components/argon/Examples'
import DownloadSection from '@/components/argon/DownloadSection'

export default {
  name: 'components',
  components: {
    Hero,
    BasicElements,
    Inputs,
    CustomControls,
    Navigation,
    JavascriptComponents,
    Carousel,
    Icons,
    Examples,
    DownloadSection
  }
}
</script>
