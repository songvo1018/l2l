<template>
    <nav
            class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top fixed-top navbar-rounded shadow-lg"
            style="z-index: 500;"
    >
        <div class="container">
            <a class="navbar-brand text-dark">#Leave2live</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link text-dark active" href="http://t.me/fzf_team_bot">@telegram</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark active" v-on:click.self="switchToMap()" href="#">Map</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" v-on:click.self="switchToAbout()" href="#">About us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark">Sign up</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark">Log in</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import {setCurrentTab} from '@/tabs';
    export default {
        name: "NavigationBar",
        methods: {
            switchToMap: function () {
                setCurrentTab("map");
            },
            switchToAbout: function () {
                setCurrentTab("about");
            }
        },
    }
</script>

<style scoped>
    .navbar.navbar-dark.bg-dark{
        background-color: #ffffee!important;
        height: 70px;
        color: black!important;
    }
</style>
