<template>
  <div>
    <button class="base-button" role="button">
      <span class="text"><slot /></span>
    </button>
  </div>
</template>

<style scoped>
.base-button {
  align-items: center;
  background-image: linear-gradient(
    135deg,
    var(--secondary-dark) 40%,
    var(--primary-dark)
  );
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: "Codec cold", sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 54px;
  justify-content: center;
  letter-spacing: 0.4px;
  line-height: 1;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 3px;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.base-button:active {
  outline: 0;
}

.base-button:hover {
  outline: 0;
}

.base-button span {
  transition: all 200ms;
}

.base-button:hover span {
  transform: scale(0.9);
  opacity: 0.75;
}

@media screen and (max-width: 991px) {
  .base-button {
    font-size: 15px;
    height: 50px;
  }

  .base-button span {
    line-height: 50px;
  }
}
</style>
