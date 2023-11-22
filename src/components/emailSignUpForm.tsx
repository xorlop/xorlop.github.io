import { component$ } from "@builder.io/qwik";

export default component$(() => {
  // const handleSubmit = () => {};

  return (
    <>
      <script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      ></script>
      <form
        action="https://"
        method="POST"
        class="flex w-full min-w-[300px] max-w-[500px] flex-col gap-4"
      >
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          class="h-full rounded p-2 drop-shadow-sm"
        />
        <div class="cf-turnstile" data-sitekey="0x4AAAAAAANfrRKQb4Z5nb2P"></div>
        <button
          class="button button-dark drop-shadow-sm"
          type="submit"
          value="Submit"
        >
          Sign Up
        </button>
      </form>
    </>
  );
});
