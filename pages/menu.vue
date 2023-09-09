<template>
    <div class="cafe-photo">
    <div class="text-black menu container p-5">
        <div class="my-2 mx-16">
            <div class="w-full text-center"><h1 class="text-8xl fancy-font text-black">Our In-Store Menu</h1></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 mt-4 mx-4 lg:mx-16">
            <div class="mt-4">
                <h2 class="text-2xl menu-topic">Slices of Cake</h2>
                <ul class="list-none pl-4">
                    <li><div class="menu-item">Velvet Dream Slice</div><span class="italic">A decadent red velvet cake slice with cream cheese frosting, garnished with chocolate shavings and raspberry drizzle.</span></li>
                    <li><div class="menu-item">Lemon Bliss Slice</div><span class="italic">A zesty lemon cake slice bursting with citrus flavor, topped with lemon glaze and candied lemon peel.</span></li>
                    <li><div class="menu-item">Mocha Delight Slice</div><span class="italic">A rich mocha-flavored cake slice infused with espresso, layered with espresso buttercream and chocolate ganache.</span></li>
                    <li><div class="menu-item">Strawberry Vanilla Swirl Slice</div><span class="italic">A delightful slice with layers of vanilla and strawberry cake, swirled together, and topped with creamy strawberry-vanilla frosting and fresh strawberry slices.</span></li>
                    <li><div class="menu-item">Triple Chocolate Fudge Slice</div><span class="italic">A rich chocolate cake slice layered with decadent chocolate ganache and topped with chocolate chips.</span></li>
                </ul>
            </div>
            <div class="mt-4">
                <h2 class="text-2xl menu-topic">Cupcakes</h2>
                <ul class="list-none pl-4">
                    <li><div class="menu-item">Salted Caramel Heaven Cupcake</div><span class="italic">A moist caramel cupcake topped with silky salted caramel frosting, caramel drizzle, and a sprinkle of sea salt.</span></li>
                    <li><div class="menu-item">Cookies 'n Cream Delight Cupcake</div><span class="italic">A chocolate cupcake with chunks of Oreo cookies, smothered in cookies and cream frosting, and garnished with cookie crumbs.</span></li>
                    <li><div class="menu-item">Peanut Butter Cup Explosion Cupcake</div><span class="italic">A chocolate cupcake filled with peanut butter mousse, frosted with chocolate peanut butter frosting, and adorned with mini peanut butter cups.</span></li>
                    <li><div class="menu-item">Mint Chocolate Chip Delight Cupcake</div><span class="italic">A mint-infused chocolate cupcake studded with chocolate chips, topped with mint buttercream and mini chocolate chips.</span></li>
                </ul>
            </div>
            <div class="mt-4">
                <h2 class="text-2xl menu-topic">Other Treats</h2>
                <ul class="list-none pl-4">
                    <li><div class="menu-item">Toffee Crunch Cookie Bars</div><span class="italic">Irresistible cookie bars loaded with chunks of toffee, drizzled with dark chocolate, and sprinkled with crushed toffee bits.</span></li>
                    <li><div class="menu-item">S'mores Cookie Sandwiches</div><span class="italic">Soft and gooey chocolate chip cookies sandwiched with marshmallow fluff and a layer of chocolate ganache, then lightly torched for that campfire-inspired goodness.</span></li>
                    <li><div class="menu-item">Banana Bliss Bars</div><span class="italic">Moist and flavorful banana bars baked to perfection, generously studded with chopped walnuts and drizzled with a sweet cream cheese frosting.</span></li>
                </ul>
            </div>
            <div class="mt-4">
                <h2 class="text-2xl menu-topic">Drinks</h2>
                <ul class="list-none pl-4">
                    <li><div class="menu-item">Caramel Macchiato Delight</div><span class="italic">A decadent blend of espresso and steamed milk, swirled with rich caramel syrup, and topped with whipped cream and a drizzle of caramel sauce.</span></li>
                    <li><div class="menu-item">Bubblegum Bliss Bubble Tea</div><span class="italic">A whimsical bubble tea featuring chewy tapioca pearls infused with bubblegum flavor, mixed with a creamy coffee base, and topped with whipped cream and colorful sprinkles.</span></li>
                    <li><div class="menu-item">Cinnamon Roll Latte</div><span class="italic">A comforting latte infused with espresso, steamed milk, and cinnamon roll syrup, topped with a dollop of cream cheese frosting and a sprinkle of cinnamon.</span></li>
                    <li><div class="menu-item">Vanilla Bean Cappuccino</div><span class="italic">Espresso with steamed milk, vanilla bean syrup, and frothy foam.</span></li>
                </ul>
            </div>
        </div>
        <div class="text-center flex align-middle justify-center w-full px-3 lg:px-36 py-10">
            <img src="/images/divider.svg" class="block m-auto select-none" />
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
    height: 1500px;
    position: relative;
}

.menu {
    position: absolute;
    bottom: 8%;
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

.menu-item {
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
}
</style>