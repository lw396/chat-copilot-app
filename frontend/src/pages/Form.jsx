import { useState } from "react";
import clsx from "clsx";

export default function Form() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <div className="isolate px-6 py-6 sm:py-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-lg leading-8 text-slate-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-xl sm:mt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="start-time"
                className="block text-sm font-medium leading-tight text-slate-900"
              >
                开始时间
              </label>
              <div className="mt-2.5">
                <input
                  id="start-time"
                  name="start-time"
                  type="datetime-local"
                  autoComplete="on"
                  className={clsx(
                    "block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300",
                    "placeholder:text-slate-300 focus:ring-2 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-4"
                  )}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="end-time"
                className="block text-sm font-medium leading-tight text-slate-900"
              >
                结束时间
              </label>
              <div className="mt-2.5">
                <input
                  id="end-time"
                  name="end-time"
                  type="datetime-local"
                  autoComplete="on"
                  className={clsx(
                    "block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300",
                    "placeholder:text-slate-300 focus:ring-2 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-4"
                  )}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="billing-id"
                className="block text-sm font-medium leading-tight text-slate-900"
              >
                计费规则
              </label>
              <div className="mt-2.5">
                <input
                  id="billing-id"
                  name="billing-id"
                  type="number"
                  autoComplete="on"
                  className={clsx(
                    "block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300",
                    "placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  )}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="ins-id"
                className="block text-sm font-medium leading-tight text-slate-900"
              >
                仪器ID
              </label>
              <div className="mt-2.5">
                <input
                  id="ins-id"
                  name="ins-id"
                  type="number"
                  autoComplete="on"
                  className={clsx(
                    "block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300",
                    "placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  )}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="ins-id"
                className="block text-sm font-medium leading-tight text-slate-900"
              >
                样品组
              </label>
              <div className="mt-2.5">
                <input
                  id="ins-id"
                  name="ins-id"
                  type="number"
                  autoComplete="on"
                  className={clsx(
                    "block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300",
                    "placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  )}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="ins-id"
                className="block text-sm font-medium leading-tight text-slate-900"
              >
                送样人
              </label>
              <div className="mt-2.5">
                <input
                  id="ins-id"
                  name="ins-id"
                  type="text"
                  autoComplete="on"
                  className={clsx(
                    "block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300",
                    "placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  )}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="ins-id"
                className="block text-sm font-medium leading-tight text-slate-900"
              >
                仪器ID
              </label>
              <div className="mt-2.5">
                <input
                  id="ins-id"
                  name="ins-id"
                  type="number"
                  autoComplete="on"
                  className={clsx(
                    "block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300",
                    "placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  )}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="ins-id"
                className="block text-sm font-medium leading-tight text-slate-900"
              >
                仪器ID
              </label>
              <div className="mt-2.5">
                <input
                  id="ins-id"
                  name="ins-id"
                  type="number"
                  autoComplete="on"
                  className={clsx(
                    "block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300",
                    "placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  )}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="ins-id"
                className="block text-sm font-medium leading-tight text-slate-900"
              >
                仪器ID
              </label>
              <div className="mt-2.5">
                <input
                  id="ins-id"
                  name="ins-id"
                  type="number"
                  autoComplete="on"
                  className={clsx(
                    "block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300",
                    "placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  )}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="ins-id"
                className="block text-sm font-medium leading-tight text-slate-900"
              >
                仪器ID
              </label>
              <div className="mt-2.5">
                <input
                  id="ins-id"
                  name="ins-id"
                  type="number"
                  autoComplete="on"
                  className={clsx(
                    "block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300",
                    "placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  )}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="ins-id"
                className="block text-sm font-medium leading-tight text-slate-900"
              >
                仪器ID
              </label>
              <div className="mt-2.5">
                <input
                  id="ins-id"
                  name="ins-id"
                  type="number"
                  autoComplete="on"
                  className={clsx(
                    "block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300",
                    "placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  )}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="ins-id"
                className="block text-sm font-medium leading-tight text-slate-900"
              >
                仪器ID
              </label>
              <div className="mt-2.5">
                <input
                  id="ins-id"
                  name="ins-id"
                  type="number"
                  autoComplete="on"
                  className={clsx(
                    "block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300",
                    "placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  )}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className={clsx(
                "block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300",
                "placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
              )}
            >
              Let's talk
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
