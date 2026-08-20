<template>
  <div
    :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
    class="pt-5 p-st"
  >
    <div
      class="container"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div class="row align-items-center">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center">
          <img :src="picture" />
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5">
          <h1
            class="home-title"
            :class="{ pgray: !nightMode, 'text-light': nightMode }"
            >{{ name }} — Application Architect · Back-end Developer</h1
          >
          <div class="description" v-html="description"></div>
          <div>
            <p v-html="email"></p>
          </div>
          <div class="text-center pb-4"></div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script lang="ts">
  import info from "../../info";

  export default {
    name: "Home",
    props: {
      nightMode: {
        type: Boolean,
      },
    },
    data() {
      return {
        picture: info.flat_picture,
        description: info.description,
        email : info.email,
        name: info.name,
        github: info.links.github
      };
    },
  };
  </script>

  <style scoped>
  .home-title {
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  img {
    max-width: 300px;
    margin-top: 60px;
    transform: rotateY(180deg);
  }

  @media only screen and (max-width: 580px) {
    img {
      object-fit: cover;
      border-radius: 50%;
      height: 200px;
      width: 200px;
      margin-top: 10px;
      margin-bottom: 10px;
      border: 2px solid rgb(205, 205, 205);
    }
  }

  .fa {
    font-size: 15px;
  }

  .btn {
    border-color: #669db3ff;
    color: #669db3ff;
  }

  .btn:hover {
    background-color: #669db3ff;
    border-color: #669db3ff;
    color: white;
  }

  .btn:focus {
    background-color: #669db3ff;
    border-color: #669db3ff;
    color: white;
  }

  .btn:focus {
    outline: none !important;
  }

  .description,
  p {
    line-height: 1.7;
    text-align: left;
    font-weight: 400;
  }

  /* LEAVES */
  </style>
