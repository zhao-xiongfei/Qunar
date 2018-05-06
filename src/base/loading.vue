<!--  -->
<template>
  <div class='loading'>
<div class="line-spin-fade-loader">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
</div>
</template>

<script>
export default {};
</script>
<style scoped>
.line-spin-fade-loader {
    display:inline-block;
  position: relative;
  top: -10px;
  left: -4px;
  transform: scale(0.5);
}

.line-spin-fade-loader > div:nth-child(1) {
  top: 20px;
  left: 0;
  -webkit-animation: line-spin-fade-loader 1s -0.70s infinite ease-in-out;
  animation: line-spin-fade-loader 1s -0.70s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(2) {
  top: 13.63636px;
  left: 13.63636px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: line-spin-fade-loader 1s -0.60s infinite ease-in-out;
  animation: line-spin-fade-loader 1s -0.60s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(3) {
  top: 0;
  left: 20px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-animation: line-spin-fade-loader 1s -0.50s infinite ease-in-out;
  animation: line-spin-fade-loader 1s -0.50s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(4) {
  top: -13.63636px;
  left: 13.63636px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-animation: line-spin-fade-loader 1s -0.40s infinite ease-in-out;
  animation: line-spin-fade-loader 1s -0.40s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(5) {
  top: -20px;
  left: 0;
  -webkit-animation: line-spin-fade-loader 1s -0.30s infinite ease-in-out;
  animation: line-spin-fade-loader 1s -0.30s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(6) {
  top: -13.63636px;
  left: -13.63636px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: line-spin-fade-loader 1s -0.20s infinite ease-in-out;
  animation: line-spin-fade-loader 1s -0.20s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(7) {
  top: 0;
  left: -20px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-animation: line-spin-fade-loader 1s -0.10s infinite ease-in-out;
  animation: line-spin-fade-loader 1s -0.10s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(8) {
  top: 13.63636px;
  left: -13.63636px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-animation: line-spin-fade-loader 1s 0s infinite ease-in-out;
  animation: line-spin-fade-loader 1s 0s infinite ease-in-out;
}

.line-spin-fade-loader > div {
  background-color: #00BCD4;
  width: 4px;
  height: 35px;
  border-radius: 2px;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  position: absolute;
  width: 5px;
  height: 15px;
}

@-webkit-keyframes line-spin-fade-loader {
  50% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
}

@keyframes line-spin-fade-loader {
  50% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
}
</style>