import { component$ } from "@builder.io/qwik";
import { BobaFusionLogo } from "../icons/qwik";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div
        class={[
          "container flex flex-col items-center gap-8 px-[30px] py-[40px]",
        ]}
      >
        <a
          class="flex flex-col items-center gap-4"
          href="/"
          title="Boba Fusion"
        >
          <BobaFusionLogo height={350} width={215} />
          <h1 class="font-mate-sc text-black">Boba Fusion</h1>
        </a>
        <ul>
          <li>
            <a class="text-xl" href="#about_us">
              About Us
            </a>
          </li>
          <li>
            <a class="text-xl" href="#menu">
              Menu
            </a>
          </li>
          <li>
            <a class="text-xl" href="#values">
              Values
            </a>
          </li>
          <li>
            <a class="text-xl" href="#contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
