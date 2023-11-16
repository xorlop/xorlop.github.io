import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class="container">
        <span>
          &copy; Copyright {new Date(serverTime.value.date).getFullYear()}
        </span>
      </div>
    </footer>
  );
});
