import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/starter/hero/hero";
// import Infobox from "~/components/starter/infobox/infobox";

export default component$(() => {
  return (
    <>
      <Hero />
      <div class="">
        <div class="container mx-auto flex w-full flex-col items-center gap-32">
          <section
            class="flex w-full flex-col items-center gap-4 p-4 "
            id="about_us"
          >
            <h2>About Us</h2>
            <p class="max-w-prose">
              At Boba Fusion, we blend the bold flavors of Hispanic heritage
              with the refreshing essence of boba. Inspired by our CEO's
              Southwestern roots and a passion for innovation, we've created a
              unique boba experience that's as daring as it is delicious.
            </p>
            <p class="max-w-prose">
              Our mission is to offer a once-in-a-lifetime taste adventure,
              where every sip is a celebration of cultural fusion. From our
              signature Horchata Milk Tea to the zestful Mango Chamoy, our menu
              is a testament to our commitment to creativity and quality.
            </p>
            <p class="max-w-prose">
              Join us at Boba Fusion, where each drink is not just a beverage,
              but a journey into a world of bold, innovative flavors.
            </p>
          </section>
          <section
            id="menu"
            class="flex w-full flex-col items-center gap-4 p-4 p-4"
          >
            <h2>Menu</h2>
            <ul class="grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3">
              <li class="flex flex-col gap-4 p-4">
                <img
                  src="/horchataMilk.png"
                  alt="Horchata Milk Tea"
                  class="h-128 w-full object-cover"
                  height="1024"
                  width="1024"
                />
                <h3 class="text-xl">Horchata Milk Tea</h3>
                <p>
                  A creamy and sweet milk tea that combines traditional Mexican
                  rice drink horchata with the smoothness of milk tea, infused
                  with cinnamon and vanilla.
                </p>
                <p class="text-sm italic">
                  Ingredients: Horchata, Milk, Black Tea, Vanilla Extract,
                  Cinnamon, Tapioca Pearls.
                </p>
              </li>
              <li class="flex flex-col gap-4 p-4">
                <img
                  src="/mangoChamoy.png"
                  alt="Mango Chamoy Tea"
                  class="h-128 w-full object-cover"
                  height="1024"
                  width="1024"
                />
                <h3 class="text-xl">Mango Chamoy Tea</h3>
                <p>
                  A delightful fusion of sweet and tangy flavors, this tea
                  captures the essence of mango combined with the uniquely
                  spicy, salty, and sour taste of chamoy. It's a colorful and
                  refreshing beverage that offers a playful balance of flavors,
                  complete with the satisfying chew of tapioca pearls.
                </p>
                <p class="text-sm italic">
                  Ingredients: Mango Flavoring, Chamoy Sauce, Green Tea, Sugar,
                  Tapioca Pearls, Optional Lime Juice.
                </p>
              </li>
              <li class="flex flex-col gap-4 p-4">
                <img
                  src="/sandiaLimon.png"
                  alt="Sandía Límon Tea"
                  class="h-128 w-full object-cover"
                  height="1024"
                  width="1024"
                />
                <h3 class="text-xl">Sandía Límon Tea</h3>
                <p>
                  A refreshing and zesty bubble tea that perfectly balances the
                  sweet juiciness of watermelon with the tartness of fresh lime.
                  This drink is not only visually appealing but also offers a
                  burst of freshness, ideal for any season.
                </p>
                <p class="text-sm italic">
                  Ingredients: Watermelon flavoring, Fresh Lime Juice, Green
                  Tea, Sugar, Tapioca Pearls, Optional Mint Leaves.
                </p>
              </li>
            </ul>
          </section>
          <section
            id="values"
            class="flex w-full flex-col items-center gap-4 p-4 p-4"
          >
            <h2>Our Values</h2>
            <ul class="grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3">
              <li class="flex flex-col gap-4 p-4">
                <img
                  src="/quality.png"
                  alt="Quality"
                  class="h-128 w-full object-cover"
                  height="1024"
                  width="1024"
                />
                <h3 class="mt-2 text-xl font-semibold">Quality</h3>
                <p>
                  Our passion for quality shines through in our meticulous
                  process of crafting and perfecting each blend, developing
                  complex flavor profiles that are innovative and satisfying.
                </p>
              </li>
              <li class="flex flex-col gap-4 p-4">
                <img
                  src="/innovation.png"
                  alt="Innovation"
                  class="h-128 w-full object-cover"
                  height="1024"
                  width="1024"
                />
                <h3 class="mt-2 text-xl font-semibold">Innovation</h3>
                <p>
                  Innovation at our company means constantly pushing the
                  boundaries of what's possible with tea. We fuse ancient wisdom
                  with modern techniques to create unexpected blends and flavors
                  that are both new and familiar. By respecting the past and
                  embracing the future, we are able to offer an innovative tea
                  drinking experience that is both unique and memorable.
                </p>
              </li>
              <li class="flex flex-col gap-4 p-4">
                <img
                  src="/community.png"
                  alt="Community"
                  class="h-128 w-full object-cover"
                  height="1024"
                  width="1024"
                />
                <h3 class="mt-2 text-xl font-semibold">Community</h3>
                <p>
                  Community is the cornerstone of our ethos. We believe in the
                  power of tea to connect people and create communities. Our
                  initiatives support local farmers, foster fair trade
                  practices, and contribute to social programs that uplift the
                  communities where our tea is grown. Every sip of our tea is a
                  sip towards a more connected and equitable world.
                </p>
              </li>
            </ul>
          </section>
          <section
            id="contact"
            class="flex w-full flex-col items-center gap-4 p-4 p-4"
          >
            <h2>Keep up on exclusive info and updates!</h2>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdjQgSn5-RpmuF3Z5tzIPJoZ1pbptjq-aEBfGCsPbTz96cp8Q/viewform?embedded=true"
              width="120%"
              height="560"
            />
          </section>
          <section class="flex w-full flex-col items-center gap-4 p-4 p-4">
            <h2>What flavor should we try next?</h2>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe9fGQ0LzsZ-AmW2b-q6jDd2iSc77fsFhHKy7C61LpuYTkNug/viewform?embedded=true"
              width="120%"
              height="560"
            />
          </section>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Boba Fusion",
  meta: [
    {
      name: "description",
      content: "Where sip meets fusion",
    },
  ],
};

//
//
//
