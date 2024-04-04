import React from 'react';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  let errorMessage;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Невідома помилка';
  }

  return (
    <div id="error-page" className="flex flex-col">
      <div className="container px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-white">404 error</p>
          <p className="text-sm font-medium text-white">{errorMessage}</p>

          <h1 className="mt-3 text-2xl font-semibold md:text-3xl">Page not found</h1>

          <div className="flex items-center mt-6 gap-x-3">
            <button
              type="button"
              onClick={() => {
                window.history.back();
              }}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm transition-colors duration-200 bg-white rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>Back</span>
            </button>

            <Link
              to="/"
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600"
            >
              Повернутися на головну
            </Link>
          </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <img
            className="w-full max-w-lg lg:mx-auto rounded"
            src="https://images.unsplash.com/photo-1579273168832-1c6639363dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1506&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
