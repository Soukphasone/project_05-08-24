import React, { useState } from 'react'
import Modal from './Modal/ModalNav'
function Header() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <header data-v-3c88d514="" class="w-full z-10">
    <div data-v-3c88d514="" class="w-full mx-auto">
      <div
        data-v-4b602944=""
        data-v-3c88d514=""
        class="top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50"
      >
        <div
          data-v-4b602944=""
          class="w-full mx-auto base-container flex items-center justify-between"
        >
          <div
            data-v-4b602944=""
            class="flex space-x-4 items-center justify-center w-full &lt;sm:justify-around"
          >
           <a href='/'>
           <img
              data-v-4b602944=""
              class="cursor-pointer object-contain h-auto max-h-[80px] max-w-[120px]"
              src="https://d29xpgmn3rqne6.cloudfront.net/lucabet88/other/1674807129586"
              alt="center menu"
            />
           </a>
            <div
              data-v-4b602944=""
              class="walletWrapper px-4 flex items-center py-2 text-xs cursor-pointer"
            >
              <div data-v-4b602944="" class="">
                <div
                  data-v-4b602944=""
                  class="text-[var(--balance-wrapper-text1)] justify-between flex gap-x-2"
                >
                  <p data-v-4b602944="">เงิน</p>
                  <p
                    data-v-4b602944=""
                    class="text-right flex justify-center items-center"
                  >
                    <span
                      data-v-4b602944=""
                      class="nuxt-icon nuxt-icon--fill"
                    >
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M76.9458 67.02C76.9458 74.6368 74.8257 80.4083 70.5854 84.3345C66.4236 88.1822 60.0632 90.263 51.5041 90.5771V100H42.1991V90.5771H23V8.12721H42.1991V0H51.5041V8.36278C66.2666 9.77621 73.6478 16.2937 73.6478 27.9152C73.6478 32.5481 72.627 36.3565 70.5854 39.3404C68.5438 42.3243 65.3636 44.6407 61.0448 46.2897V46.6431C66.5414 48.1351 70.5461 50.53 73.0589 53.828C75.6502 57.0475 76.9458 61.4448 76.9458 67.02ZM33.8363 42.874H47.4994C52.5249 42.874 56.3333 41.6961 58.9246 39.3404C61.5159 36.9062 62.8115 33.3726 62.8115 28.7397C62.8115 24.5779 61.3981 21.5548 58.5713 19.6702C55.7444 17.7856 51.2685 16.8433 45.1437 16.8433H33.8363V42.874ZM49.7373 81.861C60.7307 81.861 66.2273 76.8355 66.2273 66.7844C66.2273 61.3663 64.4998 57.4009 61.0448 54.8881C57.6682 52.3753 52.2894 51.119 44.9081 51.119H33.8363V81.861H49.7373Z"
                          fill="#FFD15C"
                        ></path>
                      </svg>
                    </span>{" "}
                    0.00
                  </p>
                </div>
                <div
                  data-v-4b602944=""
                  class="goldLine my-1 h-[0.5px]"
                ></div>
                <div
                  data-v-4b602944=""
                  class="text-[var(--balance-wrapper-text2)] justify-between flex gap-x-2"
                >
                  <p data-v-4b602944="">เครดิต</p>
                  <p data-v-4b602944="" class="text-right">
                    0.00
                  </p>
                </div>
              </div>
              <div
                data-v-4b602944=""
                class="grid place-content-center rounded-full w-[20px] ml-2 transferIcon h-[20px] bg-[var(--primary)]"
              >
                <span
                  data-v-4b602944=""
                  class="nuxt-icon nuxt-icon--fill text-[var(--main-icon-color)]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8535 4.64649L11.8535 1.64649C11.7105 1.50349 11.496 1.46149 11.3085 1.53799C11.1215 1.61549 11 1.79799 11 1.99999V3.49999H3.5C2.6715 3.49999 2 4.17149 2 4.99999C2 5.82849 2.6715 6.49999 3.5 6.49999H11V7.99999C11 8.20199 11.1215 8.38449 11.3085 8.46199C11.4965 8.53949 11.711 8.49599 11.8535 8.35349L14.8535 5.35349C15.049 5.15849 15.049 4.84149 14.8535 4.64649Z"
                      fill="black"
                    ></path>
                    <path
                      d="M12.5 9.49999H4.99999V7.99999C4.99999 7.79799 4.87849 7.61549 4.69149 7.53799C4.50449 7.46049 4.28999 7.50299 4.14649 7.64649L1.14649 10.6465C0.951494 10.8415 0.951494 11.1585 1.14649 11.3535L4.14649 14.3535C4.28899 14.496 4.50349 14.5395 4.69149 14.462C4.87849 14.3845 4.99999 14.202 4.99999 14V12.5H12.5C13.3285 12.5 14 11.8285 14 11C14 10.1715 13.3285 9.49999 12.5 9.49999Z"
                      fill="black"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          
          <span
            data-v-4b602944=""
            class="nuxt-icon nuxt-icon--fill cursor-pointer text-primary text-[23px]"
         onClick={()=>{setOpenModal(true)}}
         >
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M90.625 25H9.375C5.92344 25 3.125 22.2016 3.125 18.75C3.125 15.2984 5.92344 12.5 9.375 12.5H90.625C94.0766 12.5 96.875 15.2984 96.875 18.75C96.875 22.2016 94.0766 25 90.625 25Z"
                fill="white"
              ></path>
              <path
                d="M90.625 87.5H9.375C5.92344 87.5 3.125 84.7016 3.125 81.25C3.125 77.7984 5.92344 75 9.375 75H90.625C94.0766 75 96.875 77.7984 96.875 81.25C96.875 84.7016 94.0766 87.5 90.625 87.5Z"
                fill="white"
              ></path>
              <path
                d="M90.625 56.25H9.375C5.92344 56.25 3.125 53.4516 3.125 50C3.125 46.5484 5.92344 43.75 9.375 43.75H90.625C94.0766 43.75 96.875 46.5484 96.875 50C96.875 53.4516 94.0766 56.25 90.625 56.25Z"
                fill="white"
              ></path>
            </svg>
          </span>
          {openModal && <Modal closeModal={setOpenModal}/>}
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header