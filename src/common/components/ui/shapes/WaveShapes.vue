<template>
    <div class='container'></div>
</template>


<script setup></script>
<style scoped>
.container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    min-height: 200px;
    background-color: #3E606F;
    font-family: Roboto;
    overflow: hidden;
}

.container:before,
.container:after {
    content: "";
    position: absolute;
    left: 50%;
    min-width: 200vw;
    min-height: 200vw;
    background-color: #FCFFF5;
    animation-name: rotate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.container:before {
    bottom: 15vh;
    border-radius: 45%;
    animation-duration: 10s;
}

.container:after {
    bottom: 12vh;
    opacity: .5;
    border-radius: 47%;
    animation-duration: 10s;
}

@keyframes rotate {
    0% {
        transform: translate(-50%, 0) rotateZ(0deg);
    }

    50% {
        transform: translate(-50%, -2%) rotateZ(180deg);
    }

    100% {
        transform: translate(-50%, 0%) rotateZ(360deg);
    }
}
</style>
