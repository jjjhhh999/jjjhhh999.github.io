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
          <img class="profile-photo" :src="picture" alt="구시완 프로필 사진" />
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5">
          <h1
            class="home-title"
            :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >
            <span class="home-name">{{ name }}</span>
            <span class="home-role">Back-end Developer · Application Architect</span>
          </h1>
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
    margin-bottom: 1.5rem;
  }

  .home-name,
  .home-role {
    display: block;
  }

  .home-name {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.2;
  }

  .home-role {
    margin-top: 0.35rem;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.35;
    opacity: 0.75;
  }

  .profile-photo {
    border: 1px solid rgba(38, 52, 60, 0.1);
    border-radius: 18px;
    box-shadow: 0 18px 45px rgba(38, 52, 60, 0.14);
    display: block;
    margin: 60px auto 0;
    max-width: 300px;
    object-fit: cover;
    object-position: center top;
    width: 100%;
  }

  @media only screen and (max-width: 580px) {
    .home-name {
      font-size: 28px;
    }

    .home-role {
      font-size: 17px;
    }

    .profile-photo {
      object-fit: cover;
      object-position: center 20%;
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
