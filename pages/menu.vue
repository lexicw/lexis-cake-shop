<template>
    <div class="cafe-photo">
    <div class="text-black menu container p-5">
        <div class="my-2 mx-16">
            <div class="w-full text-center"><h1 class="text-8xl fancy-font text-pink-500">Our Menu</h1></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mt-4 mx-16">
            <div class="mt-4">
                <h2 class="text-2xl menu-topic">Cakes</h2>
                <ul class="list-none pl-4">
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                </ul>
            </div>
            <div class="mt-4">
                <h2 class="text-2xl menu-topic">Cupcakes</h2>
                <ul class="list-none pl-4">
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                </ul>
            </div>
            <div class="mt-4">
                <h2 class="text-2xl menu-topic">Other Treats</h2>
                <ul class="list-none pl-4">
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                </ul>
            </div>
            <div class="mt-4">
                <h2 class="text-2xl menu-topic">Drinks</h2>
                <ul class="list-none pl-4">
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                </ul>
            </div>
        </div>
        <div class="text-center flex align-middle justify-center w-full px-36 py-10">
            <img src="/Images/divider.svg" class="block m-auto select-none" />
            </div>
    </div>
</div>
</template>

<style scoped>
.cafe-photo {
    background: url('/images/cupcakes.webp' ) repeat fixed 100%;
    background-size: cover;
    color: #FFF;
    background-position-x: center;
    height: 1200px;
    position: relative;
}

.menu {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: rgba(255,255,255,0.9);
    background-size: 240.00px 240.00px;
}

.menu-topic {
    color: #000;
    background-color: #f49ac0;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 12px;
    padding-right: 12px;
}
</style>