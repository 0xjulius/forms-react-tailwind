import { useState } from "react";
import "./App.css";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-auto">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* vasen paneeli */}
        <div className="relative w-full md:w-1/2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 flex flex-col justify-between overflow-hidden">
          {/* taustakuva */}
          <img
            src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Office workspace"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Tervetuloa takaisin!</h2>
            <p className="text-lg opacity-90 mb-4">
              Ole hyvä ja kirjaudu sisään
            </p>
          </div>
          <div className="mt-auto z-10 relative">
            <p className="text-sm opacity-90">
              "The best investment you can make is in yourself."
            </p>
            <p className="text-sm font-bold mt-1 ">- Warren Buffett</p>
          </div>
        </div>

        {/* Right panel (Form) */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-gray-800 pb-6 ">
            Kirjaudu sisään
          </h3>

          <div class="flex space-x-3">
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 hover:bg-gray-50 transition-colors cursor-pointer">
              <svg
                class="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
                  fill="#4285F4"
                />
                <path
                  d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
                  fill="#4285F4"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700">Google</span>
            </button>
            <button class="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 hover:bg-gray-50 transition-colors cursor-pointer">
              <svg
                class="w-5 h-5 text-[#1877F2]"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-5.8-4.699-10.5-10.5-10.5s-10.5 4.7-10.5 10.5c0 5.24 3.84 9.584 8.86 10.373v-7.337h-2.666v-3.036h2.666V9.98c0-2.63 1.568-4.085 3.966-4.085 1.15 0 2.351.205 2.351.205v2.585h-1.324c-1.304 0-1.712.81-1.712 1.64v1.97h2.912l-.465 3.036H16.14v7.337c5.02-.79 8.859-5.133 8.859-10.373z" />
              </svg>
              <span class="text-sm font-medium text-gray-700">Facebook</span>
            </button>
          </div>

          <div className="relative flex items-center py-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-600 text-sm">
              tai jatka sähköpostitse
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <form
            className="form space-y-1 py-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <div class="flex items-center justify-between mb-1">
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
                Sähköpostiosoite
              </label>
            </div>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-6 pb-6 text-blue-400">
                <i className="fas fa-envelope text-xl"></i>
              </span>
              <input
                type="email"
                placeholder="sinun.nimesi@esimerkki.fi"
                className="w-full pl-10 p-3 rounded-md border border-gray-300"
              />
            </div>

            <div class="flex items-center justify-between mb-1">
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
              >
                Salasana
              </label>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-6 pb-6 text-blue-400">
                <i className="fas fa-lock text-xl"></i>{" "}
                {/* You can use fa-2x instead */}
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-12 p-3 rounded-md border border-gray-300"
              />
            </div>

            <div className="flex items-center ">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Muista minut
              </label>
            </div>

            {submitted && (
              <p className="text-red-600 text-sm">
                Virhe kirjautumisessa. Tarkista sähköpostiosoite ja salasana.
              </p>
            )}

            <button className="relative w-full inline-flex items-center justify-center overflow-hidden text-sm font-semibold text-white rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 transition-all duration-300 ease-in-out hover:shadow-lg focus:ring-4 focus:ring-purple-300 cursor-pointer group opacity-80">
              <span className="relative z-10 px-6 py-3.5 bg-opacity-0 group-hover:bg-opacity-10 transition duration-300 ease-in-out">
                Kirjaudu sisään
              </span>
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-8">
            Eikö sinulla ole vielä tunnuksia?{" "}
            <a
              href="#"
              className="pl-2 font-medium text-blue-600 hover:text-blue-500"
            >
              Luo tunnukset
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
