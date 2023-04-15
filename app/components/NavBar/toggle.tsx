import React from 'react'

export default function Toggler() {
  return (
    <div className="flex md:items-center space-x-4 md:space-x-5 lg:space-x-8">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 23C13.6523 23 15 21.6523 15 20H20H21V19V18V17.5858L20.7071 17.2929L19 15.5858V11C19 7.84635 17.4213 4.99696 14.4992 3.9364C14.4656 2.58359 13.361 1.5 12 1.5C10.6393 1.5 9.53494 2.58311 9.50081 3.9355C6.57023 4.9944 5 7.8374 5 11V15.5858L3.29289 17.2929L3 17.5858V18V19V20H4H9C9 21.649 10.3345 23 12 23Z"
                stroke="white"
                stroke-width="2"
              />
            </svg>
            <svg
              width="1"
              height="24"
              viewBox="0 0 1 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="1" height="24" fill="#D9D9D9" />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 15C19.8783 15 20.7539 14.8908 21.625 14.6745C20.4323 19.0139 16.4417 22 12 22C6.45228 22 2 17.5477 2 12C2 7.55718 4.99056 3.55433 9.25135 2.26863C9.26209 2.27766 9.27593 2.29015 9.29289 2.30712C9.31194 2.32617 9.3235 2.34332 9.33027 2.35584L9.32986 2.35748C9.11064 3.23435 9 4.11576 9 5.00001C9 10.5523 13.4477 15 19 15Z"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </div>
  )
}
