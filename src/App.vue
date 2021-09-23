<template>
   <div id="app">
      <div class="header">
         <ul v-if="step > 0" class="header-button-left">
            <li v-on:click="step--">Cancel</li>
         </ul>
         <img src="./assets/logo.png" class="logo" />

         <ul v-if="step == 1" class="header-button-right">
            <li v-on:click="step++">Next</li>
         </ul>
         <ul v-if="step == 2" class="header-button-right">
            <li v-on:click="publish">Publish</li>
         </ul>
      </div>

      <Body
         :newFilter="newFilter"
         v-on:textwrite="textWrite = $event"
         :Postings="Postings"
         :step="step"
         :imgsrc="imgsrc"
      />

      <button v-if="step == 0" v-on:click="showMore">더보기</button>

      <div class="footer" v-if="step == 0">
         <ul class="footer-button-plus">
            <input v-on:change="upload" type="file" id="file" class="inputfile" />
            <label for="file" class="input-plus">+</label>
         </ul>
      </div>
   </div>
</template>

<script>
import Body from "./components/Body.vue";
import Postdata from "./assets/postdata.js";
import EventBus from "./bus.js";
import axios from "axios";

export default {
   name: "App",
   data() {
      return {
         step: 0,
         imgsrc: "",
         Postings: Postdata,
         textData: "",
         textWrite: "",
         newFilter: "",
         trans: "",
      };
   },
   components: {
      Body: Body,
   },
   methods: {
      showMore() {
         axios
            .get("https://yogoho210.github.io/postdata2.json")
            .then((a) => {
               this.Postings.push(a.data);
            })
            .catch(() => {
               console.log("에러났어요");
            });
      },
      upload(e) {
         this.step = this.step + 1;

         let file = e.target.files;
         let reader = new FileReader();
         reader.readAsDataURL(file[0]);
         reader.onload = (e) => {
            this.imgsrc = e.target.result;
         };
      },
      publish() {
         this.step = 0;

         var objectData = {
            name: "myName",
            userImage: "https://placeimg.com/100/100/arch",
            postImage: this.imgsrc,
            likes: 0,
            date: "May 15",
            liked: false,
            caption: this.textWrite,
            filter: this.newFilter,
         };
         // this.Postings.push(); 배열 뒤에 추가
         this.Postings.unshift(objectData); //배열 앞에 추가
         this.textWrite = "";
      },
   },
   mounted() {
      EventBus.$on("sa", (data) => {
         this.newFilter = data;
      });
      EventBus.$on("tran", (data) => {
         this.trans = data;
      });
      EventBus.$on("cont", (data, num) => {
         this.Postings[num].likes = this.Postings[num].likes + data;
      });
   },
};
</script>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
}
body {
   margin: 0;
}
ul {
   padding: 5px;
   list-style-type: none;
}
.header {
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   height: 50px;
   background-color: white;
   border-bottom: 1px solid #ddd;
}
.logo {
   display: block;
   width: 25px;
   margin: 0 auto;
}
.header-button-left,
.header-button-right {
   width: 70px;
   color: skyblue;
   cursor: pointer;
}
.footer {
   width: 100%;
   position: sticky;
   bottom: 0;
   padding-bottom: 10px;
   background-color: white;
}
.footer-button-plus {
   width: 80px;
   margin: auto;
   text-align: center;
   cursor: pointer;
   font-size: 24px;
   padding-top: 12px;
}
.sample-box {
   width: 100%;
   height: 600px;
   background-color: bisque;
}
.inputfile {
   display: none;
}
.input-plus {
   padding: 10px;
   cursor: pointer;
}
#app {
   box-sizing: border-box;
   font-family: "consolas";
   margin-top: 60px;
   width: 100%;
   max-width: 460px;
   margin: auto;
   position: relative;
   border-right: 1px solid #eee;
   border-left: 1px solid #eee;
}
</style>
