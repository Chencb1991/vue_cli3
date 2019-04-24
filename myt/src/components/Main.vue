<template>
  <div class="mains">
   
  </div>
</template>

<script>
export default {
  name: "mains",
  props: {
    msg: String
  },
  data(){
    return{

    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      this.$axios.get('/api', {
　　    params: { type: 'QHCC',
          sty: 'QHSYCC',
          stat: '3',
          fd: '2019-04-22',
          mkt: '069001008',
          code: 'ma1909',
          sc: 'MA'}
        })
      .then(function (response) {
         //console.log(response.data.slice(1).substring(0,response.data.length-2));
         let datass = response.data.slice(1).substring(0,response.data.length-2);
         console.log(JSON.parse(datass));
         let datasmore = JSON.parse(datass)[0].净多头龙虎榜;
         let datasless = JSON.parse(datass)[0].净空头龙虎榜;
         let datasempty = JSON.parse(datass)[0].空头增仓龙虎榜;
         let datasemptyL = JSON.parse(datass)[0].空头减仓龙虎榜;
         let datasover = JSON.parse(datass)[0].多头增仓龙虎榜;
         let datasoverL = JSON.parse(datass)[0].多头减仓龙虎榜;
         /////////////////////////////////////////////
         let datasmorecol = [];//净多头龙虎榜
         let dataslesscol = [];//净空头龙虎榜
         let arrempty = []; //空头增仓龙虎榜
         let arremptyL = []; //空头减仓龙虎榜
         let arreover = []; //多头增仓龙虎榜
         let arreoverL = []; //多头减仓龙虎榜
         /////////////////////////////////////////////
         for(var i=0;i<datasmore.length;i++){
            let datasmorearr = datasmore[i].split(",");
             datasmorecol.push({'id':datasmorearr[0],'name':datasmorearr[1]})     
         };
         for(var i=0;i<datasless.length;i++){
            let dataslessarr = datasless[i].split(",");
             dataslesscol.push({'id':dataslessarr[0],'name':dataslessarr[1]})     
         };

         for(var i=0;i<datasempty.length;i++){
            let datasemptyarr = datasempty[i].split(",");
             arrempty.push({'id':datasemptyarr[0],'name':datasemptyarr[1]})     
         };

         for(var i=0;i<datasemptyL.length;i++){
            let datasemptyarrL = datasemptyL[i].split(",");
             arremptyL.push({'id':datasemptyarrL[0],'name':datasemptyarrL[1]})     
         };

         for(var i=0;i<datasover.length;i++){
            let datasoverarr = datasover[i].split(",");
             arreover.push({'id':datasoverarr[0],'name':datasoverarr[1]})     
         };

         for(var i=0;i<datasoverL.length;i++){
            let datasoverarrL = datasoverL[i].split(",");
             arreoverL.push({'id':datasoverarrL[0],'name':datasoverarrL[1]})     
         };




         console.log(datasmorecol); 
         console.log(dataslesscol); 
         console.log(arrempty); 
         console.log(arreover); 
         console.log(arremptyL); 
        console.log(arreoverL); 
      })
      .catch(function (error) {
      console.log(error);
      });
      },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
