<template>
  <header class="mobileid-header">
    <div class="container">
      <nav>
        <a href="/">Home</a>
        <a href="/integration/">Integration</a>
        <a href="/support/">Support</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.mobileid-header {
  background-color: var(--vp-c-brand);
  padding: 1rem 2rem;
  color: white;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}
.logo {
  height: 36px;
}
nav a {
  color: white;
  margin-left: 1.5rem;
  text-decoration: none;
  font-weight: 500;
}
nav a:hover {
  text-decoration: underline;
}
</style>
