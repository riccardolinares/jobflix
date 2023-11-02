import Button from "./ui/Button";

export default function Subscribe() {
  return (
    <form className="mt-10 w-full">
      <div className="flex gap-x-4">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <Button type="submit">Iscriviti</Button>
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-900">
        Ci teniamo ai tuoi dati. Leggi la nostra{" "}
        <a href="#" className="font-semibold text-blue hover:text-light-blue">
          privacy&nbsp;policy
        </a>
        .
      </p>
    </form>
  );
}
