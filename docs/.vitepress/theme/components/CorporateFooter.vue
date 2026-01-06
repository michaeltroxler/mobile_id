<template>
  <footer class="mobileid-footer">
    <div class="container">
      <span>© Swisscom – Mobile ID</span>
      <a href="https://www.mobileid.ch/de" target="_blank" rel="noopener">Zur Hauptseite</a>
    </div>
  </footer>
</template>

<style scoped>
.mobileid-footer {
  background-color: #f5f7f8;
  color: #555;
  padding: 2rem;
  border-top: 1px solid #ddd;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mobileid-footer a {
  color: var(--vp-c-brand);
  text-decoration: none;
}
.mobileid-footer a:hover {
  text-decoration: underline;
}
</style>
