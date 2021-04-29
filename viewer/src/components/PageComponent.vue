<template>
  <div class="hello">
    <ComponentGenerator v-for="component in nodes " :key="component.tagName+Math.random()" :nodes="component"/>
  </div>
</template>

<script>
import ComponentGenerator from './ComponentGenerator.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: { ComponentGenerator },
  data: function(){
    return {
      nodes: [{
        tagName: 'div',
        properties: {
          attrs: {href: '#',style:'background-color:green'}
        },
        children: [
          {
            tagName: 'h1',
            textNode: 'Hero'
          },
          {
            tagName: 'h3',
            textNode: 'YOU CAN CREATE VUE COMPONENTS OUT OF JSON'
          },         
          {
            tagName: 'a',
            properties: {
              attrs: {href: '#',style:'color:green'}
            },
            textNode: 'Vue.js'
          }
        ]
      },{
        tagName: 'div',
        properties: {
          attrs: {class:'card',style:'width: 18rem;'}
        },
        children: [
          {
            tagName: 'img',
            properties: {
              attrs: {src:'....',class:'card-img-top',alt:'...'}
            }
          },
          {
            tagName: 'div',
            properties: {
              attrs: {class:'card-body'}
            },
            children: [
              {
                tagName: 'h5',
                textNode: 'Card title',
                properties: {
                  attrs: {class:'card-title'}
                }
              },
              {
                tagName: 'p',
                textNode: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                properties: {
                  attrs: {class:'card-text'}
                }
              },
              {
                tagName: 'a',
                textNode: 'Go somewhere',
                properties: {
                  attrs: {href: '#',class:'btn btn-primary'}
                }
              }
            ]
          }
        ]
      }]
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
