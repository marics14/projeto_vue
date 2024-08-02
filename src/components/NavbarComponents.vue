<template>
    <nav>
        <ul>
            <router-link class="cursor" to="/">Páginas Inicial</router-link>
            <router-link to="videos">Video</router-link>
        </ul>
    </nav>
</template>


<style>
    nav {
    width: 100%;
    background-color: bisque;
    }

    ul {
    display: flex;
    padding: 1rem;
    gap: 1rem;
    cursor: pointer;
    }

    li {
    display: flex;
    }

    .cursor {
        cursor: pointer;
    }
</style>