<template>
    <main>
        <div id="map"></div>
    </main>
</template>

<script>
    import mapboxgl from "mapbox-gl";
    import usersData from "../assets/users.json";

    export default {

        data() {
            return {
                center: [36.51, 48.12],
                zoom: 2.1,
                windowWidth: window.innerWidth,
                users: usersData,
            };
        },
        mounted() {
            // create the map after the component is mounted
            this.createMap();

        },
        methods: {
            createMap() {
                // instantiate map.  this method runs once after the vue component is mounted to the dom
                this.map = new mapboxgl.Map({
                    accessToken:
                        "pk.eyJ1IjoiYmZyaWVkbHkiLCJhIjoiY2p4bHd1OXdpMGFycDN0bzFiNWR4d2VyNyJ9.3hQjvgyoPoCuRx-Hqr_BFQ",
                    container: "map",
                    // style: "mapbox://styles/mapbox/outdoors-v11",
                    style: "mapbox://styles/mapbox/streets-v12",
                    // style: "mapbox://styles/mapbox/navigation-night-v1",
                    minzoom: 5,
                    center: this.center, // use initial data as default
                    zoom: this.zoom,
                    hash: true // sets url's hash to #zoom/lat/lng
                });

                window.onresize = () => {
                    this.windowWidth = window.innerWidth
                }


                this.map.on("load", () => {
                    this.map.addControl(new mapboxgl.NavigationControl(), "top-right");
                    this.map.addControl(
                        new mapboxgl.GeolocateControl({
                            positionOptions: {
                                enableHighAccuracy: true,
                            },
                            trackUserLocation: true,
                        }),
                        "top-right"
                    );
                    this.map.addControl(
                        new mapboxgl.ScaleControl({
                            maxWidth: 100,
                            unit: "metric",
                        })
                    );

                    this.markers = this.users.map((user) => this.createMarker(user));

                })
            },
            createMarker(user) {
                const el = document.createElement("div");
                el.className = "marker";
                return new mapboxgl.Marker(el).setLngLat(user.coordinates).
                    setPopup(
                        new mapboxgl.Popup({ offset: 25, closeButton: false, }) // add popups
                            .setHTML(
                                `<h4>${user.name}</h4><p>${user.status}</p>`
                            )
                    ).addTo(this.map);

            }
        }
    };
</script>

<style>
    #map {
        height: 800px;
        width: 100%;
        /*max-width: 600px;*/
        margin: 0 auto;
        /*border: 1px solid darkgrey;*/
    }

    .text-container {
        max-width: 500px;
        display: flex;
        flex-direction: column;
        text-align: left;
        align-items: flex-start;
        margin: 0 auto; /* center text container */
    }

    .marker {
        background-color: gold;
        -webkit-mask-image: url("../assets/account.svg");
        mask-image: url("../assets/account.svg");
        /*background-image: url("../assets/person.svg");*/
        background-size: cover;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
    }
</style>